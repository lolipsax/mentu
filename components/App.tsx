import React, { useEffect } from 'react';
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { AppDemo } from './AppDemo';
import { Features } from './Features';
import { Footer } from './Footer';
import { About } from './About';
import { TutorAbout } from './TutorAbout';
import { StudentAbout } from './StudentAbout';
import { CategoriesAbout } from './CategoriesAbout';

function App() {
  const pathname = window.location.pathname;

  if (pathname === '/about') {
    return <About />;
  }

  if (pathname === '/tutor') {
    return <TutorAbout />;
  }

  if (pathname === '/student') {
    return <StudentAbout />;
  }

  if (pathname === '/categories') {
    return <CategoriesAbout />;
  }

  useEffect(() => {
    if (window.location.pathname !== '/') return;

    const hash = window.location.hash;
    if (!hash) return;

    const id = hash.replace('#', '');
    const target = document.getElementById(id);

    if (target) {
      setTimeout(() => {
        target.scrollIntoView({
          behavior: 'smooth',
          block: id === 'pre-register' ? 'center' : 'start',
        });
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <AppDemo />
        <Features />

        {/* Vision & Mission */}
        <section id="vision-mission" className="py-24 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-14">
                    <span className="uppercase tracking-[0.3em] text-sm font-semibold text-mentu-red">
                        Vizyon & Misyon
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
                        Öğrenmeyi Herkes İçin Ulaşılabilir Kılıyoruz
                    </h2>
                    <p className="text-gray-600 text-lg mt-4 max-w-3xl mx-auto">
                        MENTU, bilgi paylaşımını demokratikleştirerek her yaş ve seviyedeki bireyin potansiyelini ortaya çıkarmayı amaçlar.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
                        <p className="text-sm font-semibold text-mentu-red uppercase tracking-[0.3em] mb-4">
                            Vizyonumuz
                        </p>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Bilgi Paylaşımında Küresel Köprü</h3>
                        <p className="text-gray-600 leading-relaxed">
                        Türkiye'de "beceri öğrenimi" ve "kişisel gelişim" dendiğinde akla gelen ilk, en güvenilir ve en yenilikçi dijital platform olmak.
                        Sadece 'ders' alınan bir yer değil, insanların potansiyellerini keşfettikleri, birbirlerine ilham verdikleri ve birbirlerinden güç aldıkları canlı bir topluluk yaratmak.
                        </p>
                    </div>
                    <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
                        <p className="text-sm font-semibold text-mentu-red uppercase tracking-[0.3em] mb-4">
                            Misyonumuz
                        </p>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Eğitimi Erişilebilir Kılmak</h3>
                        <p className="text-gray-600 leading-relaxed">
                        Mentu’nun misyonu, beceri öğrenimini demokratikleştirerek potansiyelin kilidini açmaktır.
                        Biz öğrenmeyi geleneksel eğitimin katı, pahalı ve "herkese uyan tek beden" yapısından kurtarmak için varız. 
                        Öğrenmenin önündeki tüm engelleri kaldırarak, onu herkes için erişilebilir, esnek ve kişisel bir deneyime dönüştürmeyi hedefliyoruz.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-24 bg-white">
            <div className="max-w-5xl mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Hemen Ön Kayıt Olun</h2>
                <p className="text-xl text-gray-600 mb-8">
                    Siz de MENTU ailesinin bir parçası olun, bilgiye sınır koymayın.
                 <br />
                 Ön Kayıt olarak ayrıcalıklardan faydalanın.
                 
                </p>
                <div className="flex justify-center gap-4">
                    <a
                      href="#pre-register"
                      onClick={(e) => {
                        e.preventDefault();
                        const target = document.getElementById('pre-register');
                        if (target) {
                          target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'center',
                          });
                        }
                      }}
                      className="bg-mentu-red text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-mentu-redLight transition-colors"
                    >
                        Ücretsiz Kayıt Ol
                    </a>
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;





