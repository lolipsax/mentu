import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="bg-mentu-red p-1.5 rounded-lg">
               <span className="text-white font-bold text-xl tracking-widest">M</span>
            </div>
            <span className="font-bold text-2xl text-mentu-red tracking-wide">MENTU</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-mentu-red transition-colors">Özellikler</a>
            <a href="#tutors" className="text-gray-600 hover:text-mentu-red transition-colors">Eğitmenler</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-mentu-red transition-colors">Nasıl Çalışır</a>
            <button className="text-mentu-red font-semibold hover:underline">Giriş Yap</button>
            <button className="bg-mentu-red hover:bg-mentu-redLight text-white px-5 py-2 rounded-full font-medium transition-all transform hover:scale-105 shadow-lg shadow-mentu-red/20">
              Uygulamayı İndir
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full">
          <div className="px-4 pt-2 pb-8 space-y-4 flex flex-col">
            <a href="#features" className="block px-3 py-2 text-gray-600" onClick={() => setIsOpen(false)}>Özellikler</a>
            <a href="#tutors" className="block px-3 py-2 text-gray-600" onClick={() => setIsOpen(false)}>Eğitmenler</a>
            <a href="#how-it-works" className="block px-3 py-2 text-gray-600" onClick={() => setIsOpen(false)}>Nasıl Çalışır</a>
            <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
                <button className="w-full text-mentu-red font-semibold py-2 border border-mentu-red rounded-lg">Giriş Yap</button>
                <button className="w-full bg-mentu-red text-white py-2 rounded-lg font-medium shadow-md">
                Uygulamayı İndir
                </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
