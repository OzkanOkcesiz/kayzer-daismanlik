import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, phone, subject, message } = await request.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL,
      subject: `İletişim Formu: ${subject}`,
      html: `
        <h3>İletişim Formu Mesajı</h3>
        <p><strong>Ad Soyad:</strong> ${name}</p>
        <p><strong>E-posta:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone || "Belirtilmemiş"}</p>
        <p><strong>Konu:</strong> ${subject}</p>
        <p><strong>Mesaj:</strong></p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "E-posta başarıyla gönderildi" },
      { status: 200 }
    );
  } catch (error) {
    console.error("E-posta gönderme hatası:", error);
    return NextResponse.json(
      { message: "E-posta gönderilirken bir hata oluştu" },
      { status: 500 }
    );
  }
} 