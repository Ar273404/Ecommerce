import { CheckCircleIcon } from '@heroicons/react/24/outline';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, deleteItem, increment, resetCart } from '../../redux/amazonSlice';
import { Link } from 'react-router-dom';
import emptyCart from '../../assets/emptyCart.png'
const MainCart = () => {
    const products = useSelector((state)=>state.amazonReducer.products);
    const dispatch = useDispatch();
    const [Totalprice,setPrice] = useState(" ")
    //to find total amount
      useEffect(()=>{
         let total = 0;
          products.map((item)=>{
            total += item.price * item.quantity
            
            return setPrice(total.toFixed(3))
       })
      },[products])
  return (
    <>
      <div className="w-full bg-gray-200 p-5">
        {
            products.length > 0 ? (<div className="container mx-auto h-auto grid grid-cols-5 gap-8">
          <div className="w-full h-full bg-white px-4 col-span-4">
            <div className="flex items-center justify-between border-b-[2px] border-b-gray-400 py-4">
              <h2 className="text-2xl font-semibold">Shopping Cart</h2>
              <h4 className="text-xl font-semibold">Subtitle</h4>
            </div>
            <div>
              {products.map((item) => (
                <div
                  key={item.id}
                  className="w-full border-b-[1px] border-b-gray-300 p-4 flex items-center gap-6">
                  <div className="w-full flex items-center gap-6">
                    <div className="w-1/5">
                      <img
                        className="w-full h-44 object-contain"
                        src={item.image}
                        alt="product image"
                      />
                    </div>
                    <div className="w-4/5">
                      <h2 className="font-semibold text-lg">{item.title}</h2>
                      <p className="text-sm">
                        {item.description.substring(0, 250)}
                      </p>
                      <p className="text-base">
                        Unit Price :{" "}
                        <span className="font-semibold">${item.price}</span>
                      </p>
                      <div className="bg-[#F0F2F2] flex justify-center items-center gap-1 w-24 py-1 text-center drop-shadow-lg rounded-md">
                        <p>Qty:</p>
                        <p
                          onClick={() =>
                            dispatch(
                              decrement({
                                id: item.id,
                                quantity: item.quantity,
                              })
                            )
                          }
                          className="cursor-pointer bg-gray-200 px-2 rounded-md hover:bg-gray-500 hover:text-white duration-300">
                          -
                        </p>
                        <p>{item.quantity}</p>
                        <p
                          onClick={() =>
                            dispatch(
                              increment({
                                id: item.id,
                                quantity: item.quantity,
                              })
                            )
                          }
                          className="cursor-pointer bg-gray-200 px-2 rounded-md hover:bg-gray-500 hover:text-white duration-300">
                          +
                        </p>
                      </div>
                      <button
                        onClick={() => dispatch(deleteItem(item.id))}
                        className="bg-red-500 w-36 py-1 rounded-lg text-white mt-2 hover:bg-red-700 active:bg-red-900 duration-300">
                        Remove from Cart
                      </button>
                    </div>
                    <div>
                      <p className="text-lg font-semibold">
                        ${item.price * item.quantity}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full flex py-2 justify-between">
              <button
                onClick={() => dispatch(resetCart())}
                className="px-10 py-2 bg-blue-500 hover:bg-blue-600 active:bg-blue-500 text-white rounded-lg font-semibold text-lg tracking-wide ">
                Clear Cart
              </button>
              <Link to='/'>
                <button className="px-10 py-2 bg-green-500 hover:bg-green-600 active:bg-green-500 text-white rounded-lg font-semibold text-lg tracking-wide ">
                  Continue Shopping👉
                </button>
              </Link>
            </div>
          </div>
          <div className="w-full h-52 bg-white col-span-1 flex flex-col justify-center items-center p-4">
            <div>
              <p className="flex gap-2 items-start text-sm">
                <span>
                  <CheckCircleIcon className="bg-white text-green-700 rounded-full w-10" />
                </span>
                Your order qualifies for FREE Shipping Choose option at
                Checkout. See details.....
              </p>
            </div>
            <div>
              <p className="font-semibold px-1 py-1 flex gap-2 items-center justify-between">
                Total Price:
                <span className="text-lg font-bold">${Totalprice}</span>
              </p>
            </div>
            <button className="w-full font-medium text-base bg-yellow-300 border-yellow-500 hover:border-yellow-700 py-1.5 rounded-md mt-1 duration-200">
              Proceed to Pay
            </button>
          </div>
        </div>
        ):(
            <div className="flex justify-center items-center gap-4 py-10">
                <div>
                    <img className='w-80 rounded-lg p-4 mx-auto' src={emptyCart} alt='emptycart' />
                </div>
                <div className="w-96 p-4 bg-white flex flex-col items-center rounded-md shadow-lg">
                    <h1 className="text-xl font-bold py-2">Oops!🤦‍♀️😒 Your Cart is empty.</h1>
                    <p className="text-sm text-center">Your Shopping Cart lives to serve. Give it purpose - fill it with books,electronics,cloths etc. and make it happy😂</p>
                   <Link to='/'>
                    <button className="px-10 mt-2 py-2 bg-green-500 hover:bg-green-600 active:bg-green-500 text-white rounded-lg font-semibold text-lg tracking-wide ">
                    Continue Shopping👉
                    </button>
                   </Link>
                </div>
            </div>
        )
        }
      </div>
    </>
  );
}

export default MainCart