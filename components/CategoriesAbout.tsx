import React from 'react';
import { ArrowLeft, Layers, Palette, Cpu } from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const CategoriesAbout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f4f7ff] via-white to-[#fff7f5] flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-20">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-900">
          <button
            onClick={() => {
              window.location.href = '/';
            }}
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-mentu-red mb-6 transition-colors"
          >
            <ArrowLeft size={16} />
            Ana sayfaya dön
          </button>

          <div className="bg-white/90 backdrop-blur rounded-3xl shadow-xl border border-mentu-red/10 px-6 sm:px-10 py-10 sm:py-12 mb-10 flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex-1">
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-mentu-red mb-3">
                Kategoriler
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                Her yetenek için <span className="text-mentu-red">doğru alan</span>.
              </h1>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl">
                Mentu’da her kategori, kendi dinamiğine göre tasarlanır. İster sahnede, ister sınıfta, ister ekranda
                parlıyor olun; profiliniz, uzmanlığınızı en iyi anlatacak şekilde yapılandırılır.
              </p>
            </div>
            <div className="w-full lg:w-80 bg-mentu-red/5 border border-mentu-red/10 rounded-2xl p-5 flex flex-col gap-3">
              <div className="inline-flex items-center gap-2 text-xs text-mentu-red">
                <Layers size={16} />
                <span>Karma roller</span>
              </div>
              <p className="text-xs text-gray-700 leading-relaxed">
                Mentu’da prosedürler tek yönlü değildir. Bir Teknoloji eğitmeni, kazandığı gelirle Sanat kategorisinden
                ders alabilir.
              </p>
              <p className="text-xs text-gray-700 leading-relaxed">
                Hesabın tek, kimliğin sınırsızdır. Kazandığın geliri yeni bir beceri öğrenmek için kullanabilir; hem
                öğreten hem öğrenen olabilirsin.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-md border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-mentu-gold/15 text-mentu-gold flex items-center justify-center">
                  <Palette size={20} />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">Spor</h2>
                  <p className="text-xs text-mentu-goldDark/80">Hareket, ritim ve performans.</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Spor alanında görsel kanıt esastır. Mentu, eğitmenlerden{' '}
                <span className="font-semibold text-gray-900">antrenman videoları, performans kayıtları ve önce/sonra
                dönüşüm fotoğrafları</span> ile uzmanlığını göstermesini bekler.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mt-3">
                Böylece öğrenciler, kondisyonunu, çalışma disiplinini ve tarzını daha ilk bakışta görebilir.
              </p>
            </div>

            <div className="bg-gradient-to-br from-mentu-red to-pink-500 rounded-2xl shadow-md border border-mentu-red/20 p-6 sm:p-7 text-white relative overflow-hidden">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/15 text-mentu-gold flex items-center justify-center">
                  <Palette size={20} />
                </div>
                <div>
                  <h2 className="text-lg font-semibold">Sanat</h2>
                  <p className="text-xs text-mentu-gold/80">Tarzını göster, hikâyeni anlat.</p>
                </div>
              </div>
              <p className="text-sm text-white/90 leading-relaxed">
                Sanat kategorilerinde,{' '}
                <span className="font-semibold text-gray-900">portfolyo görselleri, çizimler, sahne / stüdyo kayıtları</span>{' '}
                ve kısa performans videoları öne çıkar.
              </p>
              <p className="text-sm text-white/90 leading-relaxed mt-3">
                Öğrenciler, senin çizgi dilini, renk dünyanı veya enstrüman hâkimiyetini izleyerek tanır; ders deneyimi
                başlamadan önce bile tarzını hissedebilir.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="bg-gradient-to-br from-indigo-500 via-blue-500 to-cyan-400 rounded-2xl shadow-md border border-indigo-400/40 p-6 sm:p-7 text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center">
                  <Cpu size={20} />
                </div>
                <div>
                  <h2 className="text-lg font-semibold">Akademi</h2>
                  <p className="text-xs text-indigo-100/90">Temel, sınav ve akademik başarı odaklı.</p>
                </div>
              </div>
              <p className="text-sm text-white/90 leading-relaxed">
                Bu alanda <span className="font-semibold text-white">diploma, transkript, sınav skorları ve referans
                mektupları</span> gibi bilgi kanıtları öne çıkar.
              </p>
              <p className="text-sm text-white/90 leading-relaxed mt-3">
                Mentu, bu belgeleri güvenle yükleyip yönetebileceğin altyapıyı sağlar; öğrenciler de seviyene ve deneyimine
                göre karar verebilir.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-md border border-sky-300/40">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-500 flex items-center justify-center">
                  <Cpu size={20} />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">Teknoloji</h2>
                  <p className="text-xs text-sky-600/80">Proje ve portfolyo odaklı.</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Yazılım, veri bilimi veya tasarım gibi alanlarda{' '}
                <span className="font-semibold text-gray-900">GitHub projeleri, case study’ler, ürün demoları ve
                sertifikalar</span> temel referans noktasıdır.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mt-3">
                Mentu; repo, portfolyo ve sertifika linklerini öne çıkaran bir profil yapısı sunar; böylece öğrenciler
                gerçek dünyadaki üretimlerini görerek eğitmen seçebilir.
              </p>
            </div>
          </div>

          <section className="bg-white/90 rounded-3xl shadow-inner border border-dashed border-mentu-red/30 p-6 sm:p-8 text-center mt-4">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Kategorini seç, ilk adımı birlikte planlayalım.</h3>
            <p className="text-sm sm:text-base text-gray-600 mb-5 max-w-2xl mx-auto">
              İster Spor, ister Sanat, ister Akademi ya da Teknoloji alanında ilerlemek iste; ön kayıt formunu
              doldurarak Mentu topluluğuna katıl. Uygulama yayına girdiğinde, ilgi alanlarına göre hazırlanmış eğitmen
              ve ders önerilerini ilk sen al.
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


