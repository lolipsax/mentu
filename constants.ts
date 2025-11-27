import { Tutor } from './types';

export const MOCK_TUTORS: Tutor[] = [
  {
    id: '1',
    name: 'Eren İnan Yılmaz',
    rating: 5.0,
    reviewCount: 12,
    tags: ['İlkokul Fen', 'Ortaokul Matematik'],
    description: 'Talep gelen talep giden talep test etmek için açıyorum.',
    price: 456,
    imageUrl: '',
    isOnline: true
  },
  {
    id: '2',
    name: 'Çağan Dalman',
    rating: 4.8,
    reviewCount: 34,
    tags: ['Lise Fizik', 'Üniversite Hazırlık'],
    description: 'Fizik derslerini eğlenceli ve anlaşılır hale getiriyorum.',
    price: 550,
    imageUrl: '',
    isOnline: false
  }
];

export const APP_NAME = "MENTU";
