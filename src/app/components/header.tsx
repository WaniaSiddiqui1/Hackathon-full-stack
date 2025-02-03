
'use client'
import { Search, User } from 'lucide-react';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';  // Import Clerk's sign-in/sign-out components

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* Hamburger Icon for Mobile */}
            <button className="md:hidden text-white" onClick={toggleMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>

            {/* Mobile Menu */}
            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-gradient-to-br from-blue-900 to-blue-600 p-6 rounded-lg shadow-xl`}>
                <Link href="/productlisting" className="block text-white py-3 text-lg hover:text-blue-200 transition-all duration-300">Products</Link>
                <Link href="/Blog" className="block text-white py-3 text-lg hover:text-blue-200 transition-all duration-300">Blogs</Link>
                <Link href="/AboutUs" className="block text-white py-3 text-lg hover:text-blue-200 transition-all duration-300">About Us</Link>
                <Link href="/Review" className="block text-white py-3 text-lg hover:text-blue-200 transition-all duration-300">Reviews</Link>
            </div>

            <nav className="w-full max-w-[1440px] h-[132px] mx-auto px-6 py-4 bg-gradient-to-br from-blue-900 to-blue-600 shadow-lg rounded-lg">
                <div className="relative w-full h-full flex justify-between items-center">
                    {/* Left Section (Search Icon) */}
                    <div className="flex items-center gap-6">
                        <Search className="w-6 h-6 text-white hover:text-blue-200 transition-all duration-300" />
                    </div>

                    {/* Logo */}
                    <h1 className="text-3xl font-semibold text-white tracking-wide">
                        Avion
                    </h1>

                    {/* Right Section (Cart and User Icons) */}
                    <div className="flex items-center gap-6">
                        {/* Cart Icon */}
                        <Link href="/cart">
                            <ShoppingCart className="w-7 h-7 text-white hover:text-blue-200 transition-all duration-300 cursor-pointer" />
                        </Link>

                     {/* User Icon - SignIn/SignOut */}
<SignedOut>
  <SignInButton mode="modal">
    <div className="w-7 h-7 text-white hover:text-blue-200 transition-all duration-300 cursor-pointer">
      <User />
    </div>
  </SignInButton>
</SignedOut>
<SignedIn>
  <div className="w-7 h-7 text-white hover:text-blue-200 transition-all duration-300 cursor-pointer">
    <UserButton />
  </div>
</SignedIn>

                    </div>
                </div>

                {/* Divider for Desktop */}
                <div className="hidden md:block absolute left-[1.94%] right-[1.81%] top-[70px] border-t border-gray-300 opacity-25" />

                {/* Navigation Links */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-[90px] gap-14">
                    {[{
                        name: "Products", link: "/"
                    }, {
                        name: "Blogs", link: "/Blog"
                    }, {
                        name: "About Us", link: "/AboutUs"
                    }, {
                        name: "Reviews", link: "/Review"
                    }].map((item) => (
                        <Link
                            key={item.name}
                            href={item.link}
                            className="text-lg text-white hover:text-blue-200 transition-all duration-300 hover:underline"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </nav>
        </>
    );
}

export default Header;
