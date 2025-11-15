import React from 'react';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
                <div className="bg-mentu-red p-1.5 rounded-lg">
                    <span className="text-white font-bold text-lg">M</span>
                </div>
                <span className="font-bold text-xl text-mentu-red">MENTU</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Bilgiye ulaşmanın ve paylaşmanın en modern yolu. Sınırları kaldırın, potansiyelinizi keşfedin.
            </p>
            <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-mentu-red transition-colors"><Facebook size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-mentu-red transition-colors"><Twitter size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-mentu-red transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6">Kurumsal</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-mentu-red transition-colors">Hakkımızda</a></li>
              <li><a href="#" className="hover:text-mentu-red transition-colors">Kariyer</a></li>
              <li><a href="#" className="hover:text-mentu-red transition-colors">Basın Kiti</a></li>
              <li><a href="#" className="hover:text-mentu-red transition-colors">İletişim</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6">Keşfet</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-mentu-red transition-colors">Eğitmen Ol</a></li>
              <li><a href="#" className="hover:text-mentu-red transition-colors">Öğrenci Bul</a></li>
              <li><a href="#" className="hover:text-mentu-red transition-colors">Tüm Kategoriler</a></li>
              <li><a href="#" className="hover:text-mentu-red transition-colors">Başarı Hikayeleri</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6">Bize Ulaşın</h4>
            <div className="flex items-center gap-3 text-gray-500 text-sm mb-4">
                <Mail size={16} />
                <span>info@mentuapp.com</span>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl">
                <p className="text-xs text-gray-400 mb-2">Uygulamayı İndirin</p>
                <div className="flex gap-2">
                    <div className="h-8 w-24 bg-black rounded flex items-center justify-center text-white text-[10px] font-bold cursor-pointer">App Store</div>
                    <div className="h-8 w-24 bg-black rounded flex items-center justify-center text-white text-[10px] font-bold cursor-pointer">Google Play</div>
                </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">© 2024 Mentu Inc. Tüm hakları saklıdır.</p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-gray-600">Gizlilik Politikası</a>
            <a href="#" className="hover:text-gray-600">Kullanım Koşulları</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
