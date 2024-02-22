import React, { useState } from 'react'
import { allItems } from '../../constant/Allitems/allItems';
import LocationOnIcon from "@mui/icons-material/LocationOn";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";

import { logo } from '../../assets/ass';
import HeaderBottom from './HeaderBottom';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
    const [showAll,setShowAll] = useState(false);
    const products = useSelector((state)=>state.amazonReducer.products)
    // console.log(products.amazonReducer.products.length)
  return (
    <>
      <div className="w-full sticky top-0 z-50">
        <div className="w-full bg-amazon_blue text-white px-2 py-3  flex items-center gap-1 ">
          {/* ========= Image Start here =========  */}
          <Link to='/'>
            <div className="headerHover mr-3">
              <img className="w-24 mt-2" src={logo} alt="logo" />
            </div>
          </Link>

          {/* ========= Image End here =========  */}

          {/* ========= Search Start here =========  */}
          <div className="  h-10 rounded-md  hidden mdl:flex  flex-grow relative">
            <span
              onClick={() => setShowAll(!showAll)}
              className="w-14 h-full   bg-gray-200 hover:bg-gray-400 text-sm border-2 duration-300 text-amazon_blue flex items-center justify-center cursor-pointer rounded-tl-md rounded-bl-md">
              All <span></span>
              <KeyboardArrowDownIcon />
            </span>
            {/* drop down */}
            {showAll && (
              <div>
                <ul
                  className="absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white border-[1px] border-amazon_blue text-black p-2 flex-col gap-1 z-50"
                  aria-labelledby="dropdownDefaultButton">
                  {allItems.map((item) => (
                    <li
                      className=" p-1 text-md tracking-wide border-b-[2px] border-b-transparent hover:border-b-amazon_blue  cursor-pointer duration-200 "
                      key={item._id}>
                      {item.title}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <input
              className="h-full text-base text-amazon_blue  flex-grow outline-none border-none px-2"
              type="text"
            />
            <span className="w-12 h-full  flex items-center justify-center bg-amazon_yellow hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md">
              <SearchIcon />
            </span>
          </div>

          {/* ========= Search End here =========  */}

          {/* ========= Signin Start here =========  */}
          <Link to="/login">
            <div className=" flex flex-col items-start justify-center headerHover ">
              <p className="text-sm mdl:text-xs text-white mdltext-lightText font-light">
                Hello, Log in
              </p>
              <p className="hidden mdl:inline-flex text-sm font-semibold -mt-1 text-whiteText">
                Accounts & Lists
                <span>
                  <KeyboardArrowDownIcon />
                </span>
              </p>
            </div>
          </Link>

          {/* ========= Signin end here =========  */}

          {/* ========= Orders Start here =========  */}
          <div className=" hidden lgl:flex flex-col items-start justify-center headerHover">
            <p className="text-xs text-lightText font-light">Returns</p>
            <p className="text-sm font-semibold -mt-1 text-whiteText">
              & Orders
            </p>
          </div>
          {/* ========= Orders End here =========  */}

          {/* ========= Cart Start here =========  */}
          <Link to="/cart">
            <div className="flex  item-start justify-center headerHover relative">
              <ShoppingCartIcon />
              <p className="text-xs font-semibold mt-3 text-whiteText">
                Cart
                <span className="absolute text-xs top-0 left-6 font-semibold p-1 h-4 bg-[#f3a847] text-amazon_blue rounded-full flex justify-center items-center">
                  {products.length > 0 ? products.length : 0}
                </span>
              </p>
            </div>
          </Link>

          {/* ========= Cart End here =========  */}
        </div>
        <HeaderBottom />
      </div>
    </>
  );
}

export default Header