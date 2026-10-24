const Banner = () => {
  return (
    <div>
  <div className="container">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8.75 items-stretch">

      {/* Left card */}
      <div className="relative bg-[#E0E0E0] rounded-lg overflow-hidden group min-h-[420px] md:min-h-0">
        <img
          src="./src/assets/hero-img-1.png"
          alt="Hero Image 1"
          className="absolute inset-0 w-full h-full object-contain object-bottom origin-bottom select-none pointer-events-none transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Middle column: ei column-ta-i puro height dicche */}
      <div className="flex flex-col items-center justify-between gap-6 text-center">
        <img
          src="./src/assets/hero-img-2.png"
          alt="Hero Image 2"
          className="w-full rounded-lg"
        />

        <div className="flex flex-col items-center">
          <h2 className="font-poppins font-medium text-[56px] md:text-[91px] tracking-[-0.04em] leading-none text-heading">
            ULTIMATE
          </h2>
          <h3 className="font-poppins font-medium text-[110px] md:text-[187px] tracking-[-0.02em] leading-none text-transparent [-webkit-text-stroke:1px_#484848] uppercase">
            SALE
          </h3>
          <p className="font-poppins font-normal text-[14px] md:text-[20px] tracking-widest text-heading uppercase pb-4.75">
            New Collection
          </p>
          <button className="common_button_black py-3.5 px-10 text-sm uppercase rounded-lg">
            Shop Now
          </button>
        </div>

        <img
          src="./src/assets/hero-img-3.png"
          alt="Hero Image 3"
          className="w-full rounded-lg"
        />
      </div>

      {/* Right card */}
      <div className="relative bg-[#E0E0E0] rounded-lg overflow-hidden group min-h-105 md:min-h-0">
        <img
          src="./src/assets/hero-img-4.png"
          alt="Hero Image 4"
          className="absolute inset-0 w-full h-full object-contain object-bottom origin-bottom select-none pointer-events-none transition-transform duration-300 group-hover:scale-105"
        />
      </div>

    </div>
  </div>
</div>
  );
};

export default Banner;
