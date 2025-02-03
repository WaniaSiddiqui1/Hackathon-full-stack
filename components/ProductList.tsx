"use client";

import { Product } from "@/types/products";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface IProductWithQuantity extends Product {
  quantity: number;
}

export default function ProductList({ products }: { products: Product[] }) {
  const [cartItems, setCartItems] = useState<IProductWithQuantity[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cart");
      const cart: IProductWithQuantity[] = savedCart ? JSON.parse(savedCart) : [];

      if (!Array.isArray(cart)) {
        setCartItems([]);
      } else {
        setCartItems(cart);
      }
    }
  }, []);

  const handleAddToCart = (product: Product) => {
    let updatedCart = [...cartItems];

    const existingProduct = updatedCart.find((item) => item.name === product.name);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      updatedCart.push({ ...product, quantity: 1 });
    }

    setCartItems(updatedCart);

    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }

    // Short delay before navigating to ensure state is updated
    setTimeout(() => {
      router.push("/cart");
    }, 200);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Our Products
      </h1>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.name}
            className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
          >
            <div className="relative w-full h-64">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-5 flex flex-col justify-between">
              <p className="font-semibold text-xl text-gray-800">{product.name}</p>
              <p className="text-sm text-gray-600 mt-1">{product.description}</p>
              <p className="text-lg font-bold text-blue-600 mt-2">
                ₹{product.price}
              </p>

              <button
                onClick={() => handleAddToCart(product)}
                className="mt-4 bg-gradient-to-r from-blue-700 to-blue-500 text-white font-medium py-2 px-6 rounded-lg hover:from-blue-800 hover:to-blue-600 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
