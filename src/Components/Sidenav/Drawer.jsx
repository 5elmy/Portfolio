import React, { useState } from "react";
import { PiListBold } from "react-icons/pi";
import img_profile from "../../assets/images/sidenav/profile1.jpg";
import { Link } from "react-router-dom";
export const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
    toggleDrawer();
  };

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Skills", link: "/skills" },
    { name: "Experience", link: "/experience" },
    { name: "Work", link: "/work" },
  ];

  return (
    <>
      {isOpen ? (
        ""
      ) : (
        <div className="text-center h-[60px] w-full fixed top-2 left-2 z-50   xl:hidden flex items-center  ps-5">
          <button
            className="w-[55px] sticky top-5 left-5 cursor-pointer h-[39px] rounded  !border-[0.5px] border-solid border-[#6f6666] flex items-center justify-center"
            type="button"
            onClick={toggleDrawer}
          >
            <PiListBold className="text-[30px] text-[gray]" />
          </button>
        </div>
      )}

      <div
        id="drawer-example"
        className={`fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-[#f5f5f5]  w-80 dark:bg-gray-800 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        tabIndex="-1"
        aria-labelledby="drawer-label"
      >
        <button
          type="button"
          onClick={toggleDrawer}
          className="text-gray-400   hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7L1 13"
            />
          </svg>
          <span className="sr-only">Close menu</span>
        </button>

        <div className=" block fixed w-[270px] top-0 left-0 bottom-0 h-screen   text-[#000000b3] ">
          <div className="flex justify-center items-center h-[250px] ">
            <img
              src={img_profile}
              alt="profile image"
              className="w-[9.375rem] h-[9.375rem] rounded-[50%]"
            />
          </div>
          <div className="text-center mb-5 ">
            <h2 className="text-[#000] font-bold  text-[24px] font-[Playfair]">
              Jackson Ford
            </h2>
            <p className="text-[12px]">
              <a className="text-[#2c98f0] uppercase ">UI/UX/Designer </a>in
              Philippines
            </p>
          </div>

          <ul className="text-center mt-5 uppercase font-[Quicksand] text-[.75rem]">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={`my-3  cursor-pointer ${
                  activeIndex === index ? "text-blue-500" : "text-gray-500"
                }`}
                onClick={() => handleClick(index)}
              >
                <Link
                  className="hover:border-b-2 hover:border-[#2c98f0] transition-all ease-in duration-500"
                  to={item.link}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
