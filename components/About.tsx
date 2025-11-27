import React from 'react';
import { Users, HeartHandshake, Sparkles, ArrowLeft } from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-20 bg-gradient-to-b from-[#faf5f7] via-white to-[#f7fafc]">
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

          <div className="bg-white/80 backdrop-blur rounded-3xl shadow-xl border border-rose-50 px-6 sm:px-10 py-10 sm:py-12 mb-12">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-mentu-red mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-mentu-red animate-pulse" />
              Hakkımızda
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Öğrenmeyi daha <span className="text-mentu-red">insan odaklı</span> hale getiriyoruz.
            </h1>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-3xl">
              Mentu, becerilerini paylaşmak isteyen eğitmenlerle, merak ettiği konuda gelişmek isteyen öğrencileri
              buluşturan yeni nesil bir öğrenme topluluğu. Amacımız, herkesin kendi hızında ve kendi tarzında
              öğrenebileceği, yargılayıcı olmayan bir alan yaratmak.
            </p>
          </div>

          <section className="mb-12">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Sparkles size={18} className="text-mentu-goldDark" />
              Mentu’nun hikâyesi
            </h2>
            <div className="grid md:grid-cols-3 gap-5">
              <div className="rounded-2xl p-5 bg-gradient-to-br from-mentu-red/90 via-mentu-red to-rose-500 text-white shadow-lg">
                <p className="text-xs uppercase tracking-[0.25em] mb-2 opacity-80">Başlangıç</p>
                <p className="font-semibold mb-2">Bir ihtiyaçtan doğdu</p>
                <p className="text-sm text-white/90">
                  Aynı soruyu paylaştık: “Neden tecrübeli birinden bir şey öğrenmek bu kadar zor ve karmaşık?”
                  Mentu, bu soruya verilen basit bir cevap olarak ortaya çıktı.
                </p>
              </div>
              <div className="rounded-2xl p-5 bg-gradient-to-br from-mentu-gold to-amber-400 text-gray-900 shadow-lg">
                <p className="text-xs uppercase tracking-[0.25em] mb-2 text-gray-700/80">Bugün</p>
                <p className="font-semibold mb-2">Topluluk odaklı tasarım</p>
                <p className="text-sm text-gray-800">
                  Ürünü masa başında değil, gerçek eğitmenler ve öğrencilerle birlikte tasarlıyoruz. Her geri bildirim,
                  Mentu’nun bir parçası oluyor.
                </p>
              </div>
              <div className="rounded-2xl p-5 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg">
                <p className="text-xs uppercase tracking-[0.25em] mb-2 opacity-80">Yarın</p>
                <p className="font-semibold mb-2">Sınırların ötesinde öğrenme</p>
                <p className="text-sm text-white/90">
                  Sadece Türkiye’de değil, dünyanın her yerinden insanların birbirine bilgi ve deneyim aktarabildiği
                  sıcak bir öğrenme ağı kurmak istiyoruz.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 sm:p-8 mb-12">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Users size={18} className="text-mentu-red" />
              Mentu’yu farklı kılan ne?
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-600">
              <div className="space-y-2">
                <p className="font-semibold text-gray-900">Gerçek insanlar, gerçek deneyimler</p>
                <p>
                  Sadece teorik bilgi değil; sektörden profesyoneller, deneyimli eğitmenler ve kendi yolculuğunu
                  paylaşmak isteyen kişilerle öğrenme imkânı.
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-gray-900">Esnek ve kişisel akış</p>
                <p>
                  Yoğun hayat temposuna uyum sağlayan programlar, kısa oturumlar ve size uygun zaman aralıklarıyla
                  şekillenen dersler.
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-gray-900">Güvenli ve şeffaf bir ortam</p>
                <p>
                  Değerlendirmeler, yorumlar ve açık profil yapısı sayesinde, kiminle çalışacağınızı net bir şekilde
                  görebileceğiniz şeffaf bir ekosistem.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-r from-mentu-red to-pink-700 rounded-3xl p-8 sm:p-10 text-white mb-6 relative overflow-hidden">
            <div className="absolute inset-y-0 right-0 w-1/2 bg-white/5 blur-3xl pointer-events-none" />
            <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
              <div className="max-w-xl">
                <h3 className="text-2xl sm:text-3xl font-bold mb-3">Bu yolculuğu birlikte tasarlayalım.</h3>
                <p className="text-sm sm:text-base text-white/80 mb-4">
                  Mentu henüz geliştirme aşamasında. Geri bildirimlerin, fikirlerin ve ihtiyaçların; platformun
                  şeklini doğrudan etkileyecek. Senin gibi erken dönemde bize katılan kişilerle birlikte,
                  geleceğin öğrenme deneyimini tasarlıyoruz.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-5 py-4 flex flex-col gap-3 text-sm max-w-xs">
                <div className="flex items-center gap-2">
                  <HeartHandshake size={18} className="text-mentu-gold" />
                  <p className="font-semibold">Topluluğa katıl</p>
                </div>
                <p className="text-white/80">
                  Ön kayıt formunu doldurarak hem ilk kullanıcılarımızdan olabilir hem de kapalı beta sürecine
                  davet edilme şansı yakalayabilirsin.
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
                  className="mt-1 inline-flex items-center justify-center px-4 py-2 rounded-xl bg-white text-mentu-red font-semibold text-sm hover:bg-rose-50 transition-colors"
                >
                  Ön Kayıt Formuna Git
                </button>
              </div>
            </div>
          </section>
        </section>
      </main>
      <Footer />
    </div>
  );
};


