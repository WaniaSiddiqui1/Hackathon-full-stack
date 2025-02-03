
import ProductList from '@/app/components/ProductList';
import {Product} from '@/types/products';

export default async function Home() {
  const response = await fetch(
    'https://hackathon-apis.vercel.app/api/products'
  );

  const products: Product[] = await response.json();

  return (
    <div>
      <ProductList products={products} />
    </div>
  );
}