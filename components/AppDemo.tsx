
import React, { useState } from 'react';
import { Search, SlidersHorizontal, ArrowRightLeft, MapPin, Star, Heart, Share2, ChevronLeft, MessageSquare, Send, Camera, User, ChevronRight, LogOut, CheckCircle2 } from 'lucide-react';
import { TutorCard } from './TutorCard';
import { PhoneMockup } from './PhoneMockup';
import { MOCK_TUTORS } from '../constants';

type ScreenType = 'discovery' | 'profile' | 'chat' | 'role';

export const AppDemo: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('discovery');

  // --- Screen Components ---

  const DiscoveryScreen = () => (
    <div className="bg-gray-50 min-h-full pb-20">
      {/* Header */}
      <div className="px-4 pt-2 pb-4 bg-white shadow-sm sticky top-0 z-10">
        <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
                 <div className="bg-mentu-red w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold">M</div>
                 <div className="text-mentu-red font-bold text-lg">MENTU</div>
            </div>
            <div className="flex gap-2">
                <MessageSquare size={20} className="text-gray-600" />
            </div>
        </div>

        {/* Toggle Switch */}
        <div className="flex bg-gray-100 p-1 rounded-xl mb-4">
          <button className="flex-1 py-2 text-xs font-bold rounded-lg bg-mentu-gold text-gray-900 shadow-sm">
            Eğitmen Bul
          </button>
          <button className="flex-1 py-2 text-xs font-bold rounded-lg text-gray-500">
            Öğrenci Bul
          </button>
        </div>

        {/* Search Bar */}
        <div className="flex gap-2">
            <div className="flex-1 bg-gray-100 rounded-lg flex items-center px-3 py-2.5">
            <Search size={16} className="text-gray-400 mr-2" />
            <input 
                type="text" 
                placeholder="Eğitmen ara (örn: Matematik)"
                className="bg-transparent border-none outline-none text-xs w-full placeholder-gray-400 text-gray-700"
            />
            </div>
            <button className="bg-mentu-gold p-2.5 rounded-full text-gray-900 shadow-sm flex items-center justify-center">
                <SlidersHorizontal size={16} />
            </button>
        </div>
        <div className="text-[10px] text-gray-400 mt-2 px-1">Kategori: Akademik</div>
      </div>

      {/* List */}
      <div className="p-4 space-y-4">
        {MOCK_TUTORS.map((tutor) => (
            <div key={tutor.id} onClick={() => setCurrentScreen('profile')} className="cursor-pointer">
                <TutorCard tutor={tutor} />
            </div>
        ))}
      </div>
      
      {/* Bottom Nav */}
      <div className="bg-mentu-red absolute bottom-0 w-full h-16 rounded-t-3xl flex justify-around items-center px-6 text-white/50 sticky z-20">
          <div className="p-2 bg-mentu-gold/20 rounded-lg text-mentu-gold"><Search size={20} /></div>
          <div className="w-12 h-12 bg-green-500 rounded-full -mt-8 border-4 border-white flex items-center justify-center shadow-lg text-white">
            <span className="text-2xl">+</span>
          </div>
          <div className="p-2" onClick={() => setCurrentScreen('role')}><User size={20} /></div>
      </div>
    </div>
  );

  const ProfileScreen = () => (
    <div className="bg-gray-50 min-h-full flex flex-col relative">
      {/* Header */}
      <div className="bg-mentu-red text-white p-4 pt-2 pb-6 rounded-b-3xl shadow-lg z-10">
        <div className="flex justify-between items-center mb-4">
            <button onClick={() => setCurrentScreen('discovery')}><ChevronLeft /></button>
            <h2 className="font-bold">eren inan yılmaz</h2>
            <MessageSquare size={20} onClick={() => setCurrentScreen('chat')} />
        </div>
      </div>

      <div className="px-4 -mt-4 flex-1 overflow-y-auto pb-24 no-scrollbar">
        <div className="bg-white rounded-2xl p-5 shadow-sm mb-4">
            <h3 className="font-bold text-gray-900 mb-2">Hakkında</h3>
            <p className="text-xs text-gray-500 leading-relaxed border-b border-gray-100 pb-4 mb-4">
                talep gelen talep giden talep test etmek için açıyorum
            </p>
            
            <h3 className="font-bold text-gray-900 mb-2">Galeri</h3>
            <div className="h-20 bg-gray-100 rounded-lg flex items-center justify-center text-xs text-gray-400 mb-4 border-b border-gray-100 pb-4">
                Yüklenecek galeri görseli bulunmamaktadır.
            </div>

            <h3 className="font-bold text-gray-900 mb-3">Genel Müsaitlik</h3>
            <div className="flex justify-between mb-1">
                {['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'].map(d => (
                    <span key={d} className="text-[10px] text-gray-400 w-6 text-center">{d}</span>
                ))}
            </div>
            <div className="flex justify-between mb-4 border-b border-gray-100 pb-4">
                 {/* Mocking availability dots based on screenshot */}
                 {[1, 1, 1, 1, 0, 1, 1].map((status, i) => (
                    <div key={i} className={`w-6 h-6 rounded-full ${status ? 'bg-green-500' : 'bg-mentu-gold'}`}></div>
                 ))}
            </div>
            <p className="text-[10px] text-gray-400 text-center mb-4">Müsait saatleri görmek için bir gün seçin.</p>

            <h3 className="font-bold text-gray-900 mb-2">Öğrenci Yorumları (0)</h3>
            <div className="flex items-start gap-3 mt-2">
                 <div className="w-8 h-8 rounded-full bg-mentu-red text-white flex items-center justify-center text-xs">A</div>
                 <div>
                    <div className="flex items-center gap-1">
                        <span className="text-xs font-bold">Ali Veli</span>
                        <span className="text-[10px] text-gray-500">(5⭐)</span>
                    </div>
                    <p className="text-[10px] text-gray-500">Harika bir eğitmen, çok memnun kaldım!</p>
                 </div>
            </div>
        </div>
      </div>

      {/* Sticky Bottom Button */}
      <div className="absolute bottom-0 w-full bg-white p-4 border-t border-gray-100">
        <button className="w-full bg-mentu-gold hover:bg-mentu-goldDark text-black font-bold py-3 rounded-xl transition-colors text-sm">
            Ders İsteği Gönder
        </button>
      </div>
    </div>
  );

  const ChatScreen = () => (
    <div className="bg-gray-50 min-h-full flex flex-col">
       <div className="bg-white p-4 shadow-sm flex items-center gap-4">
            <button onClick={() => setCurrentScreen('profile')}><ChevronLeft className="text-mentu-red" /></button>
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden">
                    <img src="https://picsum.photos/150/150?random=1" className="w-full h-full object-cover" />
                </div>
                <span className="font-bold text-gray-900 text-sm">eren inan yılmaz</span>
            </div>
       </div>

       <div className="flex-1 p-4 overflow-y-auto">
            <div className="text-center text-[10px] text-gray-400 mb-4">15:18</div>
            
            <div className="flex justify-end mb-4">
                <div className="bg-mentu-red text-white p-3 rounded-2xl rounded-tr-none max-w-[80%] text-xs shadow-sm relative">
                    <p>Merhaba ders talebi öncesi size ulaşmak istedim!</p>
                    <span className="text-[9px] text-white/70 absolute bottom-1 right-2">15:18</span>
                </div>
            </div>
       </div>

       <div className="p-3 bg-white border-t border-gray-100 flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-500">
                <Camera size={16} />
            </div>
            <div className="flex-1 bg-gray-100 rounded-xl px-4 py-2 text-xs text-gray-500 flex justify-between items-center">
                <span>Mesaj yaz...</span>
            </div>
            <button className="text-mentu-red">
                <Send size={20} />
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
        <div className="bg-white p-4 shadow-sm flex items-center gap-2">
            <button onClick={() => setCurrentScreen('discovery')}><ChevronLeft className="text-mentu-red" /></button>
            <span className="font-bold text-gray-900">Profilim</span>
        </div>

        <div className="p-4">
            <div className="bg-mentu-red rounded-2xl p-4 text-white flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <img src="https://picsum.photos/150/150?random=5" className="w-full h-full rounded-full object-cover" />
                </div>
                <div>
                    <div className="font-bold">Furkan Fırtına</div>
                    <div className="text-xs text-white/70">furkanfirtina@gmail.com</div>
                    <div className="mt-2 bg-white/20 inline-block px-2 py-0.5 rounded text-[10px]">Öğrenci</div>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-4">
                <div className="p-4 border-b border-gray-50 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <User size={18} className="text-gray-400" />
                        <div className="text-sm">
                            <div className="font-medium text-gray-700">Profil Düzenle</div>
                            <div className="text-[10px] text-gray-400">Ad-soyad ve biyografi</div>
                        </div>
                    </div>
                    <ChevronRight size={16} className="text-gray-300" />
                </div>
                <div className="p-4 flex items-center justify-between bg-gray-50/50">
                    <div className="flex items-center gap-3">
                        <ArrowRightLeft size={18} className="text-mentu-red" />
                        <div className="text-sm">
                            <div className="font-medium text-gray-900">Rol Değiştir</div>
                            <div className="text-[10px] text-gray-500">Şu anki rolün: Öğrenci</div>
                        </div>
                    </div>
                </div>
                <div className="p-4 border-t border-gray-50 flex items-center gap-3">
                    <LogOut size={18} className="text-red-400" />
                    <span className="text-sm text-gray-500">Çıkış Yap</span>
                </div>
            </div>
        </div>

        {/* Modal Overlay */}
        <div className="absolute inset-0 bg-black/50 z-20 flex items-end">
            <div className="bg-white w-full rounded-t-3xl p-6 pb-8 animate-in slide-in-from-bottom duration-300">
                <div className="w-10 h-1 bg-gray-300 rounded-full mx-auto mb-6"></div>
                <h3 className="text-center font-bold text-lg mb-2">Rolünü Değiştir</h3>
                <p className="text-center text-xs text-gray-500 mb-6">Bu değişiklik bazı sayfaların görünümünü etkileyebilir.</p>

                <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 border border-gray-100">
                        <div className="w-4 h-4 rounded-full border-4 border-mentu-red bg-white"></div>
                        <span className="text-sm font-medium text-gray-700">Öğrenci</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg">
                        <div className="w-4 h-4 rounded-full border border-gray-300"></div>
                        <span className="text-sm font-medium text-gray-500">Eğitmen</span>
                    </div>
                </div>

                <button 
                    onClick={() => setCurrentScreen('discovery')}
                    className="w-full bg-mentu-gold hover:bg-mentu-goldDark text-black font-bold py-3 rounded-xl text-sm transition-colors"
                >
                    Kaydet
                </button>
            </div>
        </div>
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
                    onClick={() => setCurrentScreen('discovery')}
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
                    onClick={() => setCurrentScreen('profile')}
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
                    onClick={() => setCurrentScreen('chat')}
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
                    onClick={() => setCurrentScreen('role')}
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

          <div className="order-1 lg:order-2 relative flex justify-center">
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
