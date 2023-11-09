import React from 'react'
import { Container } from '../../utils/utils';
import {TfiLocationPin} from "react-icons/tfi";
import {FiPhoneCall,FiMail} from "react-icons/fi";
import {FaTelegram,FaFacebook,FaYoutube} from "react-icons/fa"
import "./footer.scss";
import footerLogo from "../images/logo.svg";
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';


const Footer = () => {
  const location=useLocation();
  const exceptionalRoutes=["/login","/admin", "/admin/orders","/admin/create","/admin/create" , "/admin/orders/all", "/admin/orders/contacted", "/admin/orders/notcontacted"]
  const {t}=useTranslation()
  return !exceptionalRoutes.includes(location.pathname)  ? (
    <div className='footer'  >
      <Container>
<div className="footer__wrapper">
<div className="footer__contnact">
<div className="footer__contact-item">
<h1>{t("footer.location-title")} </h1>
<p> <span><TfiLocationPin/></span> <span> {t("footer.location")}</span></p>
</div>
<div className="footer__contact-item">
<h1>{t("footer.contact")} </h1>
<p><a href="tel:+998 91 186 00 85"> <span><FiPhoneCall/></span> <span>+998 91 186 00 85</span></a></p>
</div>
<div className="footer__contact-item">
<h1>{t("footer.mail")} </h1>
<p><a href="mailto:erkinjon.hodjaev@gmail.com">  <span><FiMail/></span><span> erkinjon.hodjaev@gmail.com</span>  </a></p>
</div>
  
</div>


<div className="footer__info">
<div className="footer__logo">
<div className="footer__logo-img">
  <img src={footerLogo} alt="" />
</div>
<p>
{t("footer.tools")}
</p>
<div className="social-media">

  <h6>{t("footer.social-title")}</h6>
  <div className="medias">
<div className="medias-item"><a href="https://web.telegram.org/a/"><FaTelegram/>  </a></div>
<div className="medias-item"><a href="https://www.facebook.com/"> <FaFacebook/>  </a></div>
<div className="medias-item"><a href="https://www.youtube.com/">  <FaYoutube/>  </a></div>
  </div>
</div>


</div>

<div className="footer__pages">
  <h6>{t("footer.pages-title")}</h6>
  <ul>
    <li>   <Link to={"/"}  >{t("nav.home")} </Link> </li>
    <li><Link to={"/partners"}  >{t("nav.partners")}</Link></li>
    <li> <Link to={"/aboutus"}  >  {t("nav.aboutus")} </Link>  </li>
    <li><Link to={"/contact"}  >{t("nav.contact") }</Link> </li>
  </ul>
</div>

<div className="footer__offers">
  <h6>{t("footer.offers-title")}</h6>
  <p>
{t("footer.offers")}


  </p>
</div>


</div>


</div>


      </Container>
    </div>
  ):<></>
}

export default Footer