import React from 'react'
import ProductImg from '../assets/product-image.png'
import qualityIcon from'../assets/quality.svg'
import warrantyIcon from'../assets/warranty.svg'
import shippingIcon from'../assets/shipping.svg'
import supportIcon from'../assets/support.svg'

const ProductDetail = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col md:flex-row `max-w-330` mx-auto mt-6">

        
        <div className="relative md:w-[41%] flex items-center justify-center p-6">
          <img src={ProductImg} alt="Product" className="w-full object-contain" />

          
        </div>

        
        <div className="relative p-10 pl-25 md:flex-1 `min-h-125`">
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="absolute inset-0 w-full h-full"
          >
            <polygon points="21,0 100,0 100,100 0,100" fill="#e5e5e5" />
            <line x1="21" y1="0" x2="0" y2="100" stroke="#333" strokeWidth="1" vectorEffect="non-scaling-stroke" />
          </svg>

          <div className="relative p-10 flex flex-col gap-4">
            <p className="text-gray-500 text-xs">Women Collection</p>
            <h1 className="text-4xl font-serif text-gray-800">Peaky Blinders</h1>
            <h3 className="text-xs underline">DESCRIPTION</h3>
            <p className="text-gray-500 text-xs">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin.
            </p>

            <div className="flex items-center gap-4">
              <p className="text-gray-500 text-xs">Size:</p>
              <button className="bg-gray-900 text-white text-xs px-3 py-1 rounded-md">M</button>
            </div>

            <p className="text-xl text-gray-700">$100.00</p>
            <button className="bg-gray-900 text-white py-3 rounded-md w-56">Buy Now</button>
          </div>
        </div>

      </div>

    
      <div className='container'>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 `max-w-7xl` mx-auto px-6 py-12 text-sm">
          <div className="flex items-center gap-3">
            <img src={qualityIcon} alt="" className="w-8 h-8 shrink-0" />
            <div>
              <p className="font-medium">High Quality</p>
              <p className="text-gray-400 text-xs">crafted from top materials</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <img src={warrantyIcon} alt="" className="w-8 h-8 shrink-0" />
            <div>
              <p className="font-medium">Warranty Protection</p>
              <p className="text-gray-400 text-xs">Over 2 years</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <img src={shippingIcon} alt="" className="w-8 h-8 shrink-0" />
            <div>
              <p className="font-medium">Free Shipping</p>
              <p className="text-gray-400 text-xs">Order over 150 $</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <img src={supportIcon} alt="" className="w-8 h-8 shrink-0" />
            <div>
              <p className="font-medium">24 / 7 Support</p>
              <p className="text-gray-400 text-xs">Dedicated support</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default ProductDetail