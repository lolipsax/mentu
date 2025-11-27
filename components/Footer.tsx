import React from 'react';
import { Linkedin, Instagram, Mail } from 'lucide-react';
import { Logo } from './Logo';

const TikTokIcon: React.FC<{ size?: number; className?: string }> = ({ size = 24, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M14 4v7.2a3.2 3.2 0 1 1-3.2-3.2"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 6.5c.6 1.1 1.7 2 3 2.3"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
                <Logo />
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Bilgiye ulaşmanın ve paylaşmanın en modern yolu. Sınırları kaldırın, potansiyelinizi keşfedin.
            </p>
            <div className="flex gap-4">
                <a href="#" className="inline-flex items-center justify-center text-gray-400 hover:text-mentu-red transition-colors cursor-pointer">
                  <TikTokIcon />
                </a>
                <a href="#" className="inline-flex items-center justify-center text-gray-400 hover:text-mentu-red transition-colors cursor-pointer">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="inline-flex items-center justify-center text-gray-400 hover:text-mentu-red transition-colors cursor-pointer">
                  <Instagram size={20} />
                </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6">Kurumsal</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="/about" className="hover:text-mentu-red transition-colors">Hakkımızda</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6">Keşfet</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="/tutor" className="hover:text-mentu-red transition-colors">Eğitmen Ol</a></li>
              <li><a href="/student" className="hover:text-mentu-red transition-colors">Öğrenci Ol</a></li>
              <li><a href="/categories" className="hover:text-mentu-red transition-colors">Tüm Kategoriler</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6">Bize Ulaşın</h4>
            <div className="flex items-center gap-3 text-gray-500 text-sm mb-4">
                <Mail size={16} />
                <span>info@mentuapp.com</span>
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
