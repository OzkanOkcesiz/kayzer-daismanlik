import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/hero/cafe-hero.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Cafe ve Restaurant<br />Danışmanlık Hizmetleri
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-8">
            İşletmenizi bir üst seviyeye taşımak için profesyonel çözümler sunuyoruz.
          </p>
          <Link
            href="/iletisim"
            className="inline-block bg-brown-600 hover:bg-brown-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
          >
            Bizimle İletişime Geçin
          </Link>
        </div>
      </section>

      {/* Hizmetlerimiz Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brown-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-brown-900">
            Danışmanlık Hizmetlerimiz
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Hizmet 1 */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-brown-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-brown-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-brown-800">
                Konsept Geliştirme
              </h3>
              <p className="text-brown-600">
                Özgün ve rekabetçi konseptler oluşturarak işletmenizi öne çıkarıyoruz.
                Hedef kitlenize uygun atmosfer ve menü tasarımı yapıyoruz.
              </p>
            </div>

            {/* Hizmet 2 */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-brown-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-brown-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-brown-800">
                Operasyon Yönetimi
              </h3>
              <p className="text-brown-600">
                Verimli süreç yönetimi ile maliyetlerinizi düşürüyor, karlılığınızı
                artırıyoruz. Personel eğitimi ve kalite standartları oluşturuyoruz.
              </p>
            </div>

            {/* Hizmet 3 */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-brown-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-brown-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-brown-800">
                Pazarlama Stratejisi
              </h3>
              <p className="text-brown-600">
                Dijital pazarlama ve sosyal medya yönetimi ile müşteri sayınızı
                artırıyor, marka bilinirliğinizi güçlendiriyoruz.
              </p>
            </div>

            {/* Hizmet 4 - Kalite ve Standartların Sürdürülebilirliği */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-brown-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-brown-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-brown-800">
                Kalite ve Standartların Sürdürülebilirliği
              </h3>
              <p className="text-brown-600">
                İşletmenizi getirdiğiniz seviyede tutmak ve standartlarınızı koruyabilmek için menü, personel, reçete ve restoran hijyeni konusunda denetim hizmetleri sağlıyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Neden Biz Section - Geçici olarak gizlendi
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-brown-900">
            Neden Bizi Tercih Etmelisiniz?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-brown-600 mb-4">15+</div>
              <h3 className="text-lg font-semibold mb-2 text-brown-800">
                Yıllık Deneyim
              </h3>
              <p className="text-brown-600">
                Sektörde uzun yıllara dayanan tecrübe
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-brown-600 mb-4">200+</div>
              <h3 className="text-lg font-semibold mb-2 text-brown-800">
                Başarılı Proje
              </h3>
              <p className="text-brown-600">
                Tamamlanmış cafe ve restaurant projeleri
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-brown-600 mb-4">50+</div>
              <h3 className="text-lg font-semibold mb-2 text-brown-800">
                Uzman Kadro
              </h3>
              <p className="text-brown-600">
                Alanında uzman profesyonel ekip
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-brown-600 mb-4">24/7</div>
              <h3 className="text-lg font-semibold mb-2 text-brown-800">
                Destek
              </h3>
              <p className="text-brown-600">
                Kesintisiz danışmanlık hizmeti
              </p>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brown-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-white">
            İşletmenizi büyütmek için profesyonel destek mi arıyorsunuz?
          </h2>
          <p className="text-xl text-brown-200 mb-12 max-w-3xl mx-auto">
            Size özel çözümler için hemen iletişime geçin. Ücretsiz danışmanlık hizmetimizden
            faydalanın.
          </p>
          <Link
            href="/iletisim"
            className="inline-block bg-brown-600 hover:bg-brown-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
          >
            Hemen İletişime Geçin
          </Link>
        </div>
      </section>
    </div>
  );
}
