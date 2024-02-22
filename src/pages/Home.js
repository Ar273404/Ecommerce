import React from 'react'
import Navbar from '../features/navbar/Navbar'
import ProductList from '../features/product-list/ProductList'
import Header from '../components/Header/Header';
import Banner from '../components/Home/Banner';
import Product from '../components/Home/Product';
import Footer from '../components/footer/Footer';

const Home = () => {
  return (
    <div>
        <Header/>
        <Banner/>
        <Product/>
        <Footer/>
    </div>
  );
}

export default Home