export interface IProduct{
    _id: string;
    title: string;
  description: string;
  price: number;
  condition: 'new' | 'used' | 'refurbished';
  images: string[]; 
  category: string; 
  location: string; 
  userID?: string; 
  status: 'available' | 'sold' | 'pending' | 'hidden'; 
  views?: number; 
  createdAt?: Date;
  updatedAt?: Date;
  negotiable?: boolean; 
}