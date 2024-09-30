// import React, { useState } from 'react'
// import { Link } from 'react-router-dom';
// import img1 from "../../assets/images/work/img-1-C4nS0eD8.jpg"
// import img2 from "../../assets/images/work/img-2-D-4H1m4L.jpg"
// import img3 from "../../assets/images/work/img-3-pR2ZEVY9.jpg"
// import img4 from "../../assets/images/work/img-4-tHccITd-.jpg"
// import img5 from "../../assets/images/work/img-5-lAucr__a.jpg"
// import img6 from "../../assets/images/work/img-6-DFW03AZ3.jpg"
// import { FaShareAlt } from "react-icons/fa";
// import { FaRegEye } from "react-icons/fa";
// import { GrFavorite } from "react-icons/gr";
// import Styles from "./Work.module.css"
// export default function Work() {
  
//   const [activeIndex, setActiveIndex] = useState(null);
 

  
//   const handleClick = (index) => {
//     setActiveIndex(index); 
//   };

//   const menuItems = [
//     { name: 'Home', link: '' },
//     { name: 'About', link: '' },
//     { name: 'Skills', link: '' },
   
//   ];
//   const images = [
//     {image:img1 , alt:"work1"},
//     {image:img2 , alt:"work2"},
//     {image:img3 , alt:"work3"},
//     {image:img4 , alt:"work4"},
//     {image:img5 , alt:"work5"},
//     {image:img6 , alt:"work6"},
   
//   ];

//   return (
//     <div className='flex justify-center items-center '>
//     <div className='w-[70%]  text-[#999999]'>
//       <p className='font-[Quicksand] text-[10px] tracking-[5px] mb-4'>MY WORK</p>
//       <h2 className='font-bold text-[#000] font-[Playfair] text-[18px] tracking-[5px] leading-[1.8rem] mb-[30px]'>RECENT WORK</h2>
//       <ul className="text-center mt-5 uppercase font-[Quicksand] text-[.75rem] flex items-center gap-3">
//       {menuItems.map((item, index) => (
//         <li
//           key={index}
//           className={`my-3  cursor-pointer ${
//             activeIndex === index ? 'text-blue-500' : 'text-gray-500'
//           }`}
//           onClick={() => handleClick(index)}
//         >
//           <Link className='' to={item.link}>{item.name}</Link>
//         </li>
//       ))}
//     </ul>

//     <div className='grid grid-cols-12 gap-5'>
//       {images.map((ele, index)=>(
//         <div className="col-span-12 text-center md:col-span-6 mb-3" key={index} >

//           <div className={`  ${Styles.member} `}>

//           <img src={ele.image} alt={ele.alt} className='h-[430px] w-full md:w-[432.5px]' />
//           <div className={`${Styles.img_caption} flex flex-col justify-around items-center`}>
//            <div>
//            <h2 className='text-black text-[22px] underline  '>Work2</h2>
//            <p className='text-white' >Lorem ipsum dolor sit amet231.</p>
//            </div>


//             <div className={`flex items-center gap-3 ${Styles.icon}`}>
//             <div className='bg-gray-200 p-2 rounded'>
//             <FaShareAlt className='text-[#000] text-[20px]'/>

//             </div>
//             <div className='bg-gray-200 p-2 rounded flex gap-1 items-center'>
//             <FaRegEye className='text-[#000] text-[20px]' />
//             <span className='underline text-[#000] text-[12px]'> 100</span>

//             </div>
//             <div className='bg-gray-200 p-2 rounded flex gap-1 items-center'>
//             <GrFavorite  className='text-[#000] text-[20px]'/>
//             <span className='underline text-[#000] text-[12px]'> 49</span>
//             </div>
            
//             </div>


//           </div>
//           </div>
//         </div>
//       ))}
//     </div>

   
//     </div>
    
//   </div>
//   )
// }

import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import img1 from "../../assets/images/work/img-1-C4nS0eD8.jpg";
import img2 from "../../assets/images/work/img-2-D-4H1m4L.jpg";
import img3 from "../../assets/images/work/img-3-pR2ZEVY9.jpg";
import img4 from "../../assets/images/work/img-4-tHccITd-.jpg";
import img5 from "../../assets/images/work/img-5-lAucr__a.jpg";
import img6 from "../../assets/images/work/img-6-DFW03AZ3.jpg";
import { FaShareAlt, FaRegEye } from "react-icons/fa";
import { GrFavorite } from "react-icons/gr";
import Styles from "./Work.module.css";

export default function Work() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); // State for current page
  const imagesPerPage = 4; // Number of images per page

  const handleClick = (index) => {
    setActiveIndex(index); 
  };

  const menuItems = [
    { name: 'Graphic Design', link: '' },
    { name: 'App', link: '' },
    { name: 'SoftWare', link: '' },
  ];

  const images = [
    {image: img1, alt: "work1"},
    {image: img2, alt: "work2"},
    {image: img3, alt: "work3"},
    {image: img4, alt: "work4"},
    {image: img5, alt: "work5"},
    {image: img6, alt: "work6"},
    {image: img2, alt: "work6"},
    {image: img4, alt: "work6"},
    {image: img6, alt: "work6"},
    {image: img1, alt: "work6"},
    {image: img5, alt: "work6"},
    {image: img6, alt: "work6"},
    {image: img3, alt: "work6"},
    {image: img1, alt: "work6"},
  ];

  // Calculate the indexes for the current page
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage); // Select images for the current page

  // Function to go to the next page
  const nextPage = () => {
    if (currentPage < Math.ceil(images.length / imagesPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Function to go to the previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className='flex justify-center items-center'>
      <div className='w-[70%] text-[#999999]'>
        <p className='font-[Quicksand] text-[10px] tracking-[5px] mb-4'>MY WORK</p>
        <h2 className='font-bold text-[#000] font-[Playfair] text-[18px] tracking-[5px] leading-[1.8rem] mb-[30px]'>
          RECENT WORK
        </h2>
        <ul className="text-center mt-5  font-[Quicksand] font-[500] text-[1rem] flex items-center gap-3">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`my-3 cursor-pointer ${activeIndex === index ? 'text-blue-500' : 'text-gray-500'}`}
              onClick={() => handleClick(index)}
            >
              <Link to={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>

        <div className='grid grid-cols-12 gap-5'>
          {currentImages.map((ele, index) => (
            <div className="col-span-12 text-center md:col-span-6 mb-3" key={index}>
              <div className={`${Styles.member}`}>
                <img src={ele.image} alt={ele.alt} className='h-[430px] w-full md:w-[432.5px]' />
                <div className={`${Styles.img_caption} flex flex-col justify-around items-center`}>
                  <div>
                    <h2 className='text-black text-[22px] underline'>Work</h2>
                    <p className='text-white'>Lorem ipsum dolor sit amet.</p>
                  </div>
                  <div className={`flex items-center gap-3 ${Styles.icon}`}>
                    <div className='bg-gray-200 p-2 rounded'>
                      <FaShareAlt className='text-[#000] text-[20px]' />
                    </div>
                    <div className='bg-gray-200 p-2 rounded flex gap-1 items-center'>
                      <FaRegEye className='text-[#000] text-[20px]' />
                      <span className='underline text-[#000] text-[12px]'>100</span>
                    </div>
                    <div className='bg-gray-200 p-2 rounded flex gap-1 items-center'>
                      <GrFavorite className='text-[#000] text-[20px]' />
                      <span className='underline text-[#000] text-[12px]'>49</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className='flex justify-center mt-5'>
          <button
            onClick={prevPage}
            className={`px-4 py-2 mr-2 border border-gray-300 rounded ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            onClick={nextPage}
            className={`px-4 py-2 border border-gray-300 rounded ${currentPage === Math.ceil(images.length / imagesPerPage) ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={currentPage === Math.ceil(images.length / imagesPerPage)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
