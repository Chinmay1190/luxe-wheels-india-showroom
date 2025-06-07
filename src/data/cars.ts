
import { Brand } from '@/types/car';

export const brands: Brand[] = [
  {
    id: 'rolls-royce',
    name: 'Rolls-Royce',
    logo: 'https://logos-world.net/wp-content/uploads/2021/03/Rolls-Royce-Logo.png',
    description: 'The pinnacle of luxury and craftsmanship',
    founded: 1904,
    headquarters: 'Goodwood, England',
    cars: [
      {
        id: 'phantom-viii',
        name: 'Phantom VIII',
        brand: 'Rolls-Royce',
        price: 85000000,
        originalPrice: 90000000,
        image: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&q=80',
        description: 'The ultimate expression of luxury and refinement',
        specifications: {
          engine: '6.75L V12 Twin-Turbo',
          power: '563 HP',
          topSpeed: '250 km/h',
          acceleration: '5.3 seconds (0-100)',
          transmission: '8-Speed Automatic',
          fuelType: 'Petrol'
        },
        features: ['Starlight Headliner', 'Spirit of Ecstasy', 'Bespoke Interior', 'Whisper Quiet Ride'],
        year: 2024,
        category: 'Ultra Luxury Sedan',
        inStock: true
      },
      {
        id: 'cullinan',
        name: 'Cullinan',
        brand: 'Rolls-Royce',
        price: 72000000,
        image: 'https://images.unsplash.com/photo-1544829099-b9a0c5303bea?w=800&q=80',
        description: 'The first SUV from Rolls-Royce',
        specifications: {
          engine: '6.75L V12 Twin-Turbo',
          power: '563 HP',
          topSpeed: '250 km/h',
          acceleration: '5.2 seconds (0-100)',
          transmission: '8-Speed Automatic',
          fuelType: 'Petrol'
        },
        features: ['All-Terrain Capability', 'Luxury Picnic Setup', 'Panoramic Roof', 'Rear Entertainment'],
        year: 2024,
        category: 'Ultra Luxury SUV',
        inStock: true
      },
      {
        id: 'ghost',
        name: 'Ghost',
        brand: 'Rolls-Royce',
        price: 68000000,
        image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=80',
        description: 'The most technologically advanced Rolls-Royce ever',
        specifications: {
          engine: '6.75L V12 Twin-Turbo',
          power: '563 HP',
          topSpeed: '250 km/h',
          acceleration: '4.8 seconds (0-100)',
          transmission: '8-Speed Automatic',
          fuelType: 'Petrol'
        },
        features: ['Planar Suspension', 'Illuminated Grille', 'Bespoke Audio', 'Satellite Aided Transmission'],
        year: 2024,
        category: 'Luxury Sedan',
        inStock: true
      },
      {
        id: 'wraith',
        name: 'Wraith',
        brand: 'Rolls-Royce',
        price: 65000000,
        image: 'https://images.unsplash.com/photo-1610473244523-6e70b22bfb9b?w=800&q=80',
        description: 'The most powerful Rolls-Royce ever created',
        specifications: {
          engine: '6.6L V12 Twin-Turbo',
          power: '624 HP',
          topSpeed: '250 km/h',
          acceleration: '4.4 seconds (0-100)',
          transmission: '8-Speed Automatic',
          fuelType: 'Petrol'
        },
        features: ['Fastback Design', 'Starlight Headliner', 'Suicide Doors', 'Performance Oriented'],
        year: 2023,
        category: 'Grand Tourer',
        inStock: true
      },
      {
        id: 'dawn',
        name: 'Dawn',
        brand: 'Rolls-Royce',
        price: 63000000,
        image: 'https://images.unsplash.com/photo-1549399552-8d3b0297a11b?w=800&q=80',
        description: 'The sexiest Rolls-Royce ever created',
        specifications: {
          engine: '6.6L V12 Twin-Turbo',
          power: '563 HP',
          topSpeed: '250 km/h',
          acceleration: '4.9 seconds (0-100)',
          transmission: '8-Speed Automatic',
          fuelType: 'Petrol'
        },
        features: ['Convertible Top', 'Silent Operation', 'Bespoke Interior', 'Air Scarf System'],
        year: 2023,
        category: 'Luxury Convertible',
        inStock: true
      },
      {
        id: 'spectre',
        name: 'Spectre',
        brand: 'Rolls-Royce',
        price: 78000000,
        image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80',
        description: 'The first fully electric Rolls-Royce',
        specifications: {
          engine: 'Electric Motors',
          power: '577 HP',
          topSpeed: '250 km/h',
          acceleration: '4.5 seconds (0-100)',
          transmission: 'Single-Speed Automatic',
          fuelType: 'Electric'
        },
        features: ['Electric Powertrain', 'Silent Running', 'Advanced Technology', 'Zero Emissions'],
        year: 2024,
        category: 'Electric Luxury Coupe',
        inStock: true
      },
      {
        id: 'phantom-drophead',
        name: 'Phantom Drophead Coupe',
        brand: 'Rolls-Royce',
        price: 88000000,
        image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80',
        description: 'Open-air luxury at its finest',
        specifications: {
          engine: '6.75L V12',
          power: '453 HP',
          topSpeed: '240 km/h',
          acceleration: '5.9 seconds (0-100)',
          transmission: '6-Speed Automatic',
          fuelType: 'Petrol'
        },
        features: ['Soft-Top Convertible', 'Teak Decking', 'Nautical Design', 'Bespoke Craftsmanship'],
        year: 2022,
        category: 'Ultra Luxury Convertible',
        inStock: false
      },
      {
        id: 'silver-shadow',
        name: 'Silver Shadow Tribute',
        brand: 'Rolls-Royce',
        price: 55000000,
        image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80',
        description: 'A modern tribute to a classic',
        specifications: {
          engine: '6.75L V8',
          power: '400 HP',
          topSpeed: '200 km/h',
          acceleration: '6.5 seconds (0-100)',
          transmission: '4-Speed Automatic',
          fuelType: 'Petrol'
        },
        features: ['Classic Design', 'Modern Safety', 'Heritage Styling', 'Collector\'s Edition'],
        year: 2023,
        category: 'Heritage Luxury',
        inStock: true
      },
      {
        id: 'corniche',
        name: 'Corniche Revival',
        brand: 'Rolls-Royce',
        price: 60000000,
        image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80',
        description: 'Revival of the legendary Corniche',
        specifications: {
          engine: '6.75L V12',
          power: '500 HP',
          topSpeed: '230 km/h',
          acceleration: '5.8 seconds (0-100)',
          transmission: '8-Speed Automatic',
          fuelType: 'Petrol'
        },
        features: ['Classic Convertible', 'Modern Engineering', 'Bespoke Interior', 'Limited Edition'],
        year: 2024,
        category: 'Heritage Convertible',
        inStock: true
      },
      {
        id: 'boat-tail',
        name: 'Boat Tail',
        brand: 'Rolls-Royce',
        price: 200000000,
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
        description: 'The most expensive new car ever created',
        specifications: {
          engine: '6.75L V12 Twin-Turbo',
          power: '563 HP',
          topSpeed: '250 km/h',
          acceleration: '5.0 seconds (0-100)',
          transmission: '8-Speed Automatic',
          fuelType: 'Petrol'
        },
        features: ['One-Off Design', 'Nautical Inspiration', 'Picnic Setup', 'Bespoke Everything'],
        year: 2024,
        category: 'Bespoke Ultra Luxury',
        inStock: false
      }
    ]
  },
  {
    id: 'bentley',
    name: 'Bentley',
    logo: 'https://logos-world.net/wp-content/uploads/2021/03/Bentley-Logo.png',
    description: 'Extraordinary journeys start with Bentley',
    founded: 1919,
    headquarters: 'Crewe, England',
    cars: [
      {
        id: 'continental-gt',
        name: 'Continental GT',
        brand: 'Bentley',
        price: 45000000,
        originalPrice: 48000000,
        image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80',
        description: 'The definitive grand tourer',
        specifications: {
          engine: '6.0L W12 Twin-Turbo',
          power: '626 HP',
          topSpeed: '333 km/h',
          acceleration: '3.7 seconds (0-100)',
          transmission: '8-Speed Dual-Clutch',
          fuelType: 'Petrol'
        },
        features: ['Dynamic Drive', 'Rotating Display', 'Diamond Quilting', 'Bang & Olufsen Audio'],
        year: 2024,
        category: 'Grand Tourer',
        inStock: true
      },
      {
        id: 'bentayga',
        name: 'Bentayga',
        brand: 'Bentley',
        price: 42000000,
        image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&q=80',
        description: 'The most luxurious SUV in the world',
        specifications: {
          engine: '4.0L V8 Twin-Turbo',
          power: '542 HP',
          topSpeed: '290 km/h',
          acceleration: '4.5 seconds (0-100)',
          transmission: '8-Speed Automatic',
          fuelType: 'Petrol'
        },
        features: ['Air Suspension', 'Terrain Response', 'Luxury Rear Seats', 'Bentley Safes'],
        year: 2024,
        category: 'Luxury SUV',
        inStock: true
      },
      {
        id: 'flying-spur',
        name: 'Flying Spur',
        brand: 'Bentley',
        price: 48000000,
        image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80',
        description: 'The luxury sedan that flies',
        specifications: {
          engine: '6.0L W12 Twin-Turbo',
          power: '626 HP',
          topSpeed: '333 km/h',
          acceleration: '3.8 seconds (0-100)',
          transmission: '8-Speed Dual-Clutch',
          fuelType: 'Petrol'
        },
        features: ['All-Wheel Drive', 'Massage Seats', 'Champagne Cooler', 'Executive Rear Seating'],
        year: 2024,
        category: 'Luxury Sedan',
        inStock: true
      },
      {
        id: 'continental-gtc',
        name: 'Continental GTC',
        brand: 'Bentley',
        price: 47000000,
        image: 'https://images.unsplash.com/photo-1494905998402-395d579af36f?w=800&q=80',
        description: 'Open-air grand touring excellence',
        specifications: {
          engine: '6.0L W12 Twin-Turbo',
          power: '626 HP',
          topSpeed: '333 km/h',
          acceleration: '3.8 seconds (0-100)',
          transmission: '8-Speed Dual-Clutch',
          fuelType: 'Petrol'
        },
        features: ['Convertible Top', 'Neck Warmer', 'Wind Deflector', 'All-Weather Capability'],
        year: 2024,
        category: 'Luxury Convertible',
        inStock: true
      },
      {
        id: 'bacalar',
        name: 'Bacalar',
        brand: 'Bentley',
        price: 150000000,
        image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&q=80',
        description: 'The rarest Bentley ever made',
        specifications: {
          engine: '6.0L W12 Twin-Turbo',
          power: '650 HP',
          topSpeed: '320 km/h',
          acceleration: '3.5 seconds (0-100)',
          transmission: '8-Speed Dual-Clutch',
          fuelType: 'Petrol'
        },
        features: ['Bespoke Bodywork', 'Open-Top Design', 'Limited Production', 'Handcrafted Interior'],
        year: 2023,
        category: 'Bespoke Luxury',
        inStock: false
      },
      {
        id: 'mulliner-batur',
        name: 'Mulliner Batur',
        brand: 'Bentley',
        price: 175000000,
        image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80',
        description: 'The ultimate Bentley experience',
        specifications: {
          engine: '6.0L W12 Twin-Turbo',
          power: '710 HP',
          topSpeed: '360 km/h',
          acceleration: '3.2 seconds (0-100)',
          transmission: '8-Speed Dual-Clutch',
          fuelType: 'Petrol'
        },
        features: ['Carbon Fiber Body', 'Track-Focused', 'Mulliner Craftsmanship', 'Limited Edition'],
        year: 2024,
        category: 'Ultra Performance',
        inStock: false
      },
      {
        id: 'azure',
        name: 'Azure Tribute',
        brand: 'Bentley',
        price: 52000000,
        image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80',
        description: 'Classic luxury redefined',
        specifications: {
          engine: '6.75L V8 Turbo',
          power: '400 HP',
          topSpeed: '250 km/h',
          acceleration: '5.5 seconds (0-100)',
          transmission: '4-Speed Automatic',
          fuelType: 'Petrol'
        },
        features: ['Classic Convertible', 'Luxury Comfort', 'Heritage Design', 'Timeless Elegance'],
        year: 2023,
        category: 'Heritage Luxury',
        inStock: true
      },
      {
        id: 'arnage',
        name: 'Arnage Final Series',
        brand: 'Bentley',
        price: 38000000,
        image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80',
        description: 'The last of the traditional Bentleys',
        specifications: {
          engine: '6.75L V8 Twin-Turbo',
          power: '500 HP',
          topSpeed: '270 km/h',
          acceleration: '5.2 seconds (0-100)',
          transmission: '6-Speed Automatic',
          fuelType: 'Petrol'
        },
        features: ['Traditional Craftsmanship', 'Hand-Built Engine', 'Classic Styling', 'Final Edition'],
        year: 2022,
        category: 'Classic Luxury',
        inStock: true
      },
      {
        id: 'mulsanne',
        name: 'Mulsanne Speed',
        brand: 'Bentley',
        price: 55000000,
        image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80',
        description: 'The flagship luxury sedan',
        specifications: {
          engine: '6.75L V8 Twin-Turbo',
          power: '530 HP',
          topSpeed: '305 km/h',
          acceleration: '4.9 seconds (0-100)',
          transmission: '8-Speed Automatic',
          fuelType: 'Petrol'
        },
        features: ['Handcrafted Interior', 'Executive Rear Seating', 'Entertainment System', 'Comfort Specification'],
        year: 2023,
        category: 'Flagship Sedan',
        inStock: true
      },
      {
        id: 'continental-supersports',
        name: 'Continental Supersports',
        brand: 'Bentley',
        price: 65000000,
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
        description: 'The most extreme Continental ever',
        specifications: {
          engine: '6.0L W12 Twin-Turbo',
          power: '700 HP',
          topSpeed: '336 km/h',
          acceleration: '3.4 seconds (0-100)',
          transmission: '8-Speed Dual-Clutch',
          fuelType: 'Petrol'
        },
        features: ['Carbon Fiber Trim', 'Sport Suspension', 'Performance Exhaust', 'Track-Ready'],
        year: 2024,
        category: 'Performance GT',
        inStock: false
      }
    ]
  },
  {
    id: 'ferrari',
    name: 'Ferrari',
    logo: 'https://logos-world.net/wp-content/uploads/2021/03/Ferrari-Logo.png',
    description: 'The prancing horse of motorsport excellence',
    founded: 1939,
    headquarters: 'Maranello, Italy',
    cars: [
      {
        id: 'sf90-stradale',
        name: 'SF90 Stradale',
        brand: 'Ferrari',
        price: 62000000,
        originalPrice: 65000000,
        image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80',
        description: 'The most powerful Ferrari ever',
        specifications: {
          engine: '4.0L V8 Hybrid',
          power: '986 HP',
          topSpeed: '340 km/h',
          acceleration: '2.5 seconds (0-100)',
          transmission: '8-Speed Dual-Clutch',
          fuelType: 'Hybrid'
        },
        features: ['Hybrid Technology', 'All-Wheel Drive', 'Active Aerodynamics', 'F1 Technology'],
        year: 2024,
        category: 'Hybrid Supercar',
        inStock: true
      },
      {
        id: 'f8-tributo',
        name: 'F8 Tributo',
        brand: 'Ferrari',
        price: 45000000,
        image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&q=80',
        description: 'Pure V8 excellence',
        specifications: {
          engine: '3.9L V8 Twin-Turbo',
          power: '710 HP',
          topSpeed: '340 km/h',
          acceleration: '2.9 seconds (0-100)',
          transmission: '7-Speed Dual-Clutch',
          fuelType: 'Petrol'
        },
        features: ['Track-Focused', 'Aerodynamic Excellence', 'Racing DNA', 'Dynamic Enhancer'],
        year: 2024,
        category: 'V8 Supercar',
        inStock: true
      },
      {
        id: 'roma',
        name: 'Roma',
        brand: 'Ferrari',
        price: 38000000,
        image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80',
        description: 'La Nuova Dolce Vita',
        specifications: {
          engine: '3.9L V8 Twin-Turbo',
          power: '612 HP',
          topSpeed: '320 km/h',
          acceleration: '3.4 seconds (0-100)',
          transmission: '8-Speed Dual-Clutch',
          fuelType: 'Petrol'
        },
        features: ['Grand Touring Comfort', 'Elegant Design', 'Daily Usability', 'Italian Style'],
        year: 2024,
        category: 'Grand Tourer',
        inStock: true
      },
      {
        id: 'sf90-spider',
        name: 'SF90 Spider',
        brand: 'Ferrari',
        price: 68000000,
        image: 'https://images.unsplash.com/photo-1494905998402-395d579af36f?w=800&q=80',
        description: 'Open-top hybrid excellence',
        specifications: {
          engine: '4.0L V8 Hybrid',
          power: '986 HP',
          topSpeed: '340 km/h',
          acceleration: '2.5 seconds (0-100)',
          transmission: '8-Speed Dual-Clutch',
          fuelType: 'Hybrid'
        },
        features: ['Retractable Hardtop', 'Hybrid Power', 'F1 Heritage', 'All-Weather Capability'],
        year: 2024,
        category: 'Hybrid Convertible',
        inStock: true
      },
      {
        id: 'laferrari',
        name: 'LaFerrari Aperta',
        brand: 'Ferrari',
        price: 85000000,
        image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&q=80',
        description: 'The ultimate Ferrari hypercar',
        specifications: {
          engine: '6.3L V12 Hybrid',
          power: '950 HP',
          topSpeed: '350 km/h',
          acceleration: '2.4 seconds (0-100)',
          transmission: '7-Speed Dual-Clutch',
          fuelType: 'Hybrid'
        },
        features: ['Limited Production', 'Hybrid V12', 'Open-Top Design', 'Racing Technology'],
        year: 2023,
        category: 'Hypercar',
        inStock: false
      },
      {
        id: 'purosangue',
        name: 'Purosangue',
        brand: 'Ferrari',
        price: 55000000,
        image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80',
        description: 'The first Ferrari SUV',
        specifications: {
          engine: '6.5L V12',
          power: '715 HP',
          topSpeed: '310 km/h',
          acceleration: '3.3 seconds (0-100)',
          transmission: '8-Speed Dual-Clutch',
          fuelType: 'Petrol'
        },
        features: ['Four Doors', 'Active Suspension', 'All-Wheel Drive', 'Ferrari DNA'],
        year: 2024,
        category: 'Sports SUV',
        inStock: true
      },
      {
        id: 'f12berlinetta',
        name: 'F12berlinetta',
        brand: 'Ferrari',
        price: 42000000,
        image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80',
        description: 'V12 front-engine masterpiece',
        specifications: {
          engine: '6.3L V12',
          power: '730 HP',
          topSpeed: '340 km/h',
          acceleration: '3.1 seconds (0-100)',
          transmission: '7-Speed Dual-Clutch',
          fuelType: 'Petrol'
        },
        features: ['Front-Engine V12', 'Aerodynamic Design', 'Track Capability', 'GT Comfort'],
        year: 2023,
        category: 'V12 GT',
        inStock: true
      },
      {
        id: 'portofino-m',
        name: 'Portofino M',
        brand: 'Ferrari',
        price: 40000000,
        image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80',
        description: 'The everyday Ferrari',
        specifications: {
          engine: '3.9L V8 Twin-Turbo',
          power: '612 HP',
          topSpeed: '320 km/h',
          acceleration: '3.45 seconds (0-100)',
          transmission: '8-Speed Dual-Clutch',
          fuelType: 'Petrol'
        },
        features: ['Retractable Hardtop', '2+2 Seating', 'Daily Usability', 'Variable Boost Management'],
        year: 2024,
        category: 'GT Convertible',
        inStock: true
      },
      {
        id: '296-gtb',
        name: '296 GTB',
        brand: 'Ferrari',
        price: 48000000,
        image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80',
        description: 'The hybrid berlinetta',
        specifications: {
          engine: '3.0L V6 Hybrid',
          power: '818 HP',
          topSpeed: '330 km/h',
          acceleration: '2.9 seconds (0-100)',
          transmission: '8-Speed Dual-Clutch',
          fuelType: 'Hybrid'
        },
        features: ['V6 Hybrid', 'Electric Mode', 'Compact Design', 'Racing Heritage'],
        year: 2024,
        category: 'Hybrid Berlinetta',
        inStock: true
      },
      {
        id: 'monza-sp2',
        name: 'Monza SP2',
        brand: 'Ferrari',
        price: 125000000,
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
        description: 'Icona series speedster',
        specifications: {
          engine: '6.5L V12',
          power: '799 HP',
          topSpeed: '300 km/h',
          acceleration: '2.9 seconds (0-100)',
          transmission: '7-Speed Dual-Clutch',
          fuelType: 'Petrol'
        },
        features: ['Open Cockpit', 'Wind Screen', 'Limited Production', 'Racing Inspired'],
        year: 2023,
        category: 'Icona Speedster',
        inStock: false
      }
    ]
  },
  {
    id: 'lamborghini',
    name: 'Lamborghini',
    logo: 'https://logos-world.net/wp-content/uploads/2021/03/Lamborghini-Logo.png',
    description: 'Expect the unexpected',
    founded: 1963,
    headquarters: 'Sant\'Agata Bolognese, Italy',
    cars: [
      {
        id: 'revuelto',
        name: 'Revuelto',
        brand: 'Lamborghini',
        price: 58000000,
        originalPrice: 62000000,
        image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80',
        description: 'The new flagship hybrid supercar',
        specifications: {
          engine: '6.5L V12 Hybrid',
          power: '1001 HP',
          topSpeed: '350 km/h',
          acceleration: '2.5 seconds (0-100)',
          transmission: '8-Speed Dual-Clutch',
          fuelType: 'Hybrid'
        },
        features: ['Hybrid V12', 'All-Wheel Drive', 'Active Aerodynamics', 'Carbon Fiber Monocoque'],
        year: 2024,
        category: 'Hybrid Supercar',
        inStock: true
      },
      {
        id: 'huracan-sto',
        name: 'Huracán STO',
        brand: 'Lamborghini',
        price: 45000000,
        image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&q=80',
        description: 'Super Trofeo Omologata',
        specifications: {
          engine: '5.2L V10',
          power: '630 HP',
          topSpeed: '310 km/h',
          acceleration: '3.0 seconds (0-100)',
          transmission: '7-Speed Dual-Clutch',
          fuelType: 'Petrol'
        },
        features: ['Track-Focused', 'Aerodynamic Package', 'Weight Reduction', 'Racing Technology'],
        year: 2024,
        category: 'Track Supercar',
        inStock: true
      },
      {
        id: 'urus-performante',
        name: 'Urus Performante',
        brand: 'Lamborghini',
        price: 48000000,
        image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80',
        description: 'The ultimate super SUV',
        specifications: {
          engine: '4.0L V8 Twin-Turbo',
          power: '657 HP',
          topSpeed: '306 km/h',
          acceleration: '3.3 seconds (0-100)',
          transmission: '8-Speed Automatic',
          fuelType: 'Petrol'
        },
        features: ['Carbon Fiber Aero', 'Track Package', 'Rally Mode', 'Sport Exhaust'],
        year: 2024,
        category: 'Performance SUV',
        inStock: true
      },
      {
        id: 'aventador-ultimae',
        name: 'Aventador Ultimae',
        brand: 'Lamborghini',
        price: 65000000,
        image: 'https://images.unsplash.com/photo-1494905998402-395d579af36f?w=800&q=80',
        description: 'The final Aventador',
        specifications: {
          engine: '6.5L V12',
          power: '769 HP',
          topSpeed: '355 km/h',
          acceleration: '2.8 seconds (0-100)',
          transmission: '7-Speed Single-Clutch',
          fuelType: 'Petrol'
        },
        features: ['Final Edition', 'Naturally Aspirated V12', 'Lightweight', 'Collector\'s Item'],
        year: 2023,
        category: 'V12 Supercar',
        inStock: false
      },
      {
        id: 'huracan-spyder',
        name: 'Huracán Spyder',
        brand: 'Lamborghini',
        price: 42000000,
        image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&q=80',
        description: 'Open-air V10 experience',
        specifications: {
          engine: '5.2L V10',
          power: '610 HP',
          topSpeed: '324 km/h',
          acceleration: '3.1 seconds (0-100)',
          transmission: '7-Speed Dual-Clutch',
          fuelType: 'Petrol'
        },
        features: ['Soft-Top Convertible', 'All-Wheel Drive', 'Dynamic Steering', 'Performance Traction Control'],
        year: 2024,
        category: 'Convertible Supercar',
        inStock: true
      },
      {
        id: 'sian',
        name: 'Sián FKP 37',
        brand: 'Lamborghini',
        price: 85000000,
        image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80',
        description: 'The first hybrid Lamborghini',
        specifications: {
          engine: '6.5L V12 Hybrid',
          power: '819 HP',
          topSpeed: '350 km/h',
          acceleration: '2.8 seconds (0-100)',
          transmission: '7-Speed Single-Clutch',
          fuelType: 'Hybrid'
        },
        features: ['Supercapacitor Hybrid', 'Limited Production', 'Active Aerodynamics', 'Unique Design'],
        year: 2023,
        category: 'Hybrid Limited Edition',
        inStock: false
      },
      {
        id: 'countach-lpi',
        name: 'Countach LPI 800-4',
        brand: 'Lamborghini',
        price: 75000000,
        image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80',
        description: 'The legend returns',
        specifications: {
          engine: '6.5L V12 Hybrid',
          power: '803 HP',
          topSpeed: '355 km/h',
          acceleration: '2.8 seconds (0-100)',
          transmission: '7-Speed Single-Clutch',
          fuelType: 'Hybrid'
        },
        features: ['Heritage Design', 'Modern Technology', 'Limited Production', 'Iconic Styling'],
        year: 2023,
        category: 'Heritage Hybrid',
        inStock: false
      },
      {
        id: 'gallardo-finale',
        name: 'Gallardo Finale',
        brand: 'Lamborghini',
        price: 35000000,
        image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80',
        description: 'Final tribute to the Gallardo',
        specifications: {
          engine: '5.2L V10',
          power: '550 HP',
          topSpeed: '320 km/h',
          acceleration: '3.4 seconds (0-100)',
          transmission: '6-Speed E-Gear',
          fuelType: 'Petrol'
        },
        features: ['Final Edition', 'Classic V10', 'Collector\'s Value', 'Heritage Model'],
        year: 2022,
        category: 'Heritage Supercar',
        inStock: true
      },
      {
        id: 'miura-homage',
        name: 'Miura Homage',
        brand: 'Lamborghini',
        price: 95000000,
        image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80',
        description: 'Tribute to the original supercar',
        specifications: {
          engine: '6.5L V12',
          power: '750 HP',
          topSpeed: '320 km/h',
          acceleration: '2.9 seconds (0-100)',
          transmission: '7-Speed Dual-Clutch',
          fuelType: 'Petrol'
        },
        features: ['Classic Design', 'Modern Engineering', 'Limited Production', 'Museum Quality'],
        year: 2024,
        category: 'Heritage Tribute',
        inStock: false
      },
      {
        id: 'centenario',
        name: 'Centenario',
        brand: 'Lamborghini',
        price: 180000000,
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
        description: 'Centenary celebration masterpiece',
        specifications: {
          engine: '6.5L V12',
          power: '759 HP',
          topSpeed: '350 km/h',
          acceleration: '2.8 seconds (0-100)',
          transmission: '7-Speed Single-Clutch',
          fuelType: 'Petrol'
        },
        features: ['Ultra-Limited', 'Active Aerodynamics', 'Carbon Fiber', 'Anniversary Edition'],
        year: 2023,
        category: 'Ultra-Limited Edition',
        inStock: false
      }
    ]
  },
  {
    id: 'mclaren',
    name: 'McLaren',
    logo: 'https://logos-world.net/wp-content/uploads/2021/03/McLaren-Logo.png',
    description: 'Everything in pursuit of the perfect lap',
    founded: 1963,
    headquarters: 'Woking, England',
    cars: [
      {
        id: '750s',
        name: '750S',
        brand: 'McLaren',
        price: 52000000,
        originalPrice: 55000000,
        image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80',
        description: 'The new generation of McLaren excellence',
        specifications: {
          engine: '4.0L V8 Twin-Turbo',
          power: '750 HP',
          topSpeed: '332 km/h',
          acceleration: '2.8 seconds (0-100)',
          transmission: '7-Speed Dual-Clutch',
          fuelType: 'Petrol'
        },
        features: ['Active Aerodynamics', 'Carbon Fiber Tub', 'Adaptive Suspension', 'McLaren Control Launcher'],
        year: 2024,
        category: 'Super Series',
        inStock: true
      },
      {
        id: 'artura',
        name: 'Artura',
        brand: 'McLaren',
        price: 45000000,
        image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&q=80',
        description: 'The hybrid high-performance supercar',
        specifications: {
          engine: '3.0L V6 Hybrid',
          power: '671 HP',
          topSpeed: '330 km/h',
          acceleration: '3.0 seconds (0-100)',
          transmission: '8-Speed Dual-Clutch',
          fuelType: 'Hybrid'
        },
        features: ['Hybrid Technology', 'Electric Mode', 'Weight Optimization', 'New Platform'],
        year: 2024,
        category: 'Hybrid Supercar',
        inStock: true
      },
      {
        id: '765lt',
        name: '765LT',
        brand: 'McLaren',
        price: 68000000,
        image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80',
        description: 'Longtail track-focused excellence',
        specifications: {
          engine: '4.0L V8 Twin-Turbo',
          power: '765 HP',
          topSpeed: '330 km/h',
          acceleration: '2.7 seconds (0-100)',
          transmission: '7-Speed Dual-Clutch',
          fuelType: 'Petrol'
        },
        features: ['Longtail Design', 'Track-Focused', 'Weight Reduction', 'Aerodynamic Package'],
        year: 2023,
        category: 'Track-Focused Supercar',
        inStock: true
      },
      {
        id: 'gt',
        name: 'GT',
        brand: 'McLaren',
        price: 42000000,
        image: 'https://images.unsplash.com/photo-1494905998402-395d579af36f?w=800&q=80',
        description: 'The grand tourer from McLaren',
        specifications: {
          engine: '4.0L V8 Twin-Turbo',
          power: '612 HP',
          topSpeed: '326 km/h',
          acceleration: '3.2 seconds (0-100)',
          transmission: '7-Speed Dual-Clutch',
          fuelType: 'Petrol'
        },
        features: ['Grand Touring Comfort', 'Daily Usability', 'Luxurious Interior', 'Adaptive Dampers'],
        year: 2024,
        category: 'Grand Tourer',
        inStock: true
      },
      {
        id: 'senna',
        name: 'Senna',
        brand: 'McLaren',
        price: 125000000,
        image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&q=80',
        description: 'Ultimate track weapon',
        specifications: {
          engine: '4.0L V8 Twin-Turbo',
          power: '789 HP',
          topSpeed: '340 km/h',
          acceleration: '2.8 seconds (0-100)',
          transmission: '7-Speed Dual-Clutch',
          fuelType: 'Petrol'
        },
        features: ['Extreme Aerodynamics', 'Track-Only Focus', 'Carbon Fiber', 'Limited Production'],
        year: 2023,
        category: 'Track Hypercar',
        inStock: false
      },
      {
        id: 'speedtail',
        name: 'Speedtail',
        brand: 'McLaren',
        price: 185000000,
        image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80',
        description: 'Hyper-GT achievement',
        specifications: {
          engine: '4.0L V8 Hybrid',
          power: '1035 HP',
          topSpeed: '403 km/h',
          acceleration: '2.5 seconds (0-100)',
          transmission: '7-Speed Dual-Clutch',
          fuelType: 'Hybrid'
        },
        features: ['Three-Seat Layout', 'Velocity Mode', 'Streamlined Design', 'Carbon Fiber Body'],
        year: 2023,
        category: 'Hyper-GT',
        inStock: false
      },
      {
        id: '720s-spider',
        name: '720S Spider',
        brand: 'McLaren',
        price: 58000000,
        image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80',
        description: 'Open-air supercar excellence',
        specifications: {
          engine: '4.0L V8 Twin-Turbo',
          power: '710 HP',
          topSpeed: '341 km/h',
          acceleration: '2.9 seconds (0-100)',
          transmission: '7-Speed Dual-Clutch',
          fuelType: 'Petrol'
        },
        features: ['Retractable Hardtop', 'Variable Drift Control', 'Active Suspension', 'Carbon Fiber'],
        year: 2024,
        category: 'Convertible Supercar',
        inStock: true
      },
      {
        id: '600lt',
        name: '600LT',
        brand: 'McLaren',
        price: 48000000,
        image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80',
        description: 'Sports Series Longtail',
        specifications: {
          engine: '3.8L V8 Twin-Turbo',
          power: '592 HP',
          topSpeed: '328 km/h',
          acceleration: '2.9 seconds (0-100)',
          transmission: '7-Speed Dual-Clutch',
          fuelType: 'Petrol'
        },
        features: ['Longtail Aerodynamics', 'Weight Reduction', 'Track Focus', 'Limited Production'],
        year: 2023,
        category: 'Sports Series Track',
        inStock: true
      },
      {
        id: 'p1',
        name: 'P1',
        brand: 'McLaren',
        price: 95000000,
        image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80',
        description: 'The original hybrid hypercar',
        specifications: {
          engine: '3.8L V8 Hybrid',
          power: '903 HP',
          topSpeed: '350 km/h',
          acceleration: '2.8 seconds (0-100)',
          transmission: '7-Speed Dual-Clutch',
          fuelType: 'Hybrid'
        },
        features: ['Hybrid Pioneer', 'Active Aerodynamics', 'DRS System', 'Carbon Fiber Monocoque'],
        year: 2022,
        category: 'Hybrid Hypercar',
        inStock: false
      },
      {
        id: 'elva',
        name: 'Elva',
        brand: 'McLaren',
        price: 155000000,
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
        description: 'Ultimate expression of driving purity',
        specifications: {
          engine: '4.0L V8 Twin-Turbo',
          power: '804 HP',
          topSpeed: '326 km/h',
          acceleration: '2.8 seconds (0-100)',
          transmission: '7-Speed Dual-Clutch',
          fuelType: 'Petrol'
        },
        features: ['No Roof, No Windscreen', 'Active Air Management', 'Carbon Fiber', 'Ultra-Limited'],
        year: 2023,
        category: 'Open Cockpit Speedster',
        inStock: false
      }
    ]
  }
];
