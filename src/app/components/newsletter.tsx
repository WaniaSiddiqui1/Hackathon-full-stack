import React from 'react'

function Newsletter() {
  return (
    <>
       {/* Newsletter Section */}
       <section className="p-8 bg-[#F9F9F9] h-[481px] flex text-center justify-center mt-[48px]">
        <div className='mt-[52px] bg-white'>
        <h3 className="text-[36px] leading-[50.4px] font-bold mb-4">Join the club and get the benefits</h3>
        <p className="text-gray-600 mb-6">
          Sign up for our newsletter and receive exclusive offers on new ranges,<br/>
           sales, pop-up
          stores, and more.
        </p>
        <form className="flex justify-center space-x-4 mt-[72px]">
          <input
            type="email"
            placeholder="your@email.com"
            className="border px-4 py-2 rounded-lg w-full md:w-1/3 "
          />
          <button className="bg-[#2A254B] text-white px-6 py-2 rounded hover:bg-gray-800">
            Sign up
          </button>
        </form>
        </div>
      </section>
    </>
  )
}

export default Newsletter