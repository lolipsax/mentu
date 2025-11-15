import React, { useState } from 'react';
import { Search, SlidersHorizontal, ArrowRightLeft } from 'lucide-react';
import { TutorCard } from './TutorCard';
import { PhoneMockup } from './PhoneMockup';
import { MOCK_TUTORS } from '../constants';

export const AppDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'tutor' | 'student'>('tutor');

  const DemoContent = () => (
    <div className="bg-gray-50 min-h-full">
      {/* App Header */}
      <div className="px-4 pt-2 pb-4 bg-white shadow-sm sticky top-0 z-10">
        <div className="flex justify-between items-center mb-4">
            <div className="text-mentu-red font-bold text-lg">MENTU</div>
            <div className="flex gap-2">
                <ArrowRightLeft size={20} className="text-gray-600" />
            </div>
        </div>

        {/* Toggle Switch */}
        <div className="flex bg-gray-100 p-1 rounded-xl mb-4">
          <button 
            onClick={() => setActiveTab('tutor')}
            className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${activeTab === 'tutor' ? 'bg-mentu-gold text-gray-900 shadow-sm' : 'text-gray-500'}`}
          >
            Eğitmen Bul
          </button>
          <button 
            onClick={() => setActiveTab('student')}
            className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${activeTab === 'student' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500'}`}
          >
            Öğrenci Bul
          </button>
        </div>

        {/* Search Bar */}
        <div className="flex gap-2">
            <div className="flex-1 bg-gray-100 rounded-lg flex items-center px-3 py-2.5">
            <Search size={16} className="text-gray-400 mr-2" />
            <input 
                type="text" 
                placeholder={activeTab === 'tutor' ? "Eğitmen ara (örn: Matematik)" : "Öğrenci ara"}
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
            <TutorCard key={tutor.id} tutor={tutor} />
        ))}
      </div>
      
      {/* Bottom Nav Mock */}
      <div className="bg-mentu-red absolute bottom-0 w-full h-16 rounded-t-3xl flex justify-around items-center px-6 text-white/50 sticky">
          <div className="p-2 bg-mentu-gold/20 rounded-lg text-mentu-gold"><Search size={20} /></div>
          <div className="w-12 h-12 bg-green-500 rounded-full -mt-8 border-4 border-white flex items-center justify-center shadow-lg text-white">
            <span className="text-2xl">+</span>
          </div>
          <div className="p-2"><ArrowRightLeft size={20} /></div>
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
              MENTU, profesyonelleri ve öğrencileri bir araya getirir. Lisans zorunluluğu olmadan, alanında uzman kişilerle tanışın, ders alın veya yeteneklerinizi paylaşarak gelir elde edin.
            </p>
            
            <div className="space-y-6">
                <div className="flex items-start gap-4">
                    <div className="bg-mentu-red/10 p-3 rounded-xl">
                        <Search className="text-mentu-red" size={24} />
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-900 mb-1">Akıllı Arama</h3>
                        <p className="text-gray-500 text-sm">Kategorilere ve konuma göre en uygun eğitmeni filtreleyin.</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <div className="bg-mentu-gold/20 p-3 rounded-xl">
                        <ArrowRightLeft className="text-mentu-goldDark" size={24} />
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-900 mb-1">Rol Değiştirme</h3>
                        <p className="text-gray-500 text-sm">Tek bir profil ile hem öğrenci olun, hem de bildiklerinizi öğretin.</p>
                    </div>
                </div>
            </div>

            <div className="mt-10">
                <button className="bg-gray-900 text-white px-8 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors">
                    Web Üzerinden Keşfet
                </button>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            {/* Decorative Elements behind phone */}
            <div className="absolute top-10 right-10 w-72 h-72 bg-mentu-gold/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-10 left-10 w-72 h-72 bg-mentu-red/10 rounded-full blur-3xl -z-10"></div>
            
            <PhoneMockup>
                <DemoContent />
            </PhoneMockup>
          </div>
        </div>
      </div>
    </section>
  );
};
