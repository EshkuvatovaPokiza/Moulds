import React from 'react';
import "./nav.scss";
import logo from "./../images/logos.svg";
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import { Container } from '../../utils/utils';
import Aside from '../aside/Aside';
import Search from '../search/Search';
import { useTranslation } from 'react-i18next';


const Nav = () => {
  const location=useLocation()
  const exceptionalRoutes =["/login","/admin"]
  const {t} =useTranslation()
  return !exceptionalRoutes.includes(location.pathname) ?(
<Container>
<div className='main-nav'  >
   
   <div className="logo-category">
     <div className="logo"><img src={logo} alt="" /></div>
     
   </div>
   <div className="search-menu">
  <Search/>

     
   <div className="sub__nav-menu">
  
 <Aside   />


  <div className="subnavigation__menu">
  <Link to={'/'}  >{t("nav.home")}</Link>
  <Link  to={"/partners"} >{t("nav.partners")}</Link>
  <Link to={"/aboutus"} >{t("nav.aboutus")}</Link>
  <Link to={"/contact"}  >{t("nav.contact")}</Link>
  </div>
  
</div>

 
   </div>

 
 
 
 
 
     </div>
     


</Container>
  ):<></>
}

export default Nav