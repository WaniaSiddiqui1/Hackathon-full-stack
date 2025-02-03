export interface Product {
  id:number;
    name: string;
    category: string;
    price: number;
    originalPrice: number;
    tags: string[];
    image: string;
    description: string;
    available: boolean;
    quantity?: number;
  }