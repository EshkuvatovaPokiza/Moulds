import './App.scss';
import { Routes ,Route, useLocation} from 'react-router-dom';
import Home from './routes/Home/Home';
import Partners from './routes/Partners/Partners';
import About from './routes/About/About'
import ProductView from './components/productView/ProductView';
import Contact from './routes/Contact/Contact';
import SubNav from './components/sub-nav/SubNav';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import { useEffect,useState } from 'react';
import Aside from './components/aside/Aside';
import ScrollToTop from './components/scrolltotop/ScrollToTop';
import MainCategory from './routes/maincategory/MainCategory';
import SubCategory from './routes/subcategory/SubCategory';
import OfferSection from './components/offer-section/OfferSection';
import Cart from './components/cart/Cart';
import Login from './routes/Login/Login';
import Admin from './routes/Admin/Admin';
import { ToastContainer } from 'react-toastify';
import Private from './routes/Private/Private';


function App() {


  
  return (
    <div className='app'>
    <ScrollToTop/>
   <SubNav/>
   <Nav  />
   <Cart/>
    <Routes>
      <Route path='/' element={<Home/>}  />
      <Route  path='/partners' element={<Partners/>} />
      <Route   path='/aboutus' element={<About/>} />
      <Route  path='/contact'  element={<Contact/>}   />
      <Route path='/productview/:id'  element={<ProductView/>} />
      <Route path='/maincategory/:categoryname' element={<MainCategory/> }/>
      <Route path='/subcategory/:subcategoryname' element={<SubCategory/>}  />
      <Route path='/login'   element={<Login/>}  />
      <Route path='/'  element={<Private/>} >
        <Route   path='/admin'  element={<Admin/>} />
      </Route>
  



     </Routes>
     <ToastContainer  limit={2} />
   <OfferSection/>
   
   <Footer/>
    
    </div>
  )
}

export default App
