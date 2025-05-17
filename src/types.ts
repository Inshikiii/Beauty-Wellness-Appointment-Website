// Common Types
export interface Service {
  id: string;
  name: string;
  category: ServiceCategory;
  description: string;
  shortDescription: string;
  price: number;
  duration: number;
  image: string;
}

export enum ServiceCategory {
  Hair = 'Hair',
  Nails = 'Nails',
  Massage = 'Massage',
  Skincare = 'Skincare',
}

export interface Testimonial {
  id: string;
  name: string;
  service: string;
  rating: number;
  comment: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  category: ServiceCategory;
  before: string;
  after: string;
  description: string;
}

export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  service: string;
  notes: string;
}