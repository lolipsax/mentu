import React from 'react';
import { MessageCircle, Calendar, Repeat, LayoutDashboard } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-mentu-gold font-bold tracking-wider uppercase text-sm mb-3">Özellikler</h2>
          <h3 className="text-4xl font-bold mb-6">Neden MENTU?</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Sadece bir ders uygulaması değil, tam kapsamlı bir eğitim ve iletişim platformu.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-gray-800 p-8 rounded-3xl border border-gray-700 hover:border-mentu-gold/50 transition-colors group">
            <div className="w-14 h-14 bg-mentu-red rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <MessageCircle size={32} className="text-white" />
            </div>
            <h4 className="text-xl font-bold mb-3">Hızlıca İletişim Kur</h4>
            <p className="text-gray-400 leading-relaxed">
              Uygulama içi mesajlaşma ile ders öncesi detayları konuşun, sorularınızı sorun ve güvenle planlama yapın.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-gray-800 p-8 rounded-3xl border border-gray-700 hover:border-mentu-gold/50 transition-colors group relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-mentu-gold text-gray-900 text-xs font-bold px-3 py-1 rounded-bl-xl">
                YENİ
            </div>
            <div className="w-14 h-14 bg-mentu-gold rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Repeat size={32} className="text-gray-900" />
            </div>
            <h4 className="text-xl font-bold mb-3">Tek Tuşla Rol Değiştir</h4>
            <p className="text-gray-400 leading-relaxed">
              Hem öğrenci hem eğitmen olabilirsiniz. Profilinizdeki "Rolünü Değiştir" butonu ile saniyeler içinde mod değiştirin.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-gray-800 p-8 rounded-3xl border border-gray-700 hover:border-mentu-gold/50 transition-colors group">
            <div className="w-14 h-14 bg-gray-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Calendar size={32} className="text-white" />
            </div>
            <h4 className="text-xl font-bold mb-3">Akıllı Takvim</h4>
            <p className="text-gray-400 leading-relaxed">
              Eğitmenlerin uygunluk durumunu renkli göstergelerle anında görüntüleyin ve size uygun saati rezerve edin.
            </p>
          </div>
        </div>

        {/* Screen Showcase */}
        <div className="mt-24 bg-gradient-to-r from-mentu-red to-pink-900 rounded-3xl p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between">
             {/* Decorative circles */}
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-mentu-gold/20 rounded-full blur-3xl"></div>
            
            <div className="md:w-1/2 relative z-10 mb-8 md:mb-0 text-left">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Profilinizi Özelleştirin</h3>
                <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-white/90">
                        <div className="p-1 bg-mentu-gold rounded-full"><LayoutDashboard size={16} className="text-black"/></div>
                        <span>Detaylı biyografi ve galeri ekleyin</span>
                    </li>
                    <li className="flex items-center gap-3 text-white/90">
                        <div className="p-1 bg-mentu-gold rounded-full"><LayoutDashboard size={16} className="text-black"/></div>
                        <span>Öğrenci yorumlarını sergileyin</span>
                    </li>
                    <li className="flex items-center gap-3 text-white/90">
                        <div className="p-1 bg-mentu-gold rounded-full"><LayoutDashboard size={16} className="text-black"/></div>
                        <span>Hizmet verdiğiniz kategorileri etiketleyin</span>
                    </li>
                </ul>
                <button className="mt-8 bg-white text-mentu-red px-6 py-3 rounded-lg font-bold shadow-xl hover:bg-gray-100 transition-colors">
                    Hemen Profil Oluştur
                </button>
            </div>
            <div className="md:w-1/2 flex justify-center relative z-10">
                <div className="bg-white p-4 rounded-xl shadow-2xl rotate-3 transform hover:rotate-0 transition-transform duration-500 max-w-xs w-full text-gray-900">
                    <div className="flex items-center gap-3 mb-3">
                        <img src="https://picsum.photos/50/50?random=1" className="w-10 h-10 rounded-full bg-gray-200" alt="User" />
                        <div>
                            <div className="font-bold text-sm">Eren İnan Yılmaz</div>
                            <div className="text-xs text-gray-500">⭐ 5.0 (12 yorum)</div>
                        </div>
                    </div>
                    <div className="h-24 bg-gray-100 rounded-lg mb-3 flex items-center justify-center text-gray-400 text-xs">Galeri Görseli</div>
                    <div className="flex justify-between items-center">
                        <div className="font-bold text-mentu-red">₺456/saat</div>
                        <div className="bg-mentu-green text-white px-3 py-1 rounded text-xs">İncele</div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};
