import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Header from './components/Header'
import Home from './Pages/Home';
import ProductListing from './Pages/ProductListing';
import Footer from './components/Footer';
import ProductDetails from './Pages/ProductDetails';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import Cart from './Pages/Cart';
import Checkout from './Pages/Checkout';
import ThankYou from './Pages/ThankYou';
import CustomPrinting from './Pages/CustomPrinting';
import Blog from './Pages/Blog';
import BlogPost from './Pages/BlogPost';

function App() {


  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path={"/"} exact={true} element={<Home />} />
      <Route path={"/productListing"} exact={true} element={<ProductListing />} />
      <Route path={"/product/:id"} exact={true} element={<ProductDetails/>} />
      <Route path={"/login"} exact={true} element={<Login />} />
      <Route path={"/signup"} exact={true} element={<Signup />} />
      <Route path={"/about-us"} exact={true} element={<AboutUs />} />
      <Route path={"/contact-us"} exact={true} element={<ContactUs />} />
      <Route path={"/cart"} exact={true} element={<Cart />} />
      <Route path={"/checkout"} exact={true} element={<Checkout />} />
      <Route path={"/thank-you"} exact={true} element={<ThankYou />} />
      <Route path={"/custom-printing"} exact={true} element={<CustomPrinting />} />
      <Route path={"/blog"} exact={true} element={<Blog />} />
      <Route path={"/blog/:id"} exact={true} element={<BlogPost />} />
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
