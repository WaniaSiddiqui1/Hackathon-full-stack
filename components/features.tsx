import React from 'react'
import Image from 'next/image'

function Features() {
  return (
    <>
       {/* Features Section */}
      <section className="p-8 mt-[60px]">
        <h3 className=" text-[24px] leading-[33.6px] text-xl font-bold mb-[50px] text-center">What makes our brand different</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              title: 'Next day as standard',
              desc: 'Order before 3pm and get your order the next day as standard.',
              src:'/delivery (1).png',
            },
            {
              title: 'Made by true artisans',
              desc: 'Handmade crafted goods made with real passion and craftsmanship.',
              src:'/check (1).png',
            },
            {
              title: 'Unbeatable prices',
              desc: 'For our materials and quality you won $apos t find better prices anywhere.',
              src:'/purchase (1).png',
            },
            {
              title: 'Recycled packaging',
              desc: 'We use 100% recycled packaging to ensure our footprint is manageable.',
              src:'/Spot.png',
            },


          ].map((feature) => (
            <div key={feature.title} className="text-center">
             <Image src={feature.src} alt={feature.title} width={24} height={24}/>
              <h4 className="font-bold text-lg mb-2 ">{feature.title}</h4>
              <p className="text-gray-600">{feature.desc}</p>
            </div>


          ))}
        </div>
      </section>
    </>
  )
}

export default Features
 