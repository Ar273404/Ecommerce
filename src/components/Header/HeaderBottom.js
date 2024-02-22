import React, { useState,useRef, useEffect } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SideNavContent from "./SideNavContent";
import CloseIcon from "@mui/icons-material/Close";
// import motion from 'framer-motion'
const HeaderBottom = () => {
    const [sidebar, setSidebar] = useState(false);
    // to close all nav or dropdown by clicking outside that-->
     const ref = useRef()
     useEffect(()=>{
        document.body.addEventListener("click",(e)=>
        {
           //console.log(e.target.contains(ref.current))
           if((e.target.contains(ref.current)))
           {
              setSidebar(false)
           }
        })
     },[ref,sidebar])
  return (
    <>
      <div className="w-full px-4 h-[36px] bg-amazon_light text-white flex items-center">
        {/* =========== Listitems start here ========= */}
        <ul className="flex items-center gap-2 text-sm tracking-wide">
          {/* =========== Listitems start here ========= */}
          <li
            onClick={() => setSidebar(!sidebar)}
            className=" headerHover flex items-center gap-1">
            <MenuIcon />
            All
          </li>
          <li className="headerHover hidden md:inline-flex">Today's Deals</li>
          <li className="headerHover hidden md:inline-flex">
            Customer Service
          </li>
          <li className="headerHover hidden md:inline-flex">Gift Cards</li>
          <li className="headerHover hidden md:inline-flex">Registry</li>
          <li className="headerHover hidden md:inline-flex">Sell</li>
          <li></li>
        </ul>

        {/* =========== Listitems end here ========= */}

        {/* =========== sidenav start here ========= */}
        {sidebar && (
          <div className="w-full h-screen text-black fixed top-0 left-0 bg-amazon_blue bg-opacity-50">
            <div className="w-full h-full relative">
              <div ref={ref} className="md:w-[350px] h-full bg-white border border-black">
                <div className="w-full bg-amazon_light text-white py-2 px-6 flex items-center gap-4">
                  <AccountCircleIcon />
                  <h3 className="font-bold text-lg tracking-wide">
                    Hello, Sign In
                  </h3>
                </div>
                <SideNavContent
                  title="Digital Content & Device"
                  one="Amazon Music"
                  two="Kindle E-reader & Books"
                  three="Amazon Appstore"
                />
                <SideNavContent
                  title="Shop By Department"
                  one="Electronics"
                  two="Computers"
                  three=" Smart Phones"
                />
                <SideNavContent
                  title="Program & Features"
                  one="Gift Cards"
                  two="Amazon live"
                  three="International Shopping"
                />{" "}
                <SideNavContent
                  title="Help & Settings"
                  one="Your Account"
                  two="Customer Service"
                  three="Contact us"
                />
              </div>
              <span
                onClick={() => {
                  setSidebar(false);
                }}
                className="absolute top-0 left-[305px]  w-11 h-11 text-black flex items-center justify-center border bg-gray-300 hover:bg-rose-900 hover:text-white">
                <CloseIcon />
              </span>
            </div>
          </div>
        )}
        {/* =========== sidenav end here ========= */}
      </div>
    </>
  );
};

export default HeaderBottom;
