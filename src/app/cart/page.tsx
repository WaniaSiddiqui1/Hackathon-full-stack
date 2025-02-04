"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface IProductWithQuantity {
  name: string;
  image?: string; // Optional image to prevent errors
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

  const handleDeleteProduct = (productName: string) => {
    setCartItems((prevCartItems) => {
      const updatedCart = prevCartItems.filter((item) => item.name !== productName);

      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(updatedCart));
      }

      return updatedCart;
    });

    setNotification("Product removed from cart!");
    setTimeout(() => setNotification(null), 3000);
  };

  const handleCheckout = () => {
    router.push("/checkout"); // Redirect to checkout page
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="container mx-auto px-6 py-10 bg-gray-50 rounded-lg shadow-xl">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Your Cart</h1>

      {notification && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-full shadow-xl text-lg">
          {notification}
        </div>
      )}

      {cartItems.length === 0 ? (
        <p className="text-center text-lg text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {cartItems.map((product, index) => (
            <div
              key={`${product.name}-${index}`} // Ensure unique key
              className="flex items-center justify-between p-6 bg-white border rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="flex items-center">
                <Image
                  src={product.image || "/placeholder-image.png"} // Default image if image is missing
                  alt={product.name || "Product image"}
                  width={120}
                  height={120}
                  className="rounded-md object-cover"
                />
                <div className="ml-6 flex-1">
                  <h3 className="text-xl font-semibold text-gray-700">{product.name}</h3>
                  <p className="text-sm text-gray-500">{product.description}</p>
                  <p className="text-lg font-semibold text-blue-600 mt-2">₨{product.price}</p>
                  <div className="flex items-center mt-4 space-x-4">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleQuantityChange(product.name, "decrease");
                      }}
                      className="bg-gray-600 text-white p-2 rounded-md transition duration-300 hover:bg-gray-700"
                    >
                      -
                    </button>
                    <span className="text-lg font-semibold">{product.quantity}</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleQuantityChange(product.name, "increase");
                      }}
                      className="bg-gray-600 text-white p-2 rounded-md transition duration-300 hover:bg-gray-700"
                    >
                      +
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteProduct(product.name);
                      }}
                      className="text-red-600 hover:text-red-800 text-xl transition duration-300"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-8 flex justify-between items-center bg-white p-6 rounded-lg shadow-lg">
        <p className="text-xl font-semibold text-gray-700">Total: ₨{getTotalPrice().toFixed(2)}</p>
        <button
          onClick={handleCheckout}
          className="bg-green-600 text-white py-3 px-8 rounded-lg hover:bg-green-700 transition duration-300"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}
