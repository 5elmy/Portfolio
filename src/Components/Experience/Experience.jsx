import React from "react";
import { MdOutlineEdit } from "react-icons/md";
export default function Experience() {
  return (
    <div className="flex justify-center items-center mt-12">
      <div className="w-[85%]  md:w-[70%]   text-[#eee] ">
        <p className="font-[Quicksand] text-[10px] tracking-[5px] mb-4">
          EXPERIENCE
        </p>
        <h2 className="font-bold text-[#000] font-[Playfair] text-[18px] tracking-[5px] leading-[1.8rem] mb-[30px]">
          WORK EXPERIENCE
        </h2>
        <div className=" p-1 grid grid-cols-12">
          <div className="    relative col-span-2 md:col-span-1   ">
            <div className="  h-[97dvh] md:h-[64vh] bg-[#eee] w-[2px] ms-5"></div>
            <div className="absolute top-8 left-[-3px] w-[50px] h-[50px] rounded-full bg-blue-500 border-[4px] border-[#eee] flex justify-center items-center text-white">
              <MdOutlineEdit className="text-[30px] font-[900]" />
            </div>
            <div className="absolute top-[310px] md:top-[230px] left-[-3px] w-[50px] h-[50px] rounded-full bg-red-500 border-[4px] border-[#eee] flex justify-center items-center text-white">
              <MdOutlineEdit className="text-[30px] font-[900]" />
            </div>
            <div className="absolute top-[570px] md:top-[400px] left-[-3px] w-[50px] h-[50px] rounded-full bg-[#f0ad4e] border-[4px] border-[#eee] flex justify-center items-center text-white">
              <MdOutlineEdit className="text-[30px] font-[900]" />
            </div>
            <div className="absolute top-[900px] md:top-[601px] left-[-3px] w-[50px] h-[50px] rounded-full bg-transparent border-[4px] border-[#eee] flex justify-center items-center text-white">
              <MdOutlineEdit className="text-[30px] font-[900]" />
            </div>

            <div class=" absolute hidden lg:block  top-12 left-[49.5px] xl:left-[55px]  triangle"></div>
            <div class=" absolute hidden lg:block top-[320px] left-[46.5px] xl:left-[55px] md:top-[245px] md:left-[49.5px]   triangle"></div>
            <div class=" absolute hidden lg:block  top-[610px] left-[46.5px] xl:left-[55px] md:top-[415px]    md:left-[49.5px]  triangle"></div>
          </div>

          <div className="col-span-9 md:col-span-10  mt-7 ">
            <div className="p-3 bg-[#eee] text-black mb-6">
              <h2 className="text-[20px] font-[Quicksand] font-[500] mb-8">
                Full Stack Developer{" "}
                <span className="text-[16px] text-[#999999]">2017-2018</span>
              </h2>
              <p className="mb-[1rem] font-[300] text-[14px] font-[Quicksand] text-[#000000b3]">
                Tolerably earnestly middleton extremely distrusts she boy now
                not. Add and offered prepare how cordial two promise. Greatly
                who affixed suppose but enquire compact prepare all put. Added
                forth chief trees but rooms think may.
              </p>
            </div>
            <div className="p-3 bg-[#eee] text-black mb-6">
              <h2 className="text-[20px] font-[Quicksand] font-[500] mb-8">
                Front End Developer at Google Company{" "}
                <span className="text-[16px] text-[#999999]">2017-2018</span>
              </h2>
              <p className="mb-[1rem] font-[300] text-[14px] font-[Quicksand] text-[#000000b3]">
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic life One day however a
                small line of blind text by the name of Lorem Ipsum decided to
                leave for the far World of Grammar.
              </p>
            </div>

            <div className="p-3 bg-[#eee] text-black mb-6">
              <h2 className="text-[20px] font-[Quicksand] font-[500] mb-8">
                System Analyst{" "}
                <span className="text-[16px] text-[#999999]">2017-2018</span>
              </h2>
              <p className="mb-[1rem] font-[300] text-[14px] font-[Quicksand] text-[#000000b3]">
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic life One day however a
                small line of blind text by the name of Lorem Ipsum decided to
                leave for the far World of Grammar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
