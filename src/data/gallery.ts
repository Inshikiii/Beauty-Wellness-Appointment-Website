import { GalleryItem, ServiceCategory } from '../types';

export const galleryItems: GalleryItem[] = [
  {
    id: '1',
    category: ServiceCategory.Hair,
    before: 'https://images.pexels.com/photos/3993297/pexels-photo-3993297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    after: 'https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Complete hair transformation with color and style'
  },
  {
    id: '2',
    category: ServiceCategory.Nails,
    before: 'https://images.pexels.com/photos/3997819/pexels-photo-3997819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    after: 'https://images.pexels.com/photos/939836/pexels-photo-939836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Nail art and extension makeover'
  },
  {
    id: '3',
    category: ServiceCategory.Skincare,
    before: 'https://images.pexels.com/photos/3764011/pexels-photo-3764011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    after: 'https://images.pexels.com/photos/3764168/pexels-photo-3764168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Facial treatment results for clearer skin'
  },
  {
    id: '4',
    category: ServiceCategory.Hair,
    before: 'https://images.pexels.com/photos/3993326/pexels-photo-3993326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    after: 'https://images.pexels.com/photos/3993447/pexels-photo-3993447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Modern cut and styling transformation'
  }
];