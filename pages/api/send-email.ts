import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  console.log('Process.env.EMAIL_USER:', process.env.EMAIL_USER); // Debug log

  try {
    const { name, email, phone, message } = req.body;

    // Validācija
    if (!name || !email || !message) {
      return res.status(400).json({ 
        error: 'Missing required fields' 
      });
    }

    // Izveidojiet transporter ar drošākiem iestatījumiem
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false // Priekš development vides
      }
    });

    // Verificē savienojumu
    await transporter.verify();

    const mailOptions = {
      from: `"Kontaktforma" <${process.env.EMAIL_USER}>`,
      to: 'krists.zarans@gmail.com',
      subject: `Jauna ziņa no ${name}`,
      text: `Vārds: ${name}\nE-pasts: ${email}\nTelefons: ${phone || 'Nav norādīts'}\n\nZiņa:\n${message}`,
      html: `
        <div>
          <h2>Jauns ziņojums</h2>
          <p><strong>Vārds:</strong> ${name}</p>
          <p><strong>E-pasts:</strong> ${email}</p>
          ${phone ? `<p><strong>Telefons:</strong> ${phone}</p>` : ''}
          <p><strong>Ziņa:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        </div>
      `
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Full error:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}