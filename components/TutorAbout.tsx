import React from 'react';
import { ArrowLeft, Star, CalendarCheck, HandCoins } from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const TutorAbout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fef6f8] via-white to-[#f4f5ff] flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-20">
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => {
              window.location.href = '/';
            }}
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-mentu-red mb-6 transition-colors"
          >
            <ArrowLeft size={16} />
            Ana sayfaya dön
          </button>

          <div className="bg-white/90 backdrop-blur rounded-3xl shadow-xl border border-mentu-red/10 px-6 sm:px-10 py-10 sm:py-12 mb-10">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-mentu-red mb-2">
              Eğitmen
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Mentu ile <span className="text-mentu-red">eğitmenlik yolculuğuna</span> başla.
            </h1>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-3xl">
              İster alanında uzman bir eğitmen ol, ister alaylı bir yetenek. Mentu’da profilini oluştur, ders ilanı
              aç ve seni bekleyen öğrencilerle buluş.
            </p>
          </div>

          <section className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 sm:p-7">
              <div className="flex items-center gap-2 mb-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-mentu-red/10 text-lg">
                  📸
                </span>
                <h2 className="text-lg font-semibold text-gray-900">Dijital Vitrinini Oluştur</h2>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Sadece adını soyadını yazıp geçme. Seni öne çıkaracak diplomalarını, sertifikalarını veya ödüllerini
                <span className="font-semibold text-gray-800"> "Belgelerim"</span> sekmesine yükle.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mt-3">
                <span className="font-semibold text-gray-800">Alaylı mısın?</span> Sorun değil. Yaptığın işlerin
                fotoğraflarını ve videolarını galeriye ekle; yeteneğin senin yerine konuşsun.
              </p>
            </div>

            <div className="bg-gradient-to-br from-mentu-red to-pink-500 rounded-2xl shadow-md border border-mentu-red/20 p-6 sm:p-7 text-white relative overflow-hidden">
              <div className="absolute -top-6 -right-10 w-28 h-28 bg-white/15 rounded-full blur-2xl" />
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-3 py-1 text-xs mb-3">
                  <Star size={14} className="text-mentu-gold" />
                  <span>Öne çıkan eğitmen profilleri</span>
                </div>
                <h2 className="text-lg font-semibold mb-2">Kendi Pazarını Yönet</h2>
                <p className="text-sm text-white/90 leading-relaxed">
                  İlanına yeterince talep gelmezse müşteri bekleyen esnaf olma. Öğrenci ilanlarını gözden geçir,
                  ders arayanlara teklifini sen götür. İşini şansa bırakma; aktif olarak öğrencine ulaş.
                </p>
              </div>
            </div>
          </section>

          <section className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="bg-gradient-to-br from-indigo-500 via-blue-500 to-cyan-400 rounded-2xl shadow-md border border-indigo-400/40 p-6 sm:p-7 text-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center">
                  <CalendarCheck size={20} />
                </div>
                <h2 className="text-lg font-semibold">Takvim ve Ders Yönetimi</h2>
              </div>
              <p className="text-sm text-white/90 leading-relaxed">
                Müsait olduğun gün ve saatleri ilan açarken takvimine işle. Öğrenci rezervasyon yaptığında sana
                anında bildirim gelir.
              </p>
              <p className="text-sm text-white/90 leading-relaxed mt-3">
                Dersi istersen online, istersen belirlediğiniz lokasyonda yüzyüze gerçekleştir; tüm süreç tek yerden
                takip edilir.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md border border-emerald-100 p-6 sm:p-7">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <HandCoins size={20} />
                </div>
                <h2 className="text-lg font-semibold text-gray-900">Güvenli Ödeme ve Değerlendirme</h2>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Ders talebini onayladığın an, öğrencinin ödemesi Mentu havuz hesabına alınır (provizyon). Sen dersi
                bitirip onayladığında, ücret (komisyon düşülerek) anında senin cüzdanına geçer.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mt-3">
                Öğrencinden seni puanlamasını iste; yıldızların arttıkça daha çok öğrenciye ulaşırsın. İyi bir itibar,
                en büyük referansın olur.
              </p>
            </div>
          </section>

          <section className="bg-white/90 rounded-3xl shadow-inner border border-dashed border-mentu-red/30 p-6 sm:p-8 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Eğitmen olarak ilk adımı atmaya hazır mısın?</h3>
            <p className="text-sm sm:text-base text-gray-600 mb-5 max-w-2xl mx-auto">
              Ön kayıt formunu doldurarak, eğitmen olarak sisteme ilk katılanlardan biri ol. Profilini birlikte
              şekillendirelim, öğrencilerin seni daha uygulama çıkmadan tanısın.
            </p>
            <button
              onClick={() => {
                const target = document.getElementById('pre-register');
                if (target) {
                  target.scrollIntoView({ behavior: 'smooth', block: 'center' });
                } else {
                  window.location.href = '/#pre-register';
                }
              }}
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-mentu-red text-white font-semibold text-sm sm:text-base shadow-lg hover:bg-mentu-redLight transition-colors"
            >
              Ön Kayıt Formuna Git
            </button>
          </section>
        </section>
      </main>
      <Footer />
    </div>
  );
};


