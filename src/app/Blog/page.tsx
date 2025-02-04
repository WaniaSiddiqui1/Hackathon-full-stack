// 'use client';
// import Link from 'next/link';

// function BlogPage() {
//   return (
//     <div className="bg-[#0D4B8B] rounded py-12">
//       {/* Header Section */}
//       <header className="text-center mb-12 px-4">
//         <h1 className="text-4xl md:text-5xl font-semibold text-white mb-4">
//           Avion Furniture Blog
//         </h1>
//         <p className="text-lg md:text-xl text-gray-200">
//           Discover the latest trends, tips, and inspirations in the world of furniture and home decor.
//         </p>
//       </header>

//       {/* Blog Posts Section */}
//       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
//         {/* Blog Post 1 */}
//         <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//           <img
//             src="/pexels-pixabay-276528.jpg"
//             alt="Furniture Inspiration"
//             className="w-full h-64 object-cover"
//           />
//           <div className="p-6">
//             <h2 className="text-2xl font-semibold text-gray-800 mb-3">
//               The Best Furniture Trends of 2025
//             </h2>
//             <p className="text-gray-600 mb-4">
//               Explore the latest trends in furniture design that will dominate the industry this year. From minimalist styles to sustainable materials, we&apos;ve got you covered.
//             </p>
//           </div>
//         </div>

//         {/* Blog Post 2 */}
//         <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//           <img
//             src="/pexels-fotoaibe-1571458.jpg"
//             alt="Home Styling Tips"
//             className="w-full h-64 object-cover"
//           />
//           <div className="p-6">
//             <h2 className="text-2xl font-semibold text-gray-800 mb-3">
//               Home Styling Tips with Avion Furniture
//             </h2>
//             <p className="text-gray-600 mb-4">
//               Transform your living space with our expert home styling tips using Avion furniture. From accent pieces to complete makeovers, make your home shine.
//             </p>
//           </div>
//         </div>

//         {/* Blog Post 3 */}
//         <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//           <img
//             src="/pexels-ron-lach-8705762.jpg"
//             alt="Sustainable Furniture"
//             className="w-full h-64 object-cover"
//           />
//           <div className="p-6">
//             <h2 className="text-2xl font-semibold text-gray-800 mb-3">
//               Why Sustainable Furniture is the Future
//             </h2>
//             <p className="text-gray-600 mb-4">
//               Learn about the growing demand for sustainable furniture and why it&apos;s important for both the environment and your home. Discover eco-friendly options with Avion.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Call-to-Action Section */}
//       <div className="bg-blue-900 text-white text-center py-12 mt-12 px-4">
//         <h2 className="text-3xl font-semibold mb-4">Stay Updated with Our Latest Posts</h2>
//         <p className="text-lg md:text-xl mb-6">
//           Subscribe to our newsletter for the latest blog updates, trends, and special offers from Avion Furniture.
//         </p>
//         <Link href="/subscribe">
//           <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300">
//             Subscribe Now
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default BlogPage;
"use client";
import Link from "next/link";
import Image from "next/image";

function BlogPage() {
  return (
    <div className="bg-[#0D4B8B] rounded py-12">
      {/* Header Section */}
      <header className="text-center mb-12 px-4">
        <h1 className="text-4xl md:text-5xl font-semibold text-white mb-4">
          Avion Furniture Blog
        </h1>
        <p className="text-lg md:text-xl text-gray-200">
          Discover the latest trends, tips, and inspirations in the world of furniture and home decor.
        </p>
      </header>

      {/* Blog Posts Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {/* Blog Post 1 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative w-full h-64">
            <Image
              src="/pexels-pixabay-276528.jpg"
              alt="Furniture Inspiration"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              The Best Furniture Trends of 2025
            </h2>
            <p className="text-gray-600 mb-4">
              Explore the latest trends in furniture design that will dominate the industry this year.
            </p>
          </div>
        </div>

        {/* Blog Post 2 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative w-full h-64">
            <Image
              src="/pexels-fotoaibe-1571458.jpg"
              alt="Home Styling Tips"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              Home Styling Tips with Avion Furniture
            </h2>
            <p className="text-gray-600 mb-4">
              Transform your living space with our expert home styling tips using Avion furniture.
            </p>
          </div>
        </div>

        {/* Blog Post 3 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative w-full h-64">
            <Image
              src="/pexels-ron-lach-8705762.jpg"
              alt="Sustainable Furniture"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              Why Sustainable Furniture is the Future
            </h2>
            <p className="text-gray-600 mb-4">
              Learn about the growing demand for sustainable furniture and why it&apos;s important.
            </p>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="bg-blue-900 text-white text-center py-12 mt-12 px-4">
        <h2 className="text-3xl font-semibold mb-4">Stay Updated with Our Latest Posts</h2>
        <p className="text-lg md:text-xl mb-6">
          Subscribe to our newsletter for the latest blog updates, trends, and special offers.
        </p>
        <Link href="/subscribe">
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300">
            Subscribe Now
          </button>
        </Link>
      </div>
    </div>
  );
}

export default BlogPage;
