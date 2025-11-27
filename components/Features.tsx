import React from 'react';
import {
  MessageCircle,
  Calendar,
  Repeat,
  LayoutDashboard,
  CreditCard,
  Video,
  TrendingUp
} from 'lucide-react';

const FEATURE_CARDS = [
  {
    title: 'Hızlıca İletişim Kur',
    description:
      'Uygulama içi mesajlaşma ile ders öncesi detayları konuşun, sorularınızı sorun ve güvenle planlama yapın.',
    icon: MessageCircle,
    iconBg: 'bg-mentu-red',
    iconColor: 'text-white',
    badge: null
  },
  {
    title: 'Tek Tuşla Rol Değiştir',
    description:
      'Hem öğrenci hem eğitmen olabilirsiniz. Profilinizdeki "Rolünü Değiştir" butonu ile saniyeler içinde mod değiştirin.',
    icon: Repeat,
    iconBg: 'bg-mentu-gold',
    iconColor: 'text-gray-900',
    badge: null
  },
  {
    title: 'Akıllı Takvim',
    description:
      'Eğitmenlerin uygunluk durumunu renkli göstergelerle anında görüntüleyin ve size uygun saati rezerve edin.',
    icon: Calendar,
    iconBg: 'bg-gray-700',
    iconColor: 'text-white',
    badge: null
  },
  {
    title: 'Güvenli Ödeme',
    description:
      'Tüm ödemeleriniz şifrelenmiş ve güvenli bir şekilde işlenir. İstediğiniz zaman iade talep edebilirsiniz.',
    icon: CreditCard,
    iconBg: 'bg-mentu-green',
    iconColor: 'text-white',
    badge: null
  },
  {
    title: 'Canlı Dersler',
    description:
      'Yüksek kaliteli görüntü ve ses ile eğitmeninizle gerçek zamanlı ders yapın, interaktif öğrenme deneyimi yaşayın.',
    icon: Video,
    iconBg: 'bg-mentu-red',
    iconColor: 'text-white',
    badge: null
  },
  {
    title: 'İlerleme Takibi',
    description:
      'Tamamladığınız dersleri görün, hedefler belirleyin ve gelişiminizi grafiklerle takip edin.',
    icon: TrendingUp,
    iconBg: 'bg-mentu-gold',
    iconColor: 'text-gray-900',
    badge: null
  }
];

export const Features: React.FC = () => {
  return (
    <section
      id="features"
      className="relative py-24 text-white bg-[#101522] overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#151c2f] via-[#101726] to-[#0c101a] opacity-95" aria-hidden />
      <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-mentu-gold/15 via-transparent to-transparent blur-3xl opacity-70" aria-hidden />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-mentu-gold font-bold tracking-wider uppercase text-sm mb-3">Özellikler</h2>
          <h3 className="text-4xl font-bold mb-6">Neden MENTU?</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Sadece bir ders uygulaması değil, tam kapsamlı bir eğitim ve iletişim platformu.
          </p>
        </div>

        <div className="relative -mx-4 md:mx-0">
          <div className="flex gap-6 md:gap-8 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pb-6 px-4 md:px-0">
            {FEATURE_CARDS.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="relative flex-none w-[280px] sm:w-[320px] lg:w-[360px] bg-gray-800/80 backdrop-blur border border-white/5 rounded-3xl p-8 snap-center shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition-transform hover:-translate-y-1"
                >
                  {feature.badge && (
                    <div className="absolute top-0 right-0 bg-mentu-gold text-gray-900 text-xs font-bold px-3 py-1 rounded-bl-3xl">
                      {feature.badge}
                    </div>
                  )}
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform ${feature.iconBg}`}
                  >
                    <Icon size={32} className={feature.iconColor} />
                  </div>
                  <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Screen Showcase / Ön Kayıt Alanı */}
        <div id="pre-register" className="mt-24 bg-gradient-to-r from-mentu-red to-pink-900 rounded-3xl p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between">
             {/* Decorative circles */}
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-mentu-gold/20 rounded-full blur-3xl"></div>
            
            <div className="md:w-1/2 relative z-10 mb-8 md:mb-0 text-left">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Hemen Ön Kayıt Olun!</h3>
                <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-white/90">
                        <div className="p-1 bg-mentu-gold rounded-full"><LayoutDashboard size={16} className="text-black"/></div>
                        <span>Ön kayıt olan eğitmenler, uygulamanın ana ekranda  en üstte listelenecek.</span>
                    </li>
                    <li className="flex items-center gap-3 text-white/90">
                        <div className="p-1 bg-mentu-gold rounded-full"><LayoutDashboard size={16} className="text-black"/></div>
                        <span>Ön kayıttan gelen ilk 500 Eğitmen için ömür boyu indirimli komisyon</span>
                    </li>
                    <li className="flex items-center gap-3 text-white/90">
                        <div className="p-1 bg-mentu-gold rounded-full"><LayoutDashboard size={16} className="text-black"/></div>
                        <span>Hizmet verdiğiniz kategorileri etiketleyin</span>
                    </li>
                </ul>
                <button className="mt-8 bg-white text-mentu-red px-6 py-3 rounded-lg font-bold shadow-xl hover:bg-gray-100 transition-colors">
                    Hemen Ön Kayıt Ol!
                </button>
            </div>
            <div className="md:w-1/2 flex justify-center relative z-10">
                <div className="bg-white p-5 rounded-xl shadow-2xl rotate-3 transform hover:rotate-0 hover:-translate-y-1 transition-transform duration-500 max-w-sm w-full text-gray-900">
                    <h4 className="font-bold text-lg mb-1 text-mentu-red text-center">Ön Kayıt Formu</h4>
                    <p className="text-xs text-gray-500 mb-4 text-center">
                        Uygulama çıktığında ilk haberdar olmak ve ön kayıt avantajlarından yararlanmak için formu doldurun.
                    </p>
                    <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                        <div className="flex flex-col gap-1">
                            <label className="text-xs font-medium text-gray-700">Ad Soyad</label>
                            <input
                                type="text"
                                placeholder="Adınızı ve soyadınızı yazın"
                                className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-mentu-gold focus:border-transparent"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-xs font-medium text-gray-700">E-posta Adresi</label>
                            <input
                                type="email"
                                placeholder="ornek@mail.com"
                                className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-mentu-gold focus:border-transparent"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-xs font-medium text-gray-700">Rolünüz</label>
                            <select
                                className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-mentu-gold focus:border-transparent"
                                defaultValue="student"
                            >
                                <option value="student">Öğrenci olarak kayıt olmak istiyorum</option>
                                <option value="tutor">Eğitmen olarak kayıt olmak istiyorum</option>
                                <option value="both">Hem öğrenci hem eğitmen olmak istiyorum</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-xs font-medium text-gray-700">Kısaca Beklentiniz (Opsiyonel)</label>
                            <textarea
                                rows={3}
                                placeholder="Almak/vermek istediğiniz dersler hakkında birkaç cümle yazabilirsiniz."
                                className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-mentu-gold focus:border-transparent"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full mt-2 bg-mentu-gold text-black font-bold py-2.5 rounded-lg text-sm hover:bg-mentu-goldDark transition-colors"
                        >
                            Ön Kayıt Talebimi Gönder
                        </button>
                        <p className="text-[10px] text-gray-400 text-center mt-1">
                            Form şu an demo amaçlıdır; gönderimler henüz gerçek bir başvuru oluşturmaz.
                        </p>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};
