import React, { useState } from 'react'
import img_profile from "../../assets/images/sidenav/profile1.jpg"
import { Link} from 'react-router-dom'
import { Drawer } from './Drawer';
export default function Sidenav() {

  const [activeIndex, setActiveIndex] = useState(null);
 

  
  const handleClick = (index) => {
    setActiveIndex(index); 
  };

  const menuItems = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Skills', link: '/skills' },
    { name: 'Experience', link: '/experience' },
    { name: 'Work', link: '/work' },
  ];

  return (
  <>
    <nav className=' hidden xl:block fixed w-[270px] top-0 left-0 bottom-0 h-screen bg-[#f5f5f5]  text-[#000000b3] '>
     <div className='flex justify-center items-center h-[250px] '>

        <img src={img_profile} alt="profile image" className='w-[9.375rem] h-[9.375rem] rounded-[50%]'/>

     </div>
     <div className='text-center mb-5 '>
        <h2 className='text-[#000] font-bold  text-[24px] font-[Playfair]'>Jackson Ford</h2>
        <p className='text-[12px]'><a className='text-[#2c98f0] uppercase '>UI/UX/Designer </a>in Philippines</p>
     </div>

     



<ul className="text-center mt-5 uppercase font-[Quicksand] text-[.75rem]">
      {menuItems.map((item, index) => (
        <li
          key={index}
          className={`my-3  cursor-pointer ${
            activeIndex === index ? 'text-blue-500' : 'text-gray-500'
          }`}
          onClick={() => handleClick(index)}
        >
          <Link className='hover:border-b-2 hover:border-[#2c98f0] transition-all ease-in duration-500' to={item.link}>{item.name}</Link>
        </li>
      ))}
    </ul>


    </nav>

   



   <Drawer/>
  

  

  
  </>
  )
}









