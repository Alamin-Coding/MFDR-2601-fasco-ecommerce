import Arrow from "../assets/Vector.png";
import Down from "../assets/arrow-down.png";
import One from "../assets/c-1.png";
import Two from "../assets/c-2.png";
import Three from "../assets/c-3.png";
import Four from "../assets/c4.png";
import Five from "../assets/c5.png";
import Six from "../assets/c6.png";
import Seven from "../assets/c7.png";
import Eight from "../assets/c8.png";
import Nine from "../assets/c9.png";
import Ten from "../assets/c10.png";
import Eleven from "../assets/c11.png";
import Twelve from "../assets/c12.png";
import Thirteen from "../assets/c13.png";
import Forteen from "../assets/c14.png";
import Up from "../assets/arrow-up.png";
import { useState } from "react";
import { useNavigate } from "react-router";

const Fashion = ({ products }) => {
  const asideInfo = {
    size: [],
    colors: [],
    prices: [],
    brands: [],
    collections: [],
    tags: [],
  };

  const brands = products
    ?.map((item) => {
      if (item) {
        return item.brand;
      }
    })
    .filter((item) => item !== undefined);
  const category = products
    ?.map((item) => {
      if (item) {
        return item.category;
      }
    })
    .filter((item) => item !== undefined);
  const tags = products
    ?.map((item) => {
      if (item) {
        return item.tags;
      }
    })
    .filter((item) => item !== undefined)
    .flat();

  asideInfo.brands = Array.from(new Set(brands));
  asideInfo.collections = Array.from(new Set(category));
  asideInfo.tags = Array.from(new Set(tags));

  console.log(asideInfo.tags);

  const [showProductLayout, setShowProductLayout] = useState(3);
  const navigate = useNavigate();

  return (
    <section className="bg-[#FFFFFF] max-w-[1277px] mx-auto">
      <h1 className="font-normal text-black text-center text-[42px] font-volkhov pt-[77px]">
        Fashion
      </h1>
      <div className="flex items-center max-w-[130px] justify-between mx-auto pt-5 pb-25">
        <h4 className="font-normal text-black text-[15px] font-jost">Home</h4>
        <img src={Arrow} alt="arrow" className="max-h-[9px] max-w-[9px]" />
        <h4 className="font-normal text-black text-[15px] font-jost">
          Fashion
        </h4>
      </div>
      <div className="pb-10 flex justify-between">
        <div className="flex gap-[218px] items-center pl-3">
          <h3 className="font-normal text-black font-volkhov text-[30px]">
            Filters
          </h3>
          <div className="flex gap-1 items-center">
            <h5 className="font-normal text-[16px] font-volkhov text-black">
              Best selling
            </h5>
            <img src={Up} alt="up" className="max-h-[8px] max-w-[8px]" />
          </div>
        </div>

        <div className="flex gap-3 pr-28">
          <button
            className={`cursor-pointer bg-[#F2F2F2]  size-[34px] flex flex-col space-y-0.5 items-center justify-center`}
            onClick={() => setShowProductLayout(1)}
          >
            <span className="h-0.5 w-3 bg-black"></span>
            <span className="h-0.5 w-3 bg-black"></span>
            <span className="h-0.5 w-3 bg-black"></span>
          </button>
          <button
            className={`cursor-pointer bg-[#F2F2F2] size-[34px] flex items-center justify-center space-x-0.5`}
            onClick={() => setShowProductLayout(2)}
          >
            <span className="h-5 w-1 bg-black"></span>
            <span className="h-5 w-1 bg-black"></span>
          </button>
          <button
            className={`cursor-pointer bg-[#F2F2F2] text-black size-[34px] flex items-center justify-center space-x-0.5`}
            onClick={() => setShowProductLayout(3)}
          >
            <span className="h-5 w-0.75 bg-black"></span>
            <span className="h-5 w-0.75 bg-black"></span>
            <span className="h-5 w-0.75 bg-black"></span>
          </button>
          <button
            className={`cursor-pointer bg-[#F2F2F2] text-black size-[34px] flex items-center justify-center space-x-0.5`}
            onClick={() => setShowProductLayout(4)}
          >
            <span className="h-5 w-0.5 bg-black"></span>
            <span className="h-5 w-0.5 bg-black"></span>
            <span className="h-5 w-0.5 bg-black"></span>
            <span className="h-5 w-0.5 bg-black"></span>
          </button>
          <button
            className={`cursor-pointer bg-[#F2F2F2] text-black size-[34px] flex items-center justify-center space-x-0.5`}
            onClick={() => setShowProductLayout(5)}
          >
            <span className="h-5 w-0.5 bg-black"></span>
            <span className="h-5 w-0.5 bg-black"></span>
            <span className="h-5 w-0.5 bg-black"></span>
            <span className="h-5 w-0.5 bg-black"></span>
            <span className="h-5 w-0.5 bg-black"></span>
          </button>
        </div>
      </div>
      <div className="flex gap-13">
        <div className="flex flex-col gap-[33px] max-w-[322px] px-3">
          <div>
            <h5 className="font-normal text-black font-volkhov text-[18px]">
              Size
            </h5>
            <div className="flex gap-3 pt-4">
              <div className=" border-paragraph border-2 max-w-[42px] max-h-[42px] rounded-[5px]">
                <h5 className="font-normal font-poppins text-paragraph text-[18px] pt-2 pb-[15px] px-[15px]">
                  S
                </h5>
              </div>
              <div className=" border-paragraph border-2 max-w-[42px] max-h-[42px] rounded-[5px]">
                <h5 className="font-normal font-poppins text-paragraph text-[18px] pt-2 pb-[10px] px-[10px]">
                  M
                </h5>
              </div>
              <div className=" border-paragraph border-2 max-w-[42px] max-h-[42px] rounded-[5px]">
                <h5 className="font-normal font-poppins text-paragraph text-[18px] pt-2 pb-[15px] px-[15px]">
                  L
                </h5>
              </div>
            </div>
            <div className="pt-3">
              <div className=" border-paragraph border-2 max-w-[42px] max-h-[42px] rounded-[5px]">
                <h5 className="font-normal font-poppins text-paragraph text-[18px] pt-2 pb-[10px] px-[10px]">
                  XL
                </h5>
              </div>
            </div>
          </div>
          <div className="pt-7">
            <h5 className="font-normal text-black font-volkhov text-[18px]">
              Colors
            </h5>
            <div className="grid grid-cols-7 gap-[5px] pt-5">
              <img src={One} alt="color" />
              <img src={Two} alt="color" />
              <img src={Three} alt="color" />
              <img src={Four} alt="color" />
              <img src={Five} alt="color" />
              <img src={Six} alt="color" />
              <img src={Seven} alt="color" />
              <img src={Eight} alt="color" />
              <img src={Nine} alt="color" />
              <img src={Ten} alt="color" />
              <img src={Eleven} alt="color" />
              <img src={Twelve} alt="color" />
              <img src={Thirteen} alt="color" />
              <img src={Forteen} alt="color" />
            </div>
          </div>
          <div>
            <div>
              <h5 className="font-normal text-black font-volkhov text-[18px] ">
                Prices
              </h5>
            </div>
            <p className="font-normal font-poppins text-paragraph text-[16px] pt-[20px]">
              $0-$50
            </p>
            <p className="font-normal font-poppins text-paragraph text-[16px] pt-[10px]">
              $50-$100
            </p>
            <p className="font-normal font-poppins text-paragraph text-[16px] pt-[10px]">
              $100-$150
            </p>
            <p className="font-normal font-poppins text-paragraph text-[16px] pt-[10px]">
              $150-$200
            </p>
            <p className="font-normal font-poppins text-paragraph text-[16px] pt-[10px]">
              $300-$400
            </p>
          </div>

          <div>
            <div className="flex gap-[196px] items-center">
              <div>
                <h5 className="font-normal text-black font-volkhov text-[18px] ">
                  Brands
                </h5>
              </div>
              <img src={Down} alt="arrow" className="max-h-[9px] max-w-[9px]" />
            </div>
            <div className="flex flex-wrap gap-[8.5px] pt-5">
              {asideInfo.brands?.map((item) => (
                <button
                  key={item}
                  className="font-normal font-poppins text-paragraph text-[16px]"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="flex gap-[160px] items-center">
              <div>
                <h5 className="font-normal text-black font-volkhov text-[18px] ">
                  Collections
                </h5>
              </div>
              <img src={Down} alt="arrow" className="max-h-[9px] max-w-[9px]" />
            </div>
            <p className="font-normal font-poppins text-paragraph text-[16px] pt-[20px]">
              All products
            </p>
            <div>
              {asideInfo.collections.map((item) => (
                <p
                  key={item}
                  className="font-normal font-poppins text-paragraph text-[16px] pt-[10px] cursor-pointer capitalize"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div>
            <div>
              <h5 className="font-normal text-black font-volkhov text-[18px] ">
                Tags
              </h5>
            </div>
            <div className="flex flex-wrap gap-[8.5px] pt-5">
              {asideInfo.tags.map((tag) => (
                <p
                  key={tag}
                  className="font-normal font-poppins text-paragraph text-[16px] capitalize"
                >
                  {tag}
                </p>
              ))}
            </div>
            <div className="flex gap-[8.5px] pt-[10px]">
              <p className="font-normal font-poppins text-paragraph text-[16px]">
                Learts
              </p>
              <p className="font-normal font-poppins text-paragraph text-[16px]">
                Vagabond
              </p>
              <p className="font-normal font-poppins text-paragraph text-[16px]">
                Abby
              </p>
            </div>
            <div className="flex gap-[8.5px] pt-[10px]">
              <p className="font-normal font-poppins text-paragraph text-[16px]">
                Sunglasses
              </p>
              <p className="font-normal font-poppins text-paragraph text-[16px]">
                Beachwear
              </p>
            </div>
          </div>
        </div>

        {showProductLayout == 1 && (
          <div className="grid grid-cols-1 gap-y-4 gap-x-5 w-full">
            {products?.map((item) => {
              return (
                <div className="flex items-center border border-slate-10 p-5 w-full">
                  <div className="bg-slate-100 flex items-center justify-center">
                    <img src={item.thumbnail} alt="img" />
                  </div>
                  <div className="px-6">
                    <h5 className="font-normal text-[16px] font-volkhov text-black pt-5 pb-1">
                      Rounded Red Hat
                    </h5>
                    <p>{item.description}</p>
                    <h5 className="font-normal text-[16px] font-jost text-black">
                      $8.00
                    </h5>
                    <div className="flex gap-1 pt-4">
                      <span className="size-6 rounded-full bg-red-500"></span>
                      <span className="size-6 rounded-full bg-blue-500"></span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        {showProductLayout != 1 && (
          <div
            className={`grid w-full grid-cols-${showProductLayout} gap-y-9 gap-x-5`}
          >
            {products?.map((item) => {
              return (
                <div onClick={() => navigate(`/products/${item.id}`)}>
                  <div className="bg-slate-100 flex items-center justify-center">
                    <img src={item.thumbnail} alt="img" />
                  </div>
                  <h5 className="font-normal text-[16px] font-volkhov text-black pt-5 pb-1">
                    Rounded Red Hat
                  </h5>
                  <h5 className="font-normal text-[16px] font-jost text-black">
                    $8.00
                  </h5>
                  <div className="flex gap-1 pt-4">
                    <span className="size-6 rounded-full bg-red-500"></span>
                    <span className="size-6 rounded-full bg-blue-500"></span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Fashion;
