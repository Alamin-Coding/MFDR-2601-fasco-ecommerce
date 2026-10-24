import Arrow from "../assets/Vector.png";
import  Down from "../assets/arrow-down.png";
import One from "../assets/c-1.png"
import Two from "../assets/c-2.png"
import Three from "../assets/c-3.png"
import Four from "../assets/c4.png"
import Five from "../assets/c5.png"
import Six from "../assets/c6.png"
import Seven from "../assets/c7.png"
import Eight from "../assets/c8.png"
import Nine from "../assets/c9.png"
import Ten from "../assets/c10.png"
import Eleven from "../assets/c11.png"
import Twelve from "../assets/c12.png"
import Thirteen from "../assets/c13.png"
import Forteen from "../assets/c14.png"
import Up from "../assets/arrow-up.png"
import Btnone from "../assets/Button-1.png"
import Btntwo from "../assets/Button-2.png"
import Btnthree from "../assets/Button-3.png"
import Btnfour from "../assets/Button-4.png"
import Btnfive from "../assets/Button-5.png"
import Imgone from "../assets/img1.png"
import Dotone from "../assets/dot1.png"
import Dottwo from "../assets/dot2.png"
import Imgtwo from "../assets/img2.png"
import Imgthree from "../assets/img3.png"
import Imgfour from "../assets/img4.png"
import Imgfive from "../assets/img5.png"
import Imgsix from "../assets/img6.png"
import Imgseven from "../assets/img7.png"
import Imgeight from "../assets/img8.png"
import Imgnine from "../assets/img9.png"
import Dotthree from "../assets/dot3.png"
import Dotfour from "../assets/dot4.png"
import Dotfive from "../assets/dot5.png"
import Dotsix from "../assets/dot6.png"
import Dotsever from "../assets/dot7.png"
import Doteight from "../assets/dot8.png"
import Dotnine from "../assets/dot9.png"
import Dotten from "../assets/dot10.png"
import Doteleven from "../assets/dot11.png"
import  Dota from "../assets/dota.png"
import Dotthirteen from "../assets/dot13.png"
import Dotforteen from "../assets/dot14.png"
import Dotfifteen from "../assets/dot15.png"
import Dotsixteen from "../assets/dot16.png"
import Dotseventeen from "../assets/dot17.png"
import Doteighteen from "../assets/dot18.png"
import Dotnineteen from "../assets/dot19.png"
import Dottweenty from "../assets/dot20.png"









const Fashion = () => {
  return (
    <section className='bg-[#FFFFFF] max-w-[1277px] mx-auto'>
        <h1 className='font-normal text-black text-center text-[42px] font-volkhov pt-[77px]'>Fashion</h1>
        <div className="flex items-center max-w-[130px] justify-between mx-auto pt-5 pb-25">
            <h4 className="font-normal text-black text-[15px] font-jost">Home</h4>
            <img src={Arrow} alt="arrow" className="max-h-[9px] max-w-[9px]" />
            <h4 className="font-normal text-black text-[15px] font-jost">Fashion</h4>
        </div>
        <div className="pb-10 flex justify-between"> 
            <div className="flex gap-[218px] items-center pl-3">
                <h3 className="font-normal text-black font-volkhov text-[30px]">Filters</h3>
                <div className="flex gap-1 items-center">
                    <h5 className="font-normal text-[16px] font-volkhov text-black">Best selling</h5>
                    <img src={Up} alt="up" className="max-h-[8px] max-w-[8px]" />
                </div>             
            </div>

             <div className="flex gap-3 pr-28">
                    <img src={Btnone} alt="btn" />
                    <img src={Btntwo} alt="btn" />
                    <img src={Btnthree} alt="btn" />
                    <img src={Btnfour} alt="btn" />
                    <img src={Btnfive} alt="btn" />
                </div>

        </div>
        <div className="flex gap-13">
            <div className="flex flex-col gap-[33px] max-w-[322px] px-3">
                <div>
                <h5 className="font-normal text-black font-volkhov text-[18px]">Size</h5>
                <div className="flex gap-3 pt-4">
                    <div className=" border-paragraph border-2 max-w-[42px] max-h-[42px] rounded-[5px]">
                    <h5 className="font-normal font-poppins text-paragraph text-[18px] pt-2 pb-[15px] px-[15px]">S</h5>
                    </div>
                    <div className=" border-paragraph border-2 max-w-[42px] max-h-[42px] rounded-[5px]">
                    <h5 className="font-normal font-poppins text-paragraph text-[18px] pt-2 pb-[10px] px-[10px]">M</h5>
                    </div>
                    <div className=" border-paragraph border-2 max-w-[42px] max-h-[42px] rounded-[5px]">
                    <h5 className="font-normal font-poppins text-paragraph text-[18px] pt-2 pb-[15px] px-[15px]">L</h5>
                    </div>
                </div>
                <div className="pt-3">
                     <div className=" border-paragraph border-2 max-w-[42px] max-h-[42px] rounded-[5px]">
                    <h5 className="font-normal font-poppins text-paragraph text-[18px] pt-2 pb-[10px] px-[10px]">XL</h5>
                    </div>            
                </div>

                </div>
                <div className="pt-7">
                <h5 className="font-normal text-black font-volkhov text-[18px]">Colors</h5>
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
                        <h5 className="font-normal text-black font-volkhov text-[18px] ">Prices</h5>
                    </div>
                  <p className="font-normal font-poppins text-paragraph text-[16px] pt-[20px]">$0-$50</p>
                  <p className="font-normal font-poppins text-paragraph text-[16px] pt-[10px]">$50-$100</p>
                  <p className="font-normal font-poppins text-paragraph text-[16px] pt-[10px]">$100-$150</p>
                  <p className="font-normal font-poppins text-paragraph text-[16px] pt-[10px]">$150-$200</p>
                  <p className="font-normal font-poppins text-paragraph text-[16px] pt-[10px]">$300-$400</p>


                </div>

                 <div>
                    <div  className="flex gap-[196px] items-center">
                    <div>
                        <h5 className="font-normal text-black font-volkhov text-[18px] ">Brands</h5>
                    </div>
                       <img src={Down} alt="arrow" className="max-h-[9px] max-w-[9px]" />        
                  </div>
                  <div className="flex gap-[8.5px] pt-5">
                  <p className="font-normal font-poppins text-paragraph text-[16px]">Minimog</p>
                  <p className="font-normal font-poppins text-paragraph text-[16px]">Retrolie</p>
                  <p className="font-normal font-poppins text-paragraph text-[16px]">Brook</p>
                  </div>
                  <div className="flex gap-[8.5px] pt-[10px]">
                  <p className="font-normal font-poppins text-paragraph text-[16px]">Learts</p>
                  <p className="font-normal font-poppins text-paragraph text-[16px]">Vagabond</p>
                  <p className="font-normal font-poppins text-paragraph text-[16px]">Abby</p>
                  </div>               
                </div>
               

                <div>
                    <div  className="flex gap-[160px] items-center">
                    <div>
                        <h5 className="font-normal text-black font-volkhov text-[18px] ">Collections</h5>
                    </div>
                       <img src={Down} alt="arrow" className="max-h-[9px] max-w-[9px]" /> 
                  </div>
                  <p className="font-normal font-poppins text-paragraph text-[16px] pt-[20px]">All products</p>
                  <p className="font-normal font-poppins text-paragraph text-[16px] pt-[10px]">Best sellers</p>
                  <p className="font-normal font-poppins text-paragraph text-[16px] pt-[10px]">New arrivals</p>
                  <p className="font-normal font-poppins text-paragraph text-[16px] pt-[10px]">Accessories</p>

                </div>

                <div>
                    <div>
                        <h5 className="font-normal text-black font-volkhov text-[18px] ">Tags</h5>
                    </div>
                  <div className="flex gap-[8.5px] pt-5">
                  <p className="font-normal font-poppins text-paragraph text-[16px]">Fashion</p>
                  <p className="font-normal font-poppins text-paragraph text-[16px]">Hats</p>
                  <p className="font-normal font-poppins text-paragraph text-[16px]">Sandal</p>
                  <p className="font-normal font-poppins text-paragraph text-[16px]">Belt</p>
                  <p className="font-normal font-poppins text-paragraph text-[16px]">Bags</p>
                  </div>
                  <div className="flex gap-[8.5px] pt-[10px]">
                  <p className="font-normal font-poppins text-paragraph text-[16px]">Learts</p>
                  <p className="font-normal font-poppins text-paragraph text-[16px]">Vagabond</p>
                  <p className="font-normal font-poppins text-paragraph text-[16px]">Abby</p>
                  </div> 
                  <div className="flex gap-[8.5px] pt-[10px]">
                  <p className="font-normal font-poppins text-paragraph text-[16px]">Sunglasses</p>
                  <p className="font-normal font-poppins text-paragraph text-[16px]">Beachwear</p>
                  </div>               
                             
                </div>             
            </div>


                <div className="grid grid-cols-3 gap-y-9 gap-x-5">
                     <div>
                        <img src={Imgone} alt="img" />
                        <h5 className="font-normal text-[16px] font-volkhov text-black pt-5 pb-1">Rounded Red Hat</h5>
                        <h5 className="font-normal text-[16px] font-jost text-black">$8.00</h5>
                        <div className="flex gap-1 pt-4">
                            <img src={Dotone} alt="dot" />
                            <img src={Dottwo} alt="dot" />
                        </div>
                 </div>
                 <div>
                        <img src={Imgtwo} alt="img" />
                        <h5 className="font-normal text-[16px] font-volkhov text-black pt-5 pb-1">Linen-blend Shirt</h5>
                        <h5 className="font-normal text-[16px] font-jost text-black">$17.00</h5>
                        <div className="flex gap-1 pt-4">
                            <img src={Dotthree} alt="dot" />
                            <img src={Dotfour} alt="dot" />
                        </div>
                 </div>






                 <div>
                        <img src={Imgthree} alt="img" />
                        <h5 className="font-normal text-[16px] font-volkhov text-black pt-5 pb-1">Long-sleeve Coat</h5>
                        <h5 className="font-normal text-[16px] font-jost text-black">$106.00</h5>
                        <div className="flex gap-1 pt-4">
                            <img src={Dotfive} alt="dot" />
                            <img src={Dotsix} alt="dot" />
                        </div>
                 </div>

                 <div>
                        <img src={Imgfour} alt="img" />
                        <h5 className="font-normal text-[16px] font-volkhov text-black pt-5 pb-1">Boxy Denim Hat</h5>
                        <h5 className="font-normal text-[16px] font-jost text-black">$25.00</h5>
                        <div className="flex gap-1 pt-4">
                            <img src={Dotsever} alt="dot" />
                            <img src={Doteight} alt="dot" />
                        </div>
                 </div>

                 <div>
                        <img src={Imgfive} alt="img" />
                        <h5 className="font-normal text-[16px] font-volkhov text-black pt-5 pb-1">Linen Plain Top</h5>
                        <h5 className="font-normal text-[16px] font-jost text-black">$25.00</h5>
                        <div className="flex gap-1 pt-4">
                            <img src={Dotnine} alt="dot" />
                            <img src={Dotten} alt="dot" />
                        </div>
                 </div>

                 <div>
                        <img src={Imgsix} alt="img" />
                        <h5 className="font-normal text-[16px] font-volkhov text-black pt-5 pb-1">Oversized T-shirt</h5>
                        <div className="flex gap-2">
                        <h5 className="font-normal text-[16px] font-jost text-black">$11.00</h5> <del className="font-normal text-[16px] font-jost text-paragraph">$14.00</del>
                        </div>
                        <div className="flex gap-1 pt-4 items-center">
                            <img src={Doteleven} alt="dot" />
                            <img src={Dota} alt="dot" className="max-w-[26px] max-h-[26px]" />
                            <img src={Dotthirteen} alt="dot" />

                        </div>
                 </div>

                 <div>
                        <img src={Imgseven} alt="img" />
                        <h5 className="font-normal text-[16px] font-volkhov text-black pt-5 pb-1">Polarised Sunglasses</h5>
                         <div className="flex gap-2">
                        <h5 className="font-normal text-[16px] font-jost text-black">$18.00</h5> <del className="font-normal text-[16px] font-jost text-paragraph">$21.00</del>
                        </div>
                        <div className="flex gap-1 pt-4">
                            <img src={Dotforteen} alt="dot" />
                            <img src={Dotfifteen} alt="dot" />
                        </div>
                 </div>

                 <div>
                        <img src={Imgeight} alt="img" />
                        <h5 className="font-normal text-[16px] font-volkhov text-black pt-5 pb-1">Rockstar Jacket</h5>
                        <h5 className="font-normal text-[16px] font-jost text-black">$22.00</h5>
                        <div className="flex gap-1 pt-4">
                            <img src={Dotsixteen} alt="dot" />
                            <img src={Dotseventeen} alt="dot" />
                        </div>
                 </div>

                 <div className="pb-20">
                        <img src={Imgnine} alt="img" />
                        <h5 className="font-normal text-[16px] font-volkhov text-black pt-5 pb-1">Dotted Black Dress</h5>
                        <h5 className="font-normal text-[16px] font-jost text-black">$20.00</h5>
                        <div className="flex gap-1 pt-4 items-center">
                            <img src={Doteighteen} alt="dot" />
                            <img src={Dotnineteen} alt="dot" className="max-w-[26px] max-h-[26px]"  />
                            <img src={Dottweenty} alt="dot" className="max-w-[26px] max-h-[26px]" />

                        </div>
                 </div>

            
            </div>

        </div>

    </section>
    
  )
}

export default Fashion