
import { Facebook, Instagram, Linkedin, Twitter, PinIcon as Pinterest, WebcamIcon as Skype } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="w-full bg-[#2A254B] text-white py-14">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Menu Section */}
          <div className="space-y-4">
            <h3 className="font-clash-display text-base">Menu</h3>
            <ul className="space-y-3">
              <li className="text-sm">New arrivals</li>
              <li className="text-sm">Best sellers</li>
              <li className="text-sm">Recently viewed</li>
              <li className="text-sm">Popular this week</li>
              <li className="text-sm">All products</li>
            </ul>
          </div>

          {/* Categories Section */}
          <div className="space-y-4">
            <h3 className="font-clash-display text-base">Categories</h3>
            <ul className="space-y-3">
              <li className="text-sm">Crockery</li>
              <li className="text-sm">Furniture</li>
              <li className="text-sm">Homeware</li>
              <li className="text-sm">Plant pots</li>
              <li className="text-sm">Chairs</li>
              <li className="text-sm">Crockery</li>
            </ul>
          </div>

          {/* Our Company Section */}
          <div className="space-y-4">
            <h3 className="font-clash-display text-base">Our company</h3>
            <ul className="space-y-3">
              <li className="text-sm">About us</li>
              <li className="text-sm">Vacancies</li>
              <li className="text-sm">Contact us</li>
              <li className="text-sm">Privacy</li>
              <li className="text-sm">Returns policy</li>
            </ul>
          </div>

          {/* Join Mailing List Section */}
          <div className="space-y-4">
            <h3 className="font-clash-display text-base">Join our mailing list</h3>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input 
                type="email" 
                placeholder="your@email.com" 
                className="bg-white/15 border-0 text-white placeholder:text-white h-14"
              />
              <Button 
                className="bg-white text-[#2A254B] hover:bg-white/90 h-14 px-8"
              >
                Sign up
              </Button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 pt-8 border-t border-[#4E4D93] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm">Copyright 2022 Avion LTD</p>
          <div className="flex gap-6">
            <Linkedin className="w-6 h-6" />
            <Facebook className="w-6 h-6" />
            <Instagram className="w-6 h-6" />
            <Skype className="w-6 h-6" />
            <Twitter className="w-6 h-6" />
            <Pinterest className="w-6 h-6" />
          </div>
        </div>
      </div>
    </footer>
  )
}
