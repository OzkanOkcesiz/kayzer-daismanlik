import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Referanslarımız | Kayzer Danışmanlık",
  description: "Başarıyla tamamladığımız projeler ve mutlu müşterilerimizin hikayeleri. Kurumsal danışmanlık alanında güvenilir çözüm ortağınız Kayzer Danışmanlık referansları.",
  openGraph: {
    title: "Referanslarımız | Kayzer Danışmanlık",
    description: "Başarıyla tamamladığımız projeler ve mutlu müşterilerimizin hikayeleri.",
    images: ["/images/og-references.jpg"],
  },
};

const references = [
  {
    name: "Pizzzen Sınırsız Pizza",
    image: "/images/references/pizzen.jpeg",
    description: "Konsept geliştirme, personel eğitimi, menü hazırlık, reçete hazırlık, cost control hizmetleri gibi temel hizmetlerin hepsini sağladığımız bir işletme.",
    duration: "12 ay",
    type: "restaurant",
  },
  {
    name: "Zen Burger",
    image: "/images/references/zenburger.jpeg",
    description: "Personel Eğitimi, reçete hazırlık, cost control ve restoran hijyen denetimi gibi temel hizmetleri sağladık.",
    duration: "6 ay",
    type: "restaurant",
  },
  {
    name: "Gönül Dağı Kır Bahçesi",
    image: "/images/references/gonuldagı.jpeg",
    description: "İşletmenin tüm süreçlerinde danışmanlık hizmeti verdik. Menü planlaması, personel yönetimi, maliyet analizi ve operasyonel süreçlerin iyileştirilmesinde çözüm ortağı olduk.",
    duration: "12 ay",
    type: "restaurant",
  },
];

export default function ReferencesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center bg-gradient-to-r from-brown-900 to-brown-800 text-white">
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            Referanslarımız
          </h1>
        </div>
      </section>

      {/* Referanslar Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {references.map((reference, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={reference.image}
                    alt={reference.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-brown-800">
                    {reference.name}
                  </h3>
                  <p className="text-brown-600 mb-4">
                    {reference.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Müşteri Yorumları Section - Şimdilik Gizli
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-brown-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-brown-900">
            Müşteri Yorumları
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Yorum 1 */}{/*
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 mr-4">
                  <Image
                    src="/api/avatar?name=Ali Yıldız&bg=%23967669&size=100"
                    alt="Ali Yıldız"
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-brown-800">Ali Yıldız</h3>
                  <p className="text-sm text-brown-600">Pizzzen Sınırsız Pizza Kurucu</p>
                </div>
              </div>
              <p className="text-brown-600 italic">
                &quot;Kayzer Danışmanlık ile çalışmak bizim için çok verimli bir
                deneyim oldu. Profesyonel yaklaşımları ve uzman kadroları ile
                projelerimizi başarıyla tamamladık.&quot;
              </p>
            </div>

            {/* Yorum 2 */}{/*
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 mr-4">
                  <Image
                    src="/api/avatar?name=Zeynep Ak&bg=%23846358&size=100"
                    alt="Zeynep Ak"
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-brown-800">Zeynep Ak</h3>
                  <p className="text-sm text-brown-600">Zen Burger İşletme Müdürü</p>
                </div>
              </div>
              <p className="text-brown-600 italic">
                &quot;Operasyon süreçlerimizin iyileştirilmesi ve personel eğitimlerinde
                Kayzer Danışmanlık&apos;ın desteği çok değerliydi. Müşteri memnuniyetimiz
                gözle görülür şekilde arttı.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>
      */}
    </div>
  );
} 