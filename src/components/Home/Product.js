import React, { useEffect } from "react";
import axios from 'axios';
import StarRateIcon from "@mui/icons-material/StarRate";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { useSelector, useDispatch } from "react-redux";
import { data } from "./ProductData";
import { addToCart } from "../../redux/amazonSlice";
const Product = ()=>
{     const dispatch = useDispatch();
      return (
        <>
          <div className=" mt-8 max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 px-4">
            {data.map((item) => (
              <div
                key={item.id}
                className="bg-white h-auto border-[1px] border-gray-200 py-6 z-30 hover:border-transparent shadow-none duration-200 flex flex-col gap-4 relative">
                <div>
                  <span class="absolute top-0 left-0 -ml-3 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
                    {item.discount}% OFF
                  </span>
                </div>
                <div className="w-full h-auto flex items-center justify-center group">
                  <img
                    className="-mt-4 w-45 h-60 p-6 object-contain"
                    src={item.image}
                    alt="product img"
                  />
                  <ul
                    className="w-full h-36 bg-gray-100 absolute bottom-[0px] flex flex-col
                  items-end justify-center gap-2 px-2 bprder-l border-r group-hover:bottom-[170px] duration-300">
                  <li onClick={()=>dispatch(addToCart({
                     id:item.id,
                     title:item.title,
                     description:item.description,
                     price:item.price,
                     category:item.category,
                     image:item.image,
                     quantity:1,
                  }))}  className="productLi">
                      Add to Cart     
                      <span><ShoppingCartIcon /></span>
                    </li>
                   <li className="productLi">
                     Add to Wish List     
                      <span><FavoriteIcon/></span>
                    </li>        
                   <li className="productLi">
                      View Details     
                      <span><ArrowCircleRightIcon/></span>
                    </li>
                  </ul>
                  <span className="text-xs  capitalize italic absolute top-2 right-2 text-red-900">
                    {item.category}
                  </span>
                </div>
                <div className="px-3 z-10 bg-white">
                  <div className="flex items-center justify-between">
                    <h2 className="tracking-wide text-lg text-amazon_blue font-medium">
                      {item.title.substring(0, 20)}
                    </h2>
                    <p className="text-sm text-gray-700 font-semibold">
                      ${item.price}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm">
                      {item.description.substring(0, 100)}....
                    </p>
                    <div className="text-yellow-800">
                      <StarRateIcon />
                      <StarRateIcon />
                      <StarRateIcon />
                      <StarRateIcon />
                      <StarRateIcon />
                    </div>
                  </div>
                  <button onClick={()=>dispatch(addToCart({
                     id:item.id,
                     title:item.title,
                     description:item.description,
                     price:item.price,
                     category:item.category,
                     image:item.image,
                     quantity:1,
                  }))}
                    className="mt-4 p-2 w-full font-medium text-base bg-gray-700 text-white
                     rounded-md duration-700
                  ">
                    <ShoppingCartIcon />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4  gap-4 px-2 py-4  -ml-5">
            {data.map((item) => (
              <div class="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                <a
                  class="p-4 mt-2 flex h-50 overflow-hidden rounded-xl"
                  href="#">
                  <img
                    class="object-contain h-40 w-96 "
                    src={item.image}
                    alt="product image"
                  />
                  <span class="absolute top-0 left-0 m-1 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
                    {item.discount}% OFF
                  </span>
                </a>
                <div class="mt-2 px-2 pb-5">
                    <h5 class="tracking-tight text-gray-900">{item.title}</h5>    
                    <p className="text-sm text-gray-800 mt-2">{item.description}</p>            
                  <div class="mt-2 mb-5 flex items-center justify-between">
                    <p>
                      <span class="text-2xl font-bold text-slate-900">
                        ${item.price}
                      </span>
                      <span class="text-md text-slate-900 line-through">
                        ${(((item.price*item.discount)/100)+item.price).toFixed(3)}
                      </span>
                    </p>
                    <div class="flex mt-6 items-center">
                      <svg
                        aria-hidden="true"
                        class="h-5 w-5 text-yellow-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="h-5 w-5 text-yellow-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="h-5 w-5 text-yellow-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="h-5 w-5 text-yellow-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="h-5 w-5 text-yellow-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <span class="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
                        {item.rating.rate}
                      </span>
                    </div>
                  </div>
                  <a
                    href="#"
                    class="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                    <ShoppingCartIcon/>
                    Add to cart
                  </a>
                </div>
              </div>
            ))}
          </div> */}
        </>
      );
}
export default Product

 


// // one way to fetch data--->
    
    // useEffect(()=>{
    //     async function ProductData()
    //     {
    //         const response = await axios.get("https://fakestoreapi.com/products");
    //         // const data = await response.json();       
    //         console.log(response.response);           
    //     };
    // },[])
    // // console.log(product)