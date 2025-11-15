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
    imageUrl: 'https://picsum.photos/150/150?random=1',
    isOnline: true
  },
  {
    id: '2',
    name: 'Ayşe Demir',
    rating: 4.8,
    reviewCount: 34,
    tags: ['Lise Fizik', 'Üniversite Hazırlık'],
    description: 'Fizik derslerini eğlenceli ve anlaşılır hale getiriyorum.',
    price: 550,
    imageUrl: 'https://picsum.photos/150/150?random=2',
    isOnline: false
  },
  {
    id: '3',
    name: 'Mehmet Yılmaz',
    rating: 4.9,
    reviewCount: 8,
    tags: ['Kodlama', 'React', 'TypeScript'],
    description: 'Modern web teknolojileri üzerine pratik odaklı eğitim.',
    price: 600,
    imageUrl: 'https://picsum.photos/150/150?random=3',
    isOnline: true
  }
];

export const APP_NAME = "MENTU";
