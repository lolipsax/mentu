import React from 'react';
import { ArrowLeft, Search, ShieldCheck, MessageCircle } from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const StudentAbout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f4f7ff] via-white to-[#fff7f5] flex flex-col">
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
              Öğrenci
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Aradığın dersi, <span className="text-mentu-red">sana en uygun eğitmenle</span> buluştur.
            </h1>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-3xl">
              Üniversite sınavına hazırlanıyor, yeni bir hobi deniyor veya kariyerini değiştirmek istiyor olabilirsin.
              Mentu, ihtiyacına en uygun eğitmeni akıllı filtrelerle bulmana ve güvenle ders ayarlamana yardımcı olur.
            </p>
          </div>

          <section className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 sm:p-7">
              <div className="flex items-center gap-2 mb-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-mentu-red/10 text-lg">
                  🔍
                </span>
                <h2 className="text-lg font-semibold text-gray-900">Akıllı Keşif veya Talep Oluşturma</h2>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Lokasyon (<span className="font-semibold text-gray-800">Online / Yüzyüze</span>), fiyat aralığı ve puan
                filtrelerini kullanarak binlerce eğitmen arasından sana en uygununu bul.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mt-3">
                İstediğin eğitmeni bulamadın mı? <span className="font-semibold text-gray-800">“Bana Cumartesi günü,
                şu fiyata, şu konuyu öğretecek biri lazım”</span> diye ilanını aç; eğitmenler sana teklifleriyle gelsin.
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-500 via-blue-500 to-cyan-400 rounded-2xl shadow-md border border-indigo-400/40 p-6 sm:p-7 text-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center">
                  <MessageCircle size={20} />
                </div>
                <h2 className="text-lg font-semibold">Şeffaf İnceleme</h2>
              </div>
              <p className="text-sm text-white/90 leading-relaxed">
                Eğitmenin ilanına gir; yüklediği sertifikaları, diplomaları, fotoğrafları ve videoları incele.
              </p>
              <p className="text-sm text-white/90 leading-relaxed mt-3">
                En önemlisi, daha önce ders almış diğer öğrencilerin <span className="font-semibold">gerçek yorumlarını
                ve puanlarını</span> oku; kararını güvenle ver.
              </p>
            </div>
          </section>

          <section className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="bg-gradient-to-br from-mentu-red to-pink-500 rounded-2xl shadow-md border border-mentu-red/20 p-6 sm:p-7 text-white relative overflow-hidden">
              <div className="absolute -top-6 -right-10 w-28 h-28 bg-white/15 rounded-full blur-2xl" />
              <div className="relative z-10">
                <h2 className="text-lg font-semibold mb-2">Gelişim ve Onay</h2>
                <p className="text-sm text-white/90 leading-relaxed">
                  Dersi tamamla; her şey yolunda gittiyse uygulamadan onayı ver ve paran serbest kalsın.
                </p>
                <p className="text-sm text-white/90 leading-relaxed mt-3">
                  Eğitmenine yapacağın yorum ve vereceğin puanla topluluğa katkıda bulun; senden sonra ders alacak
                  öğrencilere yol göster.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md border border-emerald-100 p-6 sm:p-7">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <ShieldCheck size={20} />
                </div>
                <h2 className="text-lg font-semibold text-gray-900">Güvenli Rezervasyon</h2>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Eğitmenini seç ve ders saatini belirle. Ödemeni kredi kartınla güvenle yap. Paran hemen eğitmene
                gitmez; ders başarıyla tamamlanana kadar Mentu güvencesinde bekler.
              </p>
            </div>
          </section>

          <section className="bg-white/90 rounded-3xl shadow-inner border border-dashed border-mentu-red/30 p-6 sm:p-8 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Hazırsan, ilk dersini birlikte bulalım.</h3>
            <p className="text-sm sm:text-base text-gray-600 mb-5 max-w-2xl mx-auto">
              Ön kayıt formunu doldurarak Mentu topluluğuna katıl. Uygulama yayına girdiğinde, ilgi alanlarına uygun
              eğitmen ve ders önerilerini ilk sen al.
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


