
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { FaDownload } from "react-icons/fa6";
import { FaBriefcase } from "react-icons/fa";
import { Autoplay, EffectFade } from 'swiper/modules';
import slider_img1 from "../../assets/images/home/profile_home1.jpg"
import slider_img2 from "../../assets/images/home/profile_home2.jpg"
export default function Home() {

  


  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      effect="fade" 
      fadeEffect={{ crossFade: true }} 
      modules={[Autoplay, EffectFade]} 
      className="mySwiper"
    >
      <SwiperSlide>
        <div 
          className="h-screen w-full bg-no-repeat  bg-cover bg-bottom relative  " 
          style={{ backgroundImage: `url(${slider_img1})` }} 
        >
          <div className="absolute inset-0  text-black  flex justify-center items-center mt-5">

            <div className=' w-[70%]'>

            <h1 className="text-6xl font-bold font-[Playfair] mb-5 ">
            Hi! <br/>
            Im Jackson
            </h1>
            <p className='font-[Quicksand] text-gray-500 mb-5'>100% html5 bootstrap templates Made <br/>
            By <a href="" className='underline text-blue-500'>Colorlib.com</a></p>


            <button className='flex items-center gap-1 border border-solid border-[#000] bg-transparent uppercase font-[400] text-[12px] font-[Quicksand] px-4 py-1 tracking-[2px]'>
              Download Cv <FaDownload />
            </button>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div 
          className="h-screen w-full bg-no-repeat bg-cover bg-bottom  relative" 
          style={{ backgroundImage: `url(${slider_img2})` }} 
        >
         <div className="absolute inset-0  text-black  flex justify-center items-center mt-5">

<div className=' xl:w-[70%]'>

<h1 className="text-6xl font-bold font-[Playfair] mb-5 ">
Hi! <br/>
Im Jackson
</h1>
<p className='font-[Quicksand] text-gray-500 mb-5'>100% html5 bootstrap templates Made <br/>
By <a href="" className='underline text-blue-500'>Colorlib.com</a></p>


<button className='flex items-center gap-1 border border-solid border-[#000] bg-transparent uppercase font-[400] text-[12px] font-[Quicksand] px-4 py-1 tracking-[2px]'>
  View portfilo <FaBriefcase />
</button>
</div>
</div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}


