import React from 'react'
import Cart from '../features/cart/Cart';
import MainCart from '../features/cart/MainCart';
import Header from '../components/Header/Header';
import Footer from '../components/footer/Footer';
const CartPage = () => {
  return (
    <>
      {/* <Cart/> */}
      <Header />
        <MainCart/>
      <Footer/>
    </>
  );
}

export default CartPage