import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Hakkımızda | Kayzer Danışmanlık",
  description: "Kayzer Danışmanlık olarak 15 yılı aşkın deneyimimizle işletmelere profesyonel danışmanlık hizmetleri sunuyoruz. Misyonumuz, vizyonumuz ve değerlerimiz hakkında bilgi edinin.",
  openGraph: {
    title: "Hakkımızda | Kayzer Danışmanlık",
    description: "Kayzer Danışmanlık olarak 15 yılı aşkın deneyimimizle işletmelere profesyonel danışmanlık hizmetleri sunuyoruz.",
    images: ["/images/og-about.jpg"],
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center bg-gradient-to-r from-brown-900 to-brown-800 text-white">
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            Hakkımızda
          </h1>
        </div>
      </section>

      {/* Misyon & Vizyon Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Misyon */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-brown-900">Misyonumuz</h2>
            <p className="text-brown-600 leading-relaxed">
              Müşterilerimizin iş süreçlerini optimize ederek, verimliliği
              artırmak ve sürdürülebilir büyüme sağlamak için profesyonel
              danışmanlık hizmetleri sunmaktayız. Her projede en yüksek kalite
              standartlarını koruyarak, müşterilerimizin başarısına katkıda
              bulunmayı hedefliyoruz.
            </p>
          </div>

          {/* Vizyon */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-brown-900">Vizyonumuz</h2>
            <p className="text-brown-600 leading-relaxed">
              Türkiye&apos;nin önde gelen danışmanlık şirketlerinden biri olarak,
              sektörde öncü ve yenilikçi çözümler sunmaya devam etmek. Global
              standartlarda hizmet kalitesiyle müşterilerimizin güvenilir iş
              ortağı olmak ve sürdürülebilir değer yaratmak.
            </p>
          </div>
        </div>
      </section>

      {/* Değerlerimiz Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-brown-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-brown-900">
            Değerlerimiz
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Değer 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-brown-800">
                Güvenilirlik
              </h3>
              <p className="text-brown-600">
                Müşterilerimizle kurduğumuz güven ilişkisi en önemli
                değerlerimizden biridir.
              </p>
            </div>

            {/* Değer 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-brown-800">
                Yenilikçilik
              </h3>
              <p className="text-brown-600">
                Sürekli gelişen teknoloji ve trendleri takip ederek en güncel
                çözümleri sunuyoruz.
              </p>
            </div>

            {/* Değer 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-brown-800">
                Profesyonellik
              </h3>
              <p className="text-brown-600">
                Her projede profesyonel yaklaşımımızla en yüksek standartları
                koruyoruz.
              </p>
            </div>

            {/* Değer 4 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-brown-800">
                Müşteri Odaklılık
              </h3>
              <p className="text-brown-600">
                Müşterilerimizin ihtiyaçlarını anlamak ve en uygun çözümleri
                sunmak önceliğimizdir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ekibimiz Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-brown-900">
            Uzman Ekibimiz
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Ekip Üyesi 1 */}
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <Image
                  src="/api/avatar?name=Ahmet Yılmaz&bg=%23967669"
                  alt="Ahmet Yılmaz"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-brown-800">
                Ahmet Yılmaz
              </h3>
              <p className="text-brown-600">Genel Müdür</p>
            </div>

            {/* Ekip Üyesi 2 */}
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <Image
                  src="/api/avatar?name=Ayşe Kaya&bg=%23846358"
                  alt="Ayşe Kaya"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-brown-800">
                Ayşe Kaya
              </h3>
              <p className="text-brown-600">Proje Yöneticisi</p>
            </div>

            {/* Ekip Üyesi 3 */}
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <Image
                  src="/api/avatar?name=Mehmet Demir&bg=%23a18072"
                  alt="Mehmet Demir"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-brown-800">
                Mehmet Demir
              </h3>
              <p className="text-brown-600">Danışman</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 