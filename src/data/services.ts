import { Service, ServiceCategory } from '../types';

// Sample service data
export const services: Service[] = [
  {
    id: 'hair-1',
    name: 'Signature Haircut & Style',
    category: ServiceCategory.Hair,
    description: 'Our signature haircut and styling service includes a consultation, relaxing shampoo with scalp massage, precision cut, and professional styling. Our expert stylists will create a look that complements your features and fits your lifestyle.',
    shortDescription: 'Precision cut with consultation and styling',
    price: 85,
    duration: 60,
    image: 'https://images.pexels.com/photos/3993447/pexels-photo-3993447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'hair-2',
    name: 'Luxury Color Treatment',
    category: ServiceCategory.Hair,
    description: 'Transform your look with our luxury color treatment. Includes consultation, premium color application, nourishing treatment, and professional styling. Our color specialists use the finest products for vibrant, long-lasting results.',
    shortDescription: 'Premium color with treatment and style',
    price: 120,
    duration: 120,
    image: 'https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'nail-1',
    name: 'Deluxe Manicure',
    category: ServiceCategory.Nails,
    description: 'Our deluxe manicure includes nail shaping, cuticle care, exfoliation, hydrating mask, relaxing hand massage, and premium polish application. Enjoy a truly indulgent experience that leaves your hands looking and feeling their best.',
    shortDescription: 'Complete nail care with massage and premium polish',
    price: 45,
    duration: 45,
    image: 'https://images.pexels.com/photos/3997386/pexels-photo-3997386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'nail-2',
    name: 'Gel Extension Artistry',
    category: ServiceCategory.Nails,
    description: 'Express your style with our gel extension artistry service. Includes nail preparation, custom-length extensions, artistic design, and long-lasting gel polish. Our nail artists create stunning, durable extensions that reflect your personality.',
    shortDescription: 'Custom extensions with artistic design',
    price: 75,
    duration: 90,
    image: 'https://images.pexels.com/photos/704815/pexels-photo-704815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'massage-1',
    name: 'Serenity Massage',
    category: ServiceCategory.Massage,
    description: 'Our signature serenity massage combines Swedish and deep tissue techniques to release tension and promote relaxation. Includes aromatic oils, hot towels, and gentle stretching. Experience profound relaxation and improved well-being.',
    shortDescription: 'Relaxing massage with aromatic oils',
    price: 95,
    duration: 60,
    image: 'https://images.pexels.com/photos/3865548/pexels-photo-3865548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'massage-2',
    name: 'Hot Stone Therapy',
    category: ServiceCategory.Massage,
    description: 'Our hot stone therapy uses smooth, heated basalt stones to melt away tension. The warmth penetrates deep into muscles, promoting circulation and deep relaxation. Includes aromatherapy and gentle pressure for a truly transformative experience.',
    shortDescription: 'Deep relaxation with heated stones',
    price: 110,
    duration: 75,
    image: 'https://images.pexels.com/photos/3188/love-romantic-bath-candlelight.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'skin-1',
    name: 'Radiance Facial',
    category: ServiceCategory.Skincare,
    description: 'Our radiance facial is customized to your skin type and concerns. Includes deep cleansing, exfoliation, extraction, massage, mask, and hydration. Experience noticeably brighter, clearer skin and a refreshed complexion.',
    shortDescription: 'Customized facial for glowing skin',
    price: 90,
    duration: 60,
    image: 'https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'skin-2',
    name: 'Anti-Aging Treatment',
    category: ServiceCategory.Skincare,
    description: 'Our premium anti-aging treatment combines advanced techniques and high-performance products to target fine lines and loss of elasticity. Includes specialized massage, collagen-boosting mask, and LED therapy for visibly firmer, more youthful skin.',
    shortDescription: 'Advanced treatment for youthful skin',
    price: 135,
    duration: 90,
    image: 'https://images.pexels.com/photos/3985338/pexels-photo-3985338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];