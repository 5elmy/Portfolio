import React from 'react'
import { FaRegLightbulb } from "react-icons/fa";
import { FaEarthAfrica } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa";
export default function About() {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='w-[70%]  text-[#999999]'>
        <p className='font-[Quicksand] text-[10px] tracking-[5px] mb-4'>ABOUT US</p>
        <h2 className='font-bold text-[#000] font-[Playfair] text-[18px] tracking-[5px] leading-[1.8rem] mb-[30px]'>WHO AM I?</h2>
        <p className=' font-[400] text-[15px] font-[Quicksand] mb-[1.5rem] '>
        <strong className='text-[#000000b3]'>Hi Im Jackson Ford</strong> On her way she met a copy. The copy warned the Little Blind Text, that where it came from 
        it would have been rewritten a thousand times and everything that was left from its origin would be the word (and)
         and the Little Blind Text should turn around and return to its own, safe country.
        </p>
        <p className='mb-[1.5em]'>
        Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic 
        life One day however a small line of blind text by the name of Lorem Ipsum decided
         to leave for the far World of Grammar.
        </p>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-3  border-b-2 border-b-blue-500" style={{boxShadow: "0 0 56px -8px #0000002b"}}> 
          <div className='mx-auto w-[70%] mt-5 mb-[50px] '>

        <FaRegLightbulb  className='w-[22.5px] h-[30px] text-blue-500 text-[30px] mb-5'/>

        <h3 className='text-[#000] font-[Quicksand] text-[16px] font-[500] leading-[1.2] '>Graphic Design</h3>
          </div>
        </div>
        <div className="col-span-12 md:col-span-3  border-b-2 border-b-red-500" style={{boxShadow: "0 0 56px -8px #0000002b"}}> 
          <div className='mx-auto w-[70%] mt-5 mb-[50px] '>

        
        <FaEarthAfrica  className='w-[30.5px] h-[31.5px] text-red-500 text-[30px] mb-5 font-[900]' />

        <h3 className='text-[#000] font-[Quicksand] text-[16px] font-[500] leading-[1.2] '>Web Design</h3>
          </div>
        </div>
        <div className="col-span-12 md:col-span-3  border-b-2 border-b-[#f9bf3f]" style={{boxShadow: "0 0 56px -8px #0000002b"}}> 
          <div className='mx-auto w-[70%] mt-5 mb-[50px] '>

        <FaDatabase   className='w-[26.5px] h-[31px] text-[#f9bf3f] text-[30px] mb-5'/>

        <h3 className='text-[#000] font-[Quicksand] text-[16px] font-[500] leading-[1.2] '>Software</h3>
          </div>
        </div>
        <div className="col-span-12 md:col-span-3  border-b-2 border-b-[#a84cb8]" style={{boxShadow: "0 0 56px -8px #0000002b"}}> 
          <div className='mx-auto w-[70%] mt-5 mb-[50px] '>

        <FaRegLightbulb  className='w-[22.5px] h-[30px] text-[#a84cb8] text-[30px] mb-5'/>

        <h3 className='text-[#000] font-[Quicksand] text-[16px] font-[500] leading-[1.2] '>Application</h3>
          </div>
        </div>
      
      </div>
      </div>
      
    </div>
  )
}
