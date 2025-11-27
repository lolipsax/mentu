import React from 'react';
import { ArrowRight, Users, ShieldCheck, Zap } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToPreRegister = (event?: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    if (event) {
      event.preventDefault();
    }
    const target = document.getElementById('pre-register');
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  return (
    <div className="relative bg-white pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-mentu-red/5 border border-mentu-red/10 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-mentu-red animate-pulse"></span>
            <span className="text-sm font-medium text-mentu-red">MENTU Uygulaması Yakında</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 tracking-tight mb-8">
            Yeteneğini Paylaş, <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-mentu-red to-mentu-goldDark">
              Potansiyeli Keşfet
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-10 leading-relaxed px-4">
            Öğrenci ve eğitmenleri tek platformda buluşturan MENTU ile sınırları kaldırın. 
            Yetkin olduğunuz konularda ders verin veya hayalinizdeki eğitimi alın.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#pre-register"
              onClick={scrollToPreRegister}
              className="w-full sm:w-auto bg-mentu-red text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-mentu-redLight transition-transform transform hover:-translate-y-1 shadow-lg shadow-mentu-red/30 flex items-center justify-center gap-2"
            >
              Ön Kayıt <ArrowRight size={20} />
            </a>
            <button className="w-full sm:w-auto bg-white text-gray-900 border-2 border-gray-100 px-8 py-4 rounded-xl font-bold text-lg hover:border-mentu-gold hover:bg-yellow-50/50 transition-colors">
              Daha Fazla Bilgi
            </button>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-100 grid grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
                <div className="bg-blue-50 p-3 rounded-lg text-blue-600 mb-3"><Users size={24} /></div>
                <h3 className="font-bold text-gray-900">Çift Taraflı Platform</h3>
                <p className="text-sm text-gray-500 mt-1">Binlerce öğrenci ve eğitmen</p>
            </div>
            <div className="flex flex-col items-center">
                <div className="bg-green-50 p-3 rounded-lg text-green-600 mb-3"><ShieldCheck size={24} /></div>
                <h3 className="font-bold text-gray-900">Güvenli Ödeme</h3>
                <p className="text-sm text-gray-500 mt-1">Koruma altındaki işlemler</p>
            </div>
            <div className="flex flex-col items-center">
                <div className="bg-purple-50 p-3 rounded-lg text-purple-600 mb-3"><Zap size={24} /></div>
                <h3 className="font-bold text-gray-900">Her Alanda Gelişim</h3>
                <p className="text-sm text-gray-500 mt-1">Farklı kategorilerde eğitim alın/verin</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
