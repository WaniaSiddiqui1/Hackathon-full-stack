
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface IProductWithQuantity {
  name: string;
  image: string;
  description: string;
  price: number;
  quantity: number;
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<IProductWithQuantity[]>([]);
  const [notification, setNotification] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cart");
      try {
        const cart = savedCart ? JSON.parse(savedCart) : [];
        if (Array.isArray(cart)) {
          setCartItems(cart);
        } else {
          setCartItems([]); 
        }
      } catch (error) {
        console.error("Error parsing cart data:", error);
        setCartItems([]); 
      }
    }
  }, []);

  const handleQuantityChange = (productName: string, operation: "increase" | "decrease") => {
    setCartItems((prevCartItems) => {
      const updatedCart = prevCartItems.map((item) =>
        item.name === productName
          ? {
              ...item,
              quantity: operation === "increase" ? item.quantity + 1 : Math.max(1, item.quantity - 1),
            }
          : item
      );

      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(updatedCart));
      }

      return updatedCart;
    });

  
    setNotification(operation === "increase" ? "Product added to cart!" : "Quantity updated!");
    setTimeout(() => setNotification(null), 3000);
  };

  const handleCheckout = () => {
    alert("Proceeding to checkout");
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-6 text-center">Your Cart</h1>

      {notification && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-lg shadow-md">
          {notification}
        </div>
      )}

      {cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <div className="grid gap-6">
          {cartItems.map((product) => (
            <div
              key={product.name}
              className="border rounded-lg shadow-sm p-4 flex cursor-pointer hover:bg-gray-100 transition"
              onClick={() => router.push(`/product/${encodeURIComponent(product.name)}`)}
            >
              <Image
                src={product.image}
                alt={product.name || "Product image"}
                width={100}
                height={100}
                className="rounded-md object-cover"
              />
              <div className="ml-4 flex-1">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-sm text-gray-600">{product.description}</p>
                <p className="text-lg font-semibold text-blue-600 mt-2">₹{product.price}</p>
                <div className="flex items-center mt-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleQuantityChange(product.name, "decrease");
                    }}
                    className="bg-gray-600 text-white px-2 py-1 rounded-md"
                  >
                    -
                  </button>
                  <span className="mx-2">{product.quantity}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleQuantityChange(product.name, "increase");
                    }}
                    className="bg-gray-600 text-white px-2 py-1 rounded-md"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-6 flex justify-between">
        <p className="text-lg font-semibold">Total: ₹{getTotalPrice().toFixed(2)}</p>
        <button
          onClick={handleCheckout}
          className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}
