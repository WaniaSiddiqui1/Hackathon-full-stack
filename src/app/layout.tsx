// src/app/layout.tsx

// import Header from "@/components/header";
// import Footer from "@/components/footer";
// import { CartProvider } from "@/context/cartContext";
// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
//  import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
// import "./globals.css";

// // Load Fonts
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// // Metadata
// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// // Root Layout Component
// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <ClerkProvider>
//       <html lang="en">
//         <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900`}>
//           <CartProvider>
//             <Header />
// {/*             
//             {/* Authentication UI */}
//             <div className="container mx-auto p-4">
//             <SignedOut>
//   <div className="flex justify-center border font-semibold text-white px-1 py-1 bg-gradient-to-br from-blue-900 to-blue-600 shadow-lg rounded-lg hover:text-blue-200 transition-all duration-300">
//     <SignInButton mode="modal" />
//   </div>
// </SignedOut>

//               <SignedIn>
//                 <div className="flex justify-end p-4">
//                   <UserButton />
//                 </div>
//               </SignedIn>
//             </div> 

//             {/* Main Content */}
//             <main className="container mx-auto p-6">{children}</main>

//             <Footer />
//           </CartProvider>
//         </body>
//       </html>
//     </ClerkProvider>
//   );
// }
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import { CartProvider } from "@/app/context/cartContext";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";  
import "./globals.css";

// Load Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// Root Layout Component
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900`}>
          <CartProvider>
            <Header />
            <main className="container mx-auto p-6">{children}</main>
            <Footer />
          </CartProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
