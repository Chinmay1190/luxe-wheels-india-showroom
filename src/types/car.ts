
export interface Car {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  description: string;
  specifications: {
    engine: string;
    power: string;
    topSpeed: string;
    acceleration: string;
    transmission: string;
    fuelType: string;
  };
  features: string[];
  year: number;
  category: string;
  inStock: boolean;
}

export interface Brand {
  id: string;
  name: string;
  logo: string;
  description: string;
  founded: number;
  headquarters: string;
  cars: Car[];
}

export interface CartItem {
  car: Car;
  quantity: number;
}
