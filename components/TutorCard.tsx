import React from 'react';
import { Star, Heart, Share2 } from 'lucide-react';
import { Tutor } from '../types';

interface TutorCardProps {
  tutor: Tutor;
}

export const TutorCard: React.FC<TutorCardProps> = ({ tutor }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 hover:shadow-md transition-shadow duration-300">
      <div className="flex gap-4">
        <div className="relative">
            <img 
            src={tutor.imageUrl} 
            alt={tutor.name} 
            className="w-16 h-16 rounded-full object-cover border-2 border-gray-100"
            />
            {tutor.isOnline && (
                <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
            )}
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold text-gray-900 text-lg leading-tight">{tutor.name}</h3>
              <div className="flex items-center gap-1 mt-1 text-gray-500 text-sm">
                <Star size={14} className="text-mentu-gold fill-current" />
                <span className="font-semibold text-gray-900">{tutor.rating}</span>
                <span>({tutor.reviewCount} yorum)</span>
              </div>
            </div>
            <div className="flex gap-2">
                {/* Action icons typically found in apps */}
                <button className="text-gray-400 hover:text-mentu-red transition-colors">
                    <Heart size={18} />
                </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-3">
            {tutor.tags.map((tag, index) => (
              <span key={index} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">
                {tag}
              </span>
            ))}
          </div>

          <p className="mt-3 text-gray-500 text-sm line-clamp-2 leading-relaxed">
            {tutor.description}
          </p>

          <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-50">
            <div className="flex items-baseline gap-1">
              <span className="text-mentu-red font-bold text-lg">₺{tutor.price}</span>
              <span className="text-gray-400 text-xs">/saat</span>
            </div>
            <button className="bg-mentu-green hover:bg-green-600 text-white px-6 py-2 rounded-lg text-sm font-semibold transition-colors shadow-sm">
              İncele
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
