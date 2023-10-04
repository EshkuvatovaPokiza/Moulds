import React from 'react'
import { Container } from '../../utils/utils';
import {TfiLocationPin} from "react-icons/tfi";
import {FiPhoneCall,FiMail} from "react-icons/fi";
import {FaTelegram,FaFacebook,FaYoutube} from "react-icons/fa"
import "./footer.scss";
import footerLogo from "../images/logo.svg";
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';


const Footer = () => {
  const location=useLocation();
  const exceptionalRoutes=["/login","/admin"]
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
<p> <span><FiPhoneCall/></span> <span>+998 91 186 00 85</span></p>
</div>
<div className="footer__contact-item">
<h1>{t("footer.mail")} </h1>
<p> <span><FiMail/></span><span> erkinjon.hodjaev@gmail.com</span> </p>
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
<div className="medias-item"><FaTelegram/></div>
<div className="medias-item"><FaFacebook/></div>
<div className="medias-item"><FaYoutube/></div>
  </div>
</div>


</div>

<div className="footer__pages">
  <h6>{t("footer.pages-title")}</h6>
  <ul>
    <li>{t("nav.home")}</li>
    <li>{t("nav.partners")}</li>
    <li>{t("nav.aboutus")}</li>
    <li>{t("nav.contact")}</li>
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