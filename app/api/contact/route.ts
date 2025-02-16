import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, phone, subject, message } = await request.json();

    // Input validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { message: "Tüm zorunlu alanları doldurunuz" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: "Geçerli bir e-posta adresi giriniz" },
        { status: 400 }
      );
    }

    // SMTP Transporter yapılandırması
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false
      },
      debug: true // Debug modunu aktif et
    });

    // Bağlantı testi
    try {
      await transporter.verify();
      console.log("SMTP bağlantısı başarılı");
    } catch (verifyError) {
      console.error("SMTP bağlantı hatası:", verifyError);
      return NextResponse.json(
        { message: "E-posta sunucusuna bağlanılamadı. Lütfen daha sonra tekrar deneyiniz." },
        { status: 500 }
      );
    }

    const mailOptions = {
      from: `"Kayzer Danışmanlık İletişim Formu" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      subject: `İletişim Formu: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #43302b; border-bottom: 2px solid #43302b; padding-bottom: 10px;">Yeni İletişim Formu Mesajı</h2>
          
          <div style="margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Ad Soyad:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>E-posta:</strong> ${email}</p>
            <p style="margin: 10px 0;"><strong>Telefon:</strong> ${phone || "Belirtilmemiş"}</p>
            <p style="margin: 10px 0;"><strong>Konu:</strong> ${subject}</p>
          </div>

          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #43302b; margin-top: 0;">Mesaj:</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>

          <div style="color: #666; font-size: 12px; margin-top: 20px; padding-top: 10px; border-top: 1px solid #eee;">
            Bu e-posta Kayzer Danışmanlık web sitesi iletişim formundan gönderilmiştir.
          </div>
        </div>
      `,
      text: `
        Yeni İletişim Formu Mesajı
        
        Ad Soyad: ${name}
        E-posta: ${email}
        Telefon: ${phone || "Belirtilmemiş"}
        Konu: ${subject}
        
        Mesaj:
        ${message}
      `, // Text versiyonu da ekle
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log("E-posta başarıyla gönderildi");
      return NextResponse.json(
        { message: "Mesajınız başarıyla gönderildi" },
        { status: 200 }
      );
    } catch (sendError) {
      console.error("E-posta gönderme hatası:", sendError);
      return NextResponse.json(
        { message: "E-posta gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyiniz." },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Genel hata:", error);
    return NextResponse.json(
      { message: "Bir hata oluştu. Lütfen daha sonra tekrar deneyiniz." },
      { status: 500 }
    );
  }
} 