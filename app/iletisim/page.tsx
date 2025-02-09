"use client";

import { useState } from "react";
import { toast } from "react-hot-toast";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Mesajınız başarıyla gönderildi!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        toast.error(data.message || "Bir hata oluştu");
      }
    } catch {
      toast.error("Bir hata oluştu");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    
    if (name === "phone") {
      // Sadece rakamları al
      const numbersOnly = value.replace(/\D/g, "");
      
      // Maksimum 10 rakam (5XX XXX XXXX)
      const truncated = numbersOnly.slice(0, 10);
      
      // Formatlama: 5XX XXX XXXX
      let formatted = truncated;
      if (truncated.length >= 3) {
        formatted = truncated.replace(/(\d{3})(\d{3})?(\d{4})?/, function(_, p1, p2, p3) {
          let output = p1;
          if (p2) output += " " + p2;
          if (p3) output += " " + p3;
          return output;
        });
      }
      
      setFormData((prev) => ({
        ...prev,
        [name]: formatted,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center bg-gradient-to-r from-brown-900 to-brown-800 text-white">
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            İletişim
          </h1>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-brown-900">
              İletişim Bilgileri
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-brown-800">
                  Adres
                </h3>
                <p className="text-brown-600">
                  Maslak Mah. Büyükdere Cad. No:123
                  <br />
                  Sarıyer / İstanbul
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-brown-800">
                  Telefon
                </h3>
                <p className="text-brown-600">+90 (212) 123 45 67</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-brown-800">
                  E-posta
                </h3>
                <p className="text-brown-600">info@kayzer.com.tr</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-brown-800">
                  Çalışma Saatleri
                </h3>
                <p className="text-brown-600">
                  Pazartesi - Cuma: 09:00 - 18:00
                  <br />
                  Cumartesi - Pazar: Kapalı
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-brown-900">
              Bize Ulaşın
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-brown-700"
                >
                  Ad Soyad
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-2 border-brown-300 bg-white px-4 py-2 text-brown-900 shadow-sm focus:border-brown-500 focus:ring-brown-500"
                  placeholder="Ad Soyad"
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-brown-700"
                >
                  E-posta
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-2 border-brown-300 bg-white px-4 py-2 text-brown-900 shadow-sm focus:border-brown-500 focus:ring-brown-500"
                  placeholder="ornek@email.com"
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-brown-700"
                >
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  maxLength={12}
                  className="mt-1 block w-full rounded-md border-2 border-brown-300 bg-white px-4 py-2 text-brown-900 shadow-sm focus:border-brown-500 focus:ring-brown-500"
                  placeholder="5XX XXX XXXX"
                  pattern="[5][0-9]{2} [0-9]{3} [0-9]{4}"
                  title="Lütfen geçerli bir telefon numarası girin (5XX XXX XXXX)"
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-brown-700"
                >
                  Konu
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-2 border-brown-300 bg-white px-4 py-2 text-brown-900 shadow-sm focus:border-brown-500 focus:ring-brown-500"
                  placeholder="Mesajınızın konusu"
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-brown-700"
                >
                  Mesaj
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="mt-1 block w-full rounded-md border-2 border-brown-300 bg-white px-4 py-2 text-brown-900 shadow-sm focus:border-brown-500 focus:ring-brown-500"
                  placeholder="Mesajınızı buraya yazın..."
                  disabled={isSubmitting}
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-brown-600 hover:bg-brown-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Gönderiliyor..." : "Gönder"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
} 