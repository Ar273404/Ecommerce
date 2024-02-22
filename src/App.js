import logo from './logo.svg';
import './App.css';
import ProductList from './features/product-list/ProductList';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import ProductDetailsPage from './pages/ProductDetailsPage';
import Payment from './pages/Payment';
// import Header from './components/Header/Header';
// import Banner from './components/Home/Banner';
// import Footer from './components/footer/Footer';
// import Product from './components/Home/Product';
import { ProductData } from './api/api';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign" element={<SignupPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/product-detail" element={<ProductDetailsPage />} />
          <Route path="/payment" element={<Payment/>} />
        </Routes>
      </BrowserRouter>
      {/* <Header/>
      <Banner/>
      <Product/>
      <Footer/> */}
    </>
  );
}

export default App;
