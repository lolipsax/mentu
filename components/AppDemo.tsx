
import React, { useState, useRef } from 'react';
import { Search, SlidersHorizontal, ArrowRightLeft, MapPin, Star, Heart, Share2, ChevronLeft, MessageSquare, Send, Camera, User, ChevronRight, LogOut, CheckCircle2 } from 'lucide-react';
import { TutorCard } from './TutorCard';
import { PhoneMockup } from './PhoneMockup';
import { MOCK_TUTORS } from '../constants';
import { Logo } from './Logo';

type ScreenType = 'discovery' | 'profile' | 'chat' | 'role';

export const AppDemo: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('discovery');
  const [showRoleModal, setShowRoleModal] = useState(false);
  const [currentRole, setCurrentRole] = useState<'student' | 'tutor'>('student');
  const phoneRef = useRef<HTMLDivElement>(null);

  const scrollToPhone = () => {
    if (phoneRef.current) {
      phoneRef.current.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center',
        inline: 'nearest'
      });
    }
  };

  const handleScreenChange = (screen: ScreenType) => {
    setCurrentScreen(screen);
    setTimeout(() => {
      scrollToPhone();
    }, 100);
  };

  // --- Screen Components ---

  const DiscoveryScreen = () => (
    <div className="bg-gray-50 min-h-full pb-20">
      {/* Header */}
      <div className="px-3 pt-2 pb-3 bg-white shadow-sm sticky top-0 z-10">
        <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-1.5 flex-1 min-w-0">
                <Logo />
                 <div className="text-mentu-red font-bold text-sm truncate">MENTU</div>
            </div>
            <div className="flex gap-2 flex-shrink-0">
                <button onClick={() => setCurrentScreen('chat')}>
                    <MessageSquare size={18} className="text-gray-600" />
                </button>
            </div>
        </div>

        {/* Toggle Switch */}
        <div className="flex bg-gray-100 p-0.5 rounded-xl mb-3">
          <button 
            onClick={() => setCurrentRole('tutor')}
            className={`flex-1 py-1.5 text-[10px] font-bold rounded-lg transition-all ${
              currentRole === 'tutor' ? 'bg-mentu-gold text-gray-900 shadow-sm' : 'text-gray-500'
            }`}
          >
            Eğitmen Bul
          </button>
          <button 
            onClick={() => setCurrentRole('student')}
            className={`flex-1 py-1.5 text-[10px] font-bold rounded-lg transition-all ${
              currentRole === 'student' ? 'bg-mentu-gold text-gray-900 shadow-sm' : 'text-gray-500'
            }`}
          >
            Öğrenci Bul
          </button>
        </div>

        {/* Search Bar */}
        <div className="flex gap-1.5">
            <div className="flex-1 bg-gray-100 rounded-lg flex items-center px-2.5 py-2 min-w-0">
            <Search size={14} className="text-gray-400 mr-1.5 flex-shrink-0" />
            <input 
                type="text" 
                placeholder="Eğitmen ara..."
                className="bg-transparent border-none outline-none text-[11px] w-full placeholder-gray-400 text-gray-700 truncate"
            />
            </div>
            <button 
              onClick={() => {/* Filter functionality */}}
              className="bg-mentu-gold p-2 rounded-full text-gray-900 shadow-sm flex items-center justify-center hover:bg-mentu-goldDark transition-colors flex-shrink-0"
            >
                <SlidersHorizontal size={14} />
            </button>
        </div>
        <div className="text-[9px] text-gray-400 mt-1.5 px-1">Kategori: Akademik</div>
      </div>

      {/* List */}
      <div className="p-3 space-y-3">
        {MOCK_TUTORS.map((tutor) => (
            <div key={tutor.id} onClick={() => setCurrentScreen('profile')} className="cursor-pointer">
                <TutorCard tutor={tutor} />
            </div>
        ))}
      </div>
      
      {/* Bottom Nav */}
      <div className="bg-mentu-red absolute bottom-0 left-0 right-0 w-full h-16 rounded-t-3xl flex justify-around items-center px-6 text-white/50 z-20">
          <button 
            onClick={() => setCurrentScreen('discovery')}
            className="p-2 bg-mentu-gold/20 rounded-lg text-mentu-gold hover:bg-mentu-gold/30 transition-colors"
          >
            <Search size={20} />
          </button>
          <button className="w-12 h-12 bg-green-500 rounded-full -mt-8 border-4 border-white flex items-center justify-center shadow-lg text-white hover:bg-green-600 transition-colors">
            <span className="text-2xl">+</span>
          </button>
          <button 
            onClick={() => setCurrentScreen('role')}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <User size={20} />
          </button>
      </div>
    </div>
  );

  const ProfileScreen = () => (
    <div className="bg-gray-50 min-h-full flex flex-col relative">
      {/* Header */}
      <div className="bg-mentu-red text-white p-3 pt-2 pb-5 rounded-b-3xl shadow-lg z-10">
        <div className="flex justify-between items-center mb-3 gap-2">
            <button onClick={() => setCurrentScreen('discovery')} className="flex-shrink-0"><ChevronLeft size={20} /></button>
            <h2 className="font-bold text-sm truncate flex-1 text-center">Eren İnan Yılmaz</h2>
            <button onClick={() => setCurrentScreen('chat')} className="flex-shrink-0">
              <MessageSquare size={18} />
            </button>
        </div>
      </div>

      <div className="px-4 -mt-4 flex-1 overflow-y-auto pb-24 no-scrollbar scroll-smooth">
        <div className="bg-white rounded-2xl p-4 shadow-sm mb-4">
            <h3 className="font-bold text-gray-900 mb-2 text-sm">Hakkında</h3>
            <p className="text-[11px] text-gray-500 leading-relaxed border-b border-gray-100 pb-3 mb-3 break-words">
                talep gelen talep giden talep test etmek için açıyorum
            </p>
            
            <h3 className="font-bold text-gray-900 mb-2 text-sm">Galeri</h3>
            <div className="h-20 bg-gray-100 rounded-lg flex items-center justify-center text-[10px] text-gray-400 mb-3 border-b border-gray-100 pb-3 px-2 text-center">
                Yüklenecek galeri görseli bulunmamaktadır.
            </div>

            <h3 className="font-bold text-gray-900 mb-2 text-sm">Genel Müsaitlik</h3>
            <div className="flex justify-between mb-1">
                {['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'].map(d => (
                    <span key={d} className="text-[9px] text-gray-400 w-5 text-center">{d}</span>
                ))}
            </div>
            <div className="flex justify-between mb-3 border-b border-gray-100 pb-3">
                 {/* Mocking availability dots based on screenshot */}
                 {[1, 1, 1, 1, 0, 1, 1].map((status, i) => (
                    <div key={i} className={`w-5 h-5 rounded-full ${status ? 'bg-green-500' : 'bg-mentu-gold'}`}></div>
                 ))}
            </div>
            <p className="text-[9px] text-gray-400 text-center mb-3 px-1">Müsait saatleri görmek için bir gün seçin.</p>

            <h3 className="font-bold text-gray-900 mb-2 text-sm">Öğrenci Yorumları (0)</h3>
            <div className="flex items-start gap-2 mt-2">
                 <div className="w-7 h-7 rounded-full bg-mentu-gold text-gray-900 flex items-center justify-center text-[10px] font-bold flex-shrink-0">ÇD</div>
                 <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1 flex-wrap">
                        <span className="text-[11px] font-bold break-words">Çağan Dalman</span>
                        <span className="text-[9px] text-gray-500">(5⭐)</span>
                    </div>
                    <p className="text-[9px] text-gray-500 break-words mt-1">Harika bir eğitmen, çok memnun kaldım!</p>
                 </div>
            </div>
        </div>
      </div>

      {/* Sticky Bottom Button */}
      <div className="absolute bottom-0 left-0 right-0 w-full bg-white p-3 border-t border-gray-100 z-40">
        <button className="w-full bg-mentu-gold hover:bg-mentu-goldDark text-black font-bold py-2.5 rounded-xl transition-colors text-xs">
            Ders İsteği Gönder
        </button>
      </div>
    </div>
  );

  const ChatScreen = () => (
    <div className="bg-gray-50 min-h-full flex flex-col">
       <div className="bg-white p-3 shadow-sm flex items-center gap-3">
            <button onClick={() => setCurrentScreen('profile')}><ChevronLeft className="text-mentu-red" size={20} /></button>
            <div className="flex items-center gap-2.5 flex-1 min-w-0">
                <div className="w-7 h-7 bg-mentu-red text-white rounded-full flex items-center justify-center font-semibold text-[10px] flex-shrink-0">
                    EİY
                </div>
                <span className="font-bold text-gray-900 text-xs truncate">Eren İnan Yılmaz</span>
            </div>
       </div>

       <div className="flex-1 p-3 overflow-y-auto no-scrollbar scroll-smooth pb-20">
            <div className="text-center text-[9px] text-gray-400 mb-3">15:18</div>
            
            <div className="flex justify-end mb-3">
                <div className="bg-mentu-red text-white p-2.5 rounded-2xl rounded-tr-none max-w-[85%] text-[11px] shadow-sm relative break-words">
                    <p className="break-words">Merhaba ders talebi öncesi size ulaşmak istedim!</p>
                    <span className="text-[8px] text-white/70 absolute bottom-1 right-2">15:18</span>
                </div>
            </div>
       </div>

       <div className="p-2.5 bg-white border-t border-gray-100 flex items-center gap-2">
            <button 
              onClick={() => {/* Open camera */}}
              className="w-7 h-7 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors flex-shrink-0"
            >
                <Camera size={14} />
            </button>
            <div className="flex-1 bg-gray-100 rounded-xl px-3 py-1.5 text-[11px] text-gray-500 flex justify-between items-center min-w-0">
                <span className="truncate">Mesaj yaz...</span>
            </div>
            <button 
              onClick={() => {/* Send message */}}
              className="text-mentu-red hover:text-mentu-redLight transition-colors flex-shrink-0"
            >
                <Send size={18} />
            </button>
       </div>
       {/* Keyboard Mock */}
       <div className="bg-gray-900 p-1 pb-4">
            <div className="flex justify-between px-2 py-1 text-gray-400 mb-1">
                <div className="flex gap-4">
                    <div className="w-4 h-4 border border-gray-600 rounded"></div>
                    <div className="text-[10px]">GIF</div>
                    <div className="w-4 h-4 border border-gray-600 rounded"></div>
                </div>
                <div className="text-[10px]">...</div>
            </div>
            <div className="grid grid-cols-10 gap-1 px-1 mb-2">
                {['q','w','e','r','t','y','u','i','o','p'].map(k => (
                    <div key={k} className="bg-gray-700 text-white rounded h-8 flex items-center justify-center text-sm">{k}</div>
                ))}
            </div>
            <div className="grid grid-cols-9 gap-1 px-4 mb-2">
                {['a','s','d','f','g','h','j','k','l'].map(k => (
                    <div key={k} className="bg-gray-700 text-white rounded h-8 flex items-center justify-center text-sm">{k}</div>
                ))}
            </div>
            <div className="flex gap-2 px-1">
                 <div className="bg-gray-700 text-white rounded h-8 w-10 flex items-center justify-center">⇧</div>
                 <div className="flex-1 flex gap-1">
                    {['z','x','c','v','b','n','m'].map(k => (
                        <div key={k} className="bg-gray-700 text-white rounded h-8 flex-1 flex items-center justify-center text-sm">{k}</div>
                    ))}
                 </div>
                 <div className="bg-gray-700 text-white rounded h-8 w-10 flex items-center justify-center">⌫</div>
            </div>
            <div className="mt-2 px-1 flex gap-2">
                <div className="bg-gray-700 text-white rounded h-8 w-12 flex items-center justify-center text-xs">?123</div>
                <div className="bg-gray-700 text-white rounded h-8 w-8 flex items-center justify-center">,</div>
                <div className="bg-gray-700 text-white rounded h-8 flex-1 flex items-center justify-center text-xs text-gray-400">EN • TR</div>
                <div className="bg-gray-700 text-white rounded h-8 w-8 flex items-center justify-center">.</div>
                <div className="bg-blue-500 text-white rounded h-8 w-12 flex items-center justify-center"><Send size={14}/></div>
            </div>
       </div>
    </div>
  );

  const RoleScreen = () => (
    <div className="bg-gray-50 min-h-full flex flex-col relative">
        <div className="bg-white p-3 shadow-sm flex items-center gap-2">
            <button onClick={() => setCurrentScreen('discovery')}><ChevronLeft className="text-mentu-red" size={20} /></button>
            <span className="font-bold text-gray-900 text-sm">Profilim</span>
        </div>

        <div className="p-3">
            <div className="bg-mentu-red rounded-2xl p-3 text-white flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    ÇD
                </div>
                <div className="flex-1 min-w-0">
                    <div className="font-bold text-sm truncate">Çağan Dalman</div>
                    <div className="text-[10px] text-white/70 truncate">cagandalman@gmail.com</div>
                    <div className="mt-1.5 bg-white/20 inline-block px-2 py-0.5 rounded text-[9px]">Öğrenci</div>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-4">
                <div className="p-3 border-b border-gray-50 flex items-center justify-between">
                    <div className="flex items-center gap-2.5 flex-1 min-w-0">
                        <User size={16} className="text-gray-400 flex-shrink-0" />
                        <div className="text-xs flex-1 min-w-0">
                            <div className="font-medium text-gray-700 truncate">Profil Düzenle</div>
                            <div className="text-[9px] text-gray-400 truncate">Ad-soyad ve biyografi</div>
                        </div>
                    </div>
                    <ChevronRight size={14} className="text-gray-300 flex-shrink-0" />
                </div>
                <button 
                  onClick={() => setShowRoleModal(true)}
                  className="w-full p-3 flex items-center justify-between bg-gray-50/50 hover:bg-gray-100/50 transition-colors"
                >
                    <div className="flex items-center gap-2.5 flex-1 min-w-0">
                        <ArrowRightLeft size={16} className="text-mentu-red flex-shrink-0" />
                        <div className="text-xs flex-1 min-w-0">
                            <div className="font-medium text-gray-900 truncate">Rol Değiştir</div>
                            <div className="text-[9px] text-gray-500 truncate">Şu anki rolün: {currentRole === 'student' ? 'Öğrenci' : 'Eğitmen'}</div>
                        </div>
                    </div>
                </button>
                <div className="p-3 border-t border-gray-50 flex items-center gap-2.5">
                    <LogOut size={16} className="text-red-400 flex-shrink-0" />
                    <span className="text-xs text-gray-500">Çıkış Yap</span>
                </div>
            </div>
        </div>

        {/* Modal Overlay */}
        {showRoleModal && (
          <div className="absolute inset-0 bg-black/50 z-20 flex items-end" onClick={() => setShowRoleModal(false)}>
              <div className="bg-white w-full rounded-t-3xl p-4 pb-6 animate-in slide-in-from-bottom duration-300" onClick={(e) => e.stopPropagation()}>
                  <div className="w-10 h-1 bg-gray-300 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-center font-bold text-sm mb-1.5">Rolünü Değiştir</h3>
                  <p className="text-center text-[10px] text-gray-500 mb-4 px-2">Bu değişiklik bazı sayfaların görünümünü etkileyebilir.</p>

                  <div className="space-y-2 mb-4">
                      <button 
                        onClick={() => setCurrentRole('student')}
                        className={`w-full flex items-center gap-2.5 p-2.5 rounded-lg transition-colors ${
                          currentRole === 'student' ? 'bg-gray-50 border border-gray-100' : 'hover:bg-gray-50'
                        }`}
                      >
                          <div className={`w-3.5 h-3.5 rounded-full border-[3px] flex-shrink-0 ${
                            currentRole === 'student' ? 'border-mentu-red bg-white' : 'border-gray-300'
                          }`}></div>
                          <span className={`text-xs font-medium ${
                            currentRole === 'student' ? 'text-gray-700' : 'text-gray-500'
                          }`}>Öğrenci</span>
                      </button>
                      <button 
                        onClick={() => setCurrentRole('tutor')}
                        className={`w-full flex items-center gap-2.5 p-2.5 rounded-lg transition-colors ${
                          currentRole === 'tutor' ? 'bg-gray-50 border border-gray-100' : 'hover:bg-gray-50'
                        }`}
                      >
                          <div className={`w-3.5 h-3.5 rounded-full border-[3px] flex-shrink-0 ${
                            currentRole === 'tutor' ? 'border-mentu-red bg-white' : 'border-gray-300'
                          }`}></div>
                          <span className={`text-xs font-medium ${
                            currentRole === 'tutor' ? 'text-gray-700' : 'text-gray-500'
                          }`}>Eğitmen</span>
                      </button>
                  </div>

                  <button 
                      onClick={() => {
                        setShowRoleModal(false);
                        setCurrentScreen('discovery');
                      }}
                      className="w-full bg-mentu-gold hover:bg-mentu-goldDark text-black font-bold py-2.5 rounded-xl text-xs transition-colors"
                  >
                      Kaydet
                  </button>
              </div>
          </div>
        )}
    </div>
  );

  return (
    <section id="demo" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Aradığınız Eğitmeni <br />
              <span className="text-mentu-red">Saniyeler İçinde Bulun</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              MENTU, profesyonelleri ve öğrencileri bir araya getirir. Aşağıdaki özelliklere tıklayarak uygulama deneyimini sağdaki ekranda test edin.
            </p>
            
            <div className="space-y-4">
                <button 
                    onClick={() => handleScreenChange('discovery')}
                    className={`w-full text-left p-4 rounded-2xl transition-all flex items-start gap-4 ${currentScreen === 'discovery' ? 'bg-mentu-red text-white shadow-lg scale-105' : 'bg-gray-50 hover:bg-gray-100 text-gray-900'}`}
                >
                    <div className={`p-2 rounded-lg ${currentScreen === 'discovery' ? 'bg-white/20' : 'bg-mentu-red/10'}`}>
                        <Search className={currentScreen === 'discovery' ? 'text-white' : 'text-mentu-red'} size={24} />
                    </div>
                    <div>
                        <h3 className="font-bold mb-1">Akıllı Keşfet</h3>
                        <p className={`text-sm ${currentScreen === 'discovery' ? 'text-white/80' : 'text-gray-500'}`}>Kategorilere göre eğitmenleri listeleyin ve filtreleyin.</p>
                    </div>
                </button>

                <button 
                    onClick={() => handleScreenChange('profile')}
                    className={`w-full text-left p-4 rounded-2xl transition-all flex items-start gap-4 ${currentScreen === 'profile' ? 'bg-mentu-red text-white shadow-lg scale-105' : 'bg-gray-50 hover:bg-gray-100 text-gray-900'}`}
                >
                    <div className={`p-2 rounded-lg ${currentScreen === 'profile' ? 'bg-white/20' : 'bg-mentu-red/10'}`}>
                        <User className={currentScreen === 'profile' ? 'text-white' : 'text-mentu-red'} size={24} />
                    </div>
                    <div>
                        <h3 className="font-bold mb-1">Detaylı Profil</h3>
                        <p className={`text-sm ${currentScreen === 'profile' ? 'text-white/80' : 'text-gray-500'}`}>Biyografi, galeri ve müsaitlik durumunu inceleyin.</p>
                    </div>
                </button>

                <button 
                    onClick={() => handleScreenChange('chat')}
                    className={`w-full text-left p-4 rounded-2xl transition-all flex items-start gap-4 ${currentScreen === 'chat' ? 'bg-mentu-red text-white shadow-lg scale-105' : 'bg-gray-50 hover:bg-gray-100 text-gray-900'}`}
                >
                    <div className={`p-2 rounded-lg ${currentScreen === 'chat' ? 'bg-white/20' : 'bg-mentu-red/10'}`}>
                        <MessageSquare className={currentScreen === 'chat' ? 'text-white' : 'text-mentu-red'} size={24} />
                    </div>
                    <div>
                        <h3 className="font-bold mb-1">Hızlı Mesajlaşma</h3>
                        <p className={`text-sm ${currentScreen === 'chat' ? 'text-white/80' : 'text-gray-500'}`}>Ders öncesi eğitmenle iletişime geçin.</p>
                    </div>
                </button>

                <button 
                    onClick={() => handleScreenChange('role')}
                    className={`w-full text-left p-4 rounded-2xl transition-all flex items-start gap-4 ${currentScreen === 'role' ? 'bg-mentu-red text-white shadow-lg scale-105' : 'bg-gray-50 hover:bg-gray-100 text-gray-900'}`}
                >
                    <div className={`p-2 rounded-lg ${currentScreen === 'role' ? 'bg-white/20' : 'bg-mentu-red/10'}`}>
                        <ArrowRightLeft className={currentScreen === 'role' ? 'text-white' : 'text-mentu-red'} size={24} />
                    </div>
                    <div>
                        <h3 className="font-bold mb-1">Rol Değiştirme</h3>
                        <p className={`text-sm ${currentScreen === 'role' ? 'text-white/80' : 'text-gray-500'}`}>Tek dokunuşla öğrenci veya eğitmen moduna geçin.</p>
                    </div>
                </button>
            </div>
          </div>

          <div ref={phoneRef} className="order-1 lg:order-2 relative flex justify-center">
            {/* Decorative Elements behind phone */}
            <div className="absolute top-10 right-10 w-72 h-72 bg-mentu-gold/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-10 left-10 w-72 h-72 bg-mentu-red/10 rounded-full blur-3xl -z-10"></div>
            
            <PhoneMockup>
                {currentScreen === 'discovery' && <DiscoveryScreen />}
                {currentScreen === 'profile' && <ProfileScreen />}
                {currentScreen === 'chat' && <ChatScreen />}
                {currentScreen === 'role' && <RoleScreen />}
            </PhoneMockup>
          </div>
        </div>
      </div>
    </section>
  );
};

