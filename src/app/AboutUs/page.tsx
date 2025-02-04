// 'use client'
// import Link from 'next/link';

// function AboutUsPage() {
//     return (
//         <div className="bg-[#0D4B8B] rounded  px-6">
//             {/* Header Section */}
//             <header className="text-center mb-12">
//                 <h1 className="text-4xl md:text-5xl font-semibold text-white mb-4">About Us</h1> {/* Dark Blue */}
//                 <p className="text-lg md:text-xl text-white">At Avion Furniture, we design and create timeless furniture that elevates your living space.</p>
//             </header>

//             {/* About Us Section */}
//             <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
//                 <div className="flex flex-col justify-center">
//                     <h2 className="text-3xl text-white font-semibold mb-6">Our Story</h2> {/* Medium Blue */}
//                     <p className="text-gray-100 text-lg mb-4">
//                         Avion Furniture was founded with a simple mission: to bring luxury and comfort into your home. We believe that furniture should be more than just functional—it should be beautiful and tell a story. Our team of designers works tirelessly to create pieces that blend form, function, and style.
//                     </p>
//                     <p className="text-gray-100 text-lg mb-4">
//                         Over the years, we've grown into a trusted brand that combines craftsmanship with modern design. From living rooms to bedrooms, our pieces are designed to suit every style and space.
//                     </p>
//                     <Link href="/contact" className="text-[#1A5E91] font-semibold hover:text-[#0D4B8B] transition-all duration-300">
//                         Get in Touch
//                     </Link>
//                 </div>

//                 {/* Image Section */}
//                 <div className="flex justify-center items-center">
//                     <img
//                         src="/pexels-pixabay-276528.jpg"
//                         alt="Avion Furniture"
//                         className="w-full md:w-9/12 rounded-lg shadow-lg object-cover"
//                     />
//                 </div>
//             </section>

//             {/* Our Values Section */}
//             <section className="bg-[#1D3D6C] text-white py-12 mt-16 px-6 rounded-lg">
//                 <div className="max-w-7xl mx-auto text-center">
//                     <h2 className="text-3xl font-semibold mb-6">Our Values</h2>
//                     <p className="text-lg md:text-xl mb-4">We are committed to sustainability, quality, and design excellence in every piece we create.</p>
//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//                         <div className="bg-[#3A7FD5] p-6 rounded-lg shadow-lg">
//                             <h3 className="text-2xl font-semibold mb-3">Sustainability</h3>
//                             <p className="text-lg">We prioritize eco-friendly materials and practices to ensure a greener future for all.</p>
//                         </div>
//                         <div className="bg-[#3A7FD5] p-6 rounded-lg shadow-lg">
//                             <h3 className="text-2xl font-semibold mb-3">Quality Craftsmanship</h3>
//                             <p className="text-lg">Each piece is crafted with care, ensuring durability and timeless beauty.</p>
//                         </div>
//                         <div className="bg-[#3A7FD5] p-6 rounded-lg shadow-lg">
//                             <h3 className="text-2xl font-semibold mb-3">Design Innovation</h3>
//                             <p className="text-lg">We embrace modern design trends while staying true to our core values of functionality and elegance.</p>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Call-to-Action Section */}
//             <div className="bg-[#0D4B8B] text-white text-center py-12 mt-16">
//                 <h2 className="text-3xl font-semibold mb-4">Join the Avion Furniture Family</h2>
//                 <p className="text-lg mb-6">Subscribe to our newsletter and stay updated on new collections, trends, and exclusive offers.</p>
//                 <Link href="/subscribe">
//                     <button className="bg-[#1A5E91] hover:bg-[#0D4B8B] text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300">
//                         Subscribe Now
//                     </button>
//                 </Link>
//             </div>
//         </div>
//     );
// }

// export default AboutUsPage;
'use client';
import Link from 'next/link';
import Image from 'next/image';

function AboutUsPage() {
  return (
    <div className="bg-[#0D4B8B] rounded px-6">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-semibold text-white mb-4">About Us</h1>
        <p className="text-lg md:text-xl text-white">
          At Avion Furniture, we design and create timeless furniture that elevates your living space.
        </p>
      </header>

      {/* About Us Section */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl text-white font-semibold mb-6">Our Story</h2>
          <p className="text-gray-100 text-lg mb-4">
            Avion Furniture was founded with a simple mission: to bring luxury and comfort into your home. We believe that furniture should be more than just functional—it should be beautiful and tell a story. Our team of designers works tirelessly to create pieces that blend form, function, and style.
          </p>
          <p className="text-gray-100 text-lg mb-4">
            Over the years, we&apos;ve grown into a trusted brand that combines craftsmanship with modern design. From living rooms to bedrooms, our pieces are designed to suit every style and space.
          </p>
          <Link
            href="/contact"
            className="text-[#1A5E91] font-semibold hover:text-[#0D4B8B] transition-all duration-300"
          >
            Get in Touch
          </Link>
        </div>

        {/* Image Section */}
        <div className="flex justify-center items-center">
          <Image
            src="/pexels-pixabay-276528.jpg"
            alt="Avion Furniture"
            width={600}
            height={400}
            className="w-full md:w-9/12 rounded-lg shadow-lg object-cover"
          />
        </div>
      </section>

      {/* Our Values Section */}
      <section className="bg-[#1D3D6C] text-white py-12 mt-16 px-6 rounded-lg">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Our Values</h2>
          <p className="text-lg md:text-xl mb-4">
            We are committed to sustainability, quality, and design excellence in every piece we create.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#3A7FD5] p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-3">Sustainability</h3>
              <p className="text-lg">
                We prioritize eco-friendly materials and practices to ensure a greener future for all.
              </p>
            </div>
            <div className="bg-[#3A7FD5] p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-3">Quality Craftsmanship</h3>
              <p className="text-lg">
                Each piece is crafted with care, ensuring durability and timeless beauty.
              </p>
            </div>
            <div className="bg-[#3A7FD5] p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-3">Design Innovation</h3>
              <p className="text-lg">
                We embrace modern design trends while staying true to our core values of functionality and elegance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <div className="bg-[#0D4B8B] text-white text-center py-12 mt-16">
        <h2 className="text-3xl font-semibold mb-4">Join the Avion Furniture Family</h2>
        <p className="text-lg mb-6">
          Subscribe to our newsletter and stay updated on new collections, trends, and exclusive offers.
        </p>
        <Link href="/subscribe">
          <button className="bg-[#1A5E91] hover:bg-[#0D4B8B] text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300">
            Subscribe Now
          </button>
        </Link>
      </div>
    </div>
  );
}

export default AboutUsPage;
