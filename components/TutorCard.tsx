import React from 'react';
import { Star, Heart, Share2 } from 'lucide-react';
import { Tutor } from '../types';

interface TutorCardProps {
  tutor: Tutor;
}

export const TutorCard: React.FC<TutorCardProps> = ({ tutor }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-3 hover:shadow-md transition-shadow duration-300">
      <div className="flex gap-3">
        <div className="relative flex-shrink-0">
            <div className="w-12 h-12 rounded-full bg-mentu-red text-white flex items-center justify-center font-bold text-sm border-2 border-gray-100">
              {tutor.name.split(' ').map(n => n[0]).join('').toUpperCase()}
            </div>
            {tutor.isOnline && (
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
            )}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start gap-2">
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-gray-900 text-sm leading-tight truncate">{tutor.name}</h3>
              <div className="flex items-center gap-1 mt-0.5 text-gray-500 text-[11px]">
                <Star size={12} className="text-mentu-gold fill-current flex-shrink-0" />
                <span className="font-semibold text-gray-900">{tutor.rating}</span>
                <span>({tutor.reviewCount} yorum)</span>
              </div>
            </div>
            <div className="flex gap-2 flex-shrink-0">
                {/* Action icons typically found in apps */}
                <button className="text-gray-400 hover:text-mentu-red transition-colors">
                    <Heart size={16} />
                </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 mt-2">
            {tutor.tags.map((tag, index) => (
              <span key={index} className="px-2 py-0.5 bg-gray-100 text-gray-600 text-[10px] rounded-full font-medium truncate max-w-[45%]">
                {tag}
              </span>
            ))}
          </div>

          <p className="mt-2 text-gray-500 text-[11px] line-clamp-2 leading-relaxed break-words">
            {tutor.description}
          </p>

          <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-50 gap-2">
            <div className="flex items-baseline gap-1 flex-shrink-0">
              <span className="text-mentu-red font-bold text-base">₺{tutor.price}</span>
              <span className="text-gray-400 text-[10px]">/saat</span>
            </div>
            <button className="bg-mentu-green hover:bg-green-600 text-white px-4 py-1.5 rounded-lg text-[11px] font-semibold transition-colors shadow-sm flex-shrink-0">
              İncele
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
