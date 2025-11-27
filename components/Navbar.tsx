import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToPreRegister = (event?: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    if (event) {
      event.preventDefault();
    }
    if (window.location.pathname !== '/') {
      window.location.href = '/#pre-register';
      return;
    }
    const target = document.getElementById('pre-register');
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
    options?: { closeMenu?: boolean }
  ) => {
    event.preventDefault();

    if (options?.closeMenu) {
      setIsOpen(false);
    }

    if (window.location.pathname !== '/') {
      window.location.href = `/#${targetId}`;
      return;
    }

    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <Logo />
            <span className="font-bold text-2xl text-mentu-red tracking-wide">MENTU</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="#features"
              onClick={(e) => handleNavClick(e, 'features')}
              className="text-gray-600 hover:text-mentu-red transition-colors"
            >
              Özellikler
            </a>
            <a
              href="/about"
              onClick={(e) => {
                e.preventDefault();
                if (window.location.pathname !== '/about') {
                  window.location.href = '/about';
                }
              }}
              className="text-gray-600 hover:text-mentu-red transition-colors"
            >
              Hakkımızda
            </a>
            <a
              href="/categories"
              onClick={(e) => {
                e.preventDefault();
                if (window.location.pathname !== '/categories') {
                  window.location.href = '/categories';
                }
              }}
              className="text-gray-600 hover:text-mentu-red transition-colors"
            >
              Kategoriler
            </a>
            <a
              href="#vision-mission"
              onClick={(e) => handleNavClick(e, 'vision-mission')}
              className="text-gray-600 hover:text-mentu-red transition-colors"
            >
              Vizyon & Misyon
            </a>
            <a
              href="#pre-register"
              onClick={scrollToPreRegister}
              className="bg-mentu-red hover:bg-mentu-redLight text-white px-5 py-2 rounded-full font-medium transition-all transform hover:scale-105 shadow-lg shadow-mentu-red/20"
            >
              Ön Kayıt
            </a>
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
            <a
              href="#features"
              className="block px-3 py-2 text-gray-600"
              onClick={(e) => handleNavClick(e, 'features', { closeMenu: true })}
            >
              Özellikler
            </a>
            <a
              href="/about"
              className="block px-3 py-2 text-gray-600"
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(false);
                window.location.href = '/about';
              }}
            >
              Hakkımızda
            </a>
            <a
              href="/categories"
              className="block px-3 py-2 text-gray-600"
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(false);
                window.location.href = '/categories';
              }}
            >
              Kategoriler
            </a>
            <a
              href="#vision-mission"
              className="block px-3 py-2 text-gray-600"
              onClick={(e) => handleNavClick(e, 'vision-mission', { closeMenu: true })}
            >
              Vizyon & Misyon
            </a>
            <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
                <button className="w-full text-mentu-red font-semibold py-2 border border-mentu-red rounded-lg">Giriş Yap</button>
                <a
                  href="#pre-register"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(false);
                    scrollToPreRegister();
                  }}
                  className="w-full bg-mentu-red text-white py-2 rounded-lg font-medium shadow-md text-center"
                >
                  Ön Kayıt
                </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
