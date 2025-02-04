// import { useRouter } from 'next/router';
// import { useEffect, useState } from 'react';

// interface Product {
//   id: string;
//   name: string;
//   description: string;
//   category: string;
//   image: string;
// }

// const CategoryPage = () => {
//   const router = useRouter();
//   const { category } = router.query; // Get the category from the URL
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     if (typeof category === 'string') {
//       fetchProducts(category);
//     }
//   }, [category]);

//   const fetchProducts = async (category: string) => {
//     setLoading(true);
//     setError(null);

//     try {
//       const response = await fetch(`/api/products?category=${category}`);
//       const data = await response.json();

//       if (response.ok) {
//         setProducts(data);
//       } else {
//         setError('No products found for this category.');
//       }
//     } catch (err) {
//       setError('Failed to fetch products.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const formattedCategory =
//     typeof category === 'string'
//       ? category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')
//       : 'Category';

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-cyan-200 via-teal-300 to-sky-400 p-8">
//       <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-12">{formattedCategory}</h1>

//       {loading && <p className="text-center text-xl text-gray-600">Loading...</p>}
//       {error && <p className="text-center text-xl text-red-600">{error}</p>}

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-6">
//         {products.map((product) => (
//           <div key={product.id} className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 hover:bg-blue-50 p-4">
//             <img
//               src={product.image}
//               alt={product.name}
//               className="w-full h-56 object-cover rounded-t-lg mb-4"
//             />
//             <div>
//               <h2 className="font-semibold text-2xl text-gray-800 mb-2">{product.name}</h2>
//               <p className="text-gray-600 text-sm line-clamp-3">{product.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CategoryPage;
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
  price: number;
  quantity?: number;
}

const CategoryPage = () => {
  const params = useParams();
  const category = typeof params.category === "string" ? params.category : "";

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (category) {
      fetchProducts(category);
    }
  }, [category]);
  const fetchProducts = async (category: string) => {
    setLoading(true);
    setError(null);
  
    try {
      const response = await fetch(`/api/products?category=${category}`);
      if (!response.ok) throw new Error("No products found for this category.");
  
      const data: Product[] = await response.json();
      setProducts(data);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };
  const addToCart = (product: Product) => {
    if (typeof window === "undefined") return;
  
    const existingCart = localStorage.getItem("cart");
    const cart: Product[] = existingCart ? JSON.parse(existingCart) : []; // 🔹 Use const instead of let
  
    const productInCart = cart.find((item) => item.id === product.id);
  
    if (productInCart) {
      productInCart.quantity = (productInCart as any).quantity + 1;
    } else {
      cart.push({ ...product, quantity: 1 } as any);
    }
  
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.name} added to cart!`);
  };
  
  const formattedCategory =
    category.charAt(0).toUpperCase() + category.slice(1).replace("-", " ");

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-200 via-teal-300 to-sky-400 p-8">
      <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-12">
        {formattedCategory}
      </h1>

      {loading && <p className="text-center text-xl text-gray-600">Loading...</p>}
      {error && <p className="text-center text-xl text-red-600">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 hover:bg-blue-50 p-4"
          >
            <div className="relative w-full h-56 overflow-hidden">
              <Image
                src={product.image || "/placeholder-image.png"}
                alt={product.name}
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <div>
              <h2 className="font-semibold text-2xl text-gray-800 mb-2">
                {product.name}
              </h2>
              <p className="text-gray-600 text-sm line-clamp-3">{product.description}</p>
              <p className="text-lg font-bold text-blue-600 mt-2">₹{product.price}</p>
              <button
                onClick={() => addToCart(product)}
                className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
