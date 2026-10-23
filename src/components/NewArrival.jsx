import ProductCard from "./ui/ProductCard";

const products = [
  {
    id: 1,
    image: '/product(1).png',
    title: 'Shiny Dress',
    brand: 'Al Karam',
    rating: 5,
    reviews: '4.1k',
    price: 95.50,
    status: 'Almost Sold Out',
  },
  {
    id: 2,
    image: '/product(2).png',
    title: 'Long Dress',
    brand: 'Al Karam',
    rating: 5,
    reviews: '4.1k',
    price: 95.50,
    status: 'Almost Sold Out',
  },
  {
    id: 3,
    image: '/product(3).png',
    title: 'Full Sweater',
    brand: 'Al Karam',
    rating: 5,
    reviews: '4.1k',
    price: 95.50,
    status: 'Almost Sold Out',
  },
  {
    id: 4,
    image: '/product(4).png',
    title: 'White Dress',
    brand: 'Al Karam',
    rating: 5,
    reviews: '4.1k',
    price: 95.50,
    status: 'Almost Sold Out',
  },
  {
    id: 5,
    image: '/product(5).png',
    title: 'Colorful Dress',
    brand: 'Al Karam',
    rating: 5,
    reviews: '4.1k',
    price: 95.50,
    status: 'Almost Sold Out',
  },
  {
    id: 6,
    image: '/product(6).png',
    title: 'White Shirt',
    brand: 'Al Karam',
    rating: 5,
    reviews: '4.1k',
    price: 95.50,
    status: 'Almost Sold Out',
  },
];


const NewArrival = () => {
  return (
    <section className="py-37.5">
      <div className="container">
        <div className="heading">
          <h2 className="font-volkhov text-[46px] font-normal leading-[normal] tracking-normal text-center text-heading pb-5">
            New Arrivals
          </h2>
          <p className="font-poppins text-base font-normal leading-6.5 tracking-normal text-center text-paragraph w-153.5 mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
            sollicitudin{" "}
          </p>
        </div>
        <div className="btn py-12.5">
          <ul className="flex justify-center gap-7.5">
            <li>
              <a
                href="#"
                className="font-poppins text-[16px] text-paragraph bg-[#FAFAFA] py-5 px-12 rounded-[10px] hover:bg-black hover:text-white transition duration-300"
              >
                Men’s Fashion
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" active font-poppins text-[16px] text-paragraph bg-[#FAFAFA] py-5 px-12 rounded-[10px] hover:bg-black hover:text-white transition duration-300"
              >
                Women’s Fashion
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-poppins text-[16px] text-paragraph bg-[#FAFAFA] py-5 px-12 rounded-[10px] hover:bg-black hover:text-white transition duration-300"
              >
                Women Accessories
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-poppins text-[16px] text-paragraph bg-[#FAFAFA] py-5 px-12 rounded-[10px] hover:bg-black hover:text-white transition duration-300"
              >
                Men Accessories
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-poppins text-[16px] text-paragraph bg-[#FAFAFA] py-5 px-12 rounded-[10px] hover:bg-black hover:text-white transition duration-300"
              >
                Discount Deals
              </a>
            </li>
          </ul>
        </div>
        <div className=" min-h-screen p-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                title={product.title}
                brand={product.brand}
                rating={product.rating}
                reviews={product.reviews}
                price={product.price}
                status={product.status}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-center">
            <a href="#" className=" font-poppins text-[16px] py-5 px-15.5 bg-black text-white rounded-[10px]">View More</a>
        </div>
      </div>
    </section>
  );
};

export default NewArrival;
