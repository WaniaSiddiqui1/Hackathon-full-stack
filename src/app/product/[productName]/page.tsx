// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import Image from "next/image";

// interface IProductWithQuantity {
//   name: string;
//   image: string;
//   description: string;
//   price: number;
//   quantity: number;
// }

// export default function ProductDetailPage({ params }: { params: { productName: string } }) {
//   const [product, setProduct] = useState<IProductWithQuantity | null>(null);
//   const [color, setColor] = useState<string>("Red");
//   const router = useRouter();

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       try {
//         const savedCart = localStorage.getItem("cart");
//         const cart: IProductWithQuantity[] = savedCart ? JSON.parse(savedCart) : [];

//         const foundProduct = cart.find((item) => item.name === decodeURIComponent(params.productName));
//         setProduct(foundProduct || null);
//       } catch (error) {
//         console.error("Error parsing cart data:", error);
//         setProduct(null);
//       }
//     }
//   }, [params.productName]);

//   if (!product)
//     return <p className="text-center mt-10 text-red-500 text-xl font-semibold">Product not found.</p>;

//   return (
//     <div className="container mx-auto px-6 py-12">
//       <div className="bg-white shadow-xl rounded-xl p-8 flex flex-col md:flex-row gap-10 items-center md:items-start">
//         {/* Product Image */}
//         <div className="md:w-1/2 flex justify-center">
//           <Image
//             src={product.image}
//             alt={`Image of ${product.name}`}
//             width={500}
//             height={500}
//             className="rounded-xl object-cover border-4 border-gray-300 shadow-lg transition-transform duration-300 hover:scale-105"
//           />
//         </div>

//         {/* Product Details */}
//         <div className="md:w-1/2 flex flex-col">
//           <h1 className="text-5xl font-extrabold text-gray-900">{product.name}</h1>
//           <p className="text-gray-600 text-lg mt-4 leading-relaxed">{product.description}</p>
//           <p className="text-3xl font-bold text-green-700 mt-4">₹{product.price}</p>

//           {/* Color Selection */}
//           <div className="mt-6">
//             <label className="text-lg font-semibold text-gray-700">Select Color:</label>
//             <select
//               value={color}
//               onChange={(e) => setColor(e.target.value)}
//               className="border-2 border-gray-400 p-3 rounded-lg ml-3 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
//             >
//               <option>Brown</option>
//               <option>Red</option>
//               <option>Black</option>
//             </select>
//           </div>

//           {/* Checkout Button */}
//           <button
//             className="mt-8 bg-gradient-to-r from-green-600 to-green-800 text-white py-4 px-8 rounded-xl font-bold text-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform"
//             onClick={() => router.push("/checkout")}
//           >
//             Proceed to Checkout
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";

import { useEffect, useState, use } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface IProductWithQuantity {
  name: string;
  image: string;
  description: string;
  price: number;
  quantity: number;
}

export default function ProductDetailPage({ params }: { params: Promise<{ productName: string }> }) {
  const { productName } = use(params); // ✅ `params` کو unwrap کیا
  const [product, setProduct] = useState<IProductWithQuantity | null>(null);
  const [color, setColor] = useState<string>("Red");
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const savedCart = localStorage.getItem("cart");
        const cart: IProductWithQuantity[] = savedCart ? JSON.parse(savedCart) : [];
        
        // ✅ `productName` کو safely decode کیا
        const decodedProductName = decodeURIComponent(productName);
        const foundProduct = cart.find((item) => item.name === decodedProductName);
        setProduct(foundProduct || null);
      } catch (error) {
        console.error("Error parsing cart data:", error);
        setProduct(null);
      }
    }
  }, [productName]);

  if (!product)
    return <p className="text-center mt-10 text-red-500 text-xl font-semibold">Product not found.</p>;

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="bg-white shadow-xl rounded-xl p-8 flex flex-col md:flex-row gap-10 items-center md:items-start">
        {/* Product Image */}
        <div className="md:w-1/2 flex justify-center">
          <Image
            src={product.image}
            alt={`Image of ${product.name}`}
            width={500}
            height={500}
            className="rounded-xl object-cover border-4 border-gray-300 shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Product Details */}
        <div className="md:w-1/2 flex flex-col">
          <h1 className="text-5xl font-extrabold text-gray-900">{product.name}</h1>
          <p className="text-gray-600 text-lg mt-4 leading-relaxed">{product.description}</p>
          <p className="text-3xl font-bold text-green-700 mt-4">₹{product.price}</p>

          {/* Color Selection */}
          <div className="mt-6">
            <label className="text-lg font-semibold text-gray-700">Select Color:</label>
            <select
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="border-2 border-gray-400 p-3 rounded-lg ml-3 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            >
              <option>Brown</option>
              <option>Red</option>
              <option>Black</option>
            </select>
          </div>

          {/* Checkout Button */}
          <button
            className="mt-8 bg-gradient-to-r from-green-600 to-green-800 text-white py-4 px-8 rounded-xl font-bold text-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform"
            onClick={() => router.push("/checkout")}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
