export enum Role {
  STUDENT = 'STUDENT',
  TUTOR = 'TUTOR'
}

export interface Tutor {
  id: string;
  name: string;
  rating: number;
  reviewCount: number;
  tags: string[];
  description: string;
  price: number;
  imageUrl: string;
  isOnline?: boolean;
}

export interface Review {
  id: string;
  user: string;
  rating: number;
  comment: string;
}
