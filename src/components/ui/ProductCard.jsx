import React from "react";

const ProductCard = ({ image, title, brand, rating, reviews, price, status }) => {
  return (
    <div className="max-w-sm bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow duration-300 font-sans border border-gray-100">
      {/* Product Image */}
      <div className="w-full h-64 overflow-hidden rounded-xl mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Product Title & Star Rating */}
      <div className="flex justify-between items-start mb-1">
        <div>
          <h3 className="text-lg font-poppins font-medium text-heading leading-tight">{title}</h3>
          <p className="text-[12px] text-paragraph font-medium mt-0.5">{brand}</p>
        </div>
        
        {/* Star Rating using SVG */}
        <div className="flex text-amber-400 space-x-0.5 mt-1">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className="w-4 h-4 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          ))}
        </div>
      </div>

      {/* Customer Reviews */}
      <p className="text-xs text-gray-500 font-medium my-3">
        ({reviews}) Customer Reviews
      </p>

      {/* Price & Stock Status */}
      <div className="flex justify-between items-center mt-4">
        <span className="text-xl font-bold text-[#484848]">
          ${price !== undefined ? Number(price).toFixed(2) : '0.00'}
        </span>
        <span className="text-xs font-semibold text-red-400 tracking-tight">
          {status}
        </span>
      </div>
    </div>
  );
};

export default ProductCard; // (Apnar kache export default ProductCard thakbe)