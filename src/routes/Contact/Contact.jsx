import React from 'react';
import {Container} from "../../utils/utils";
import { useTranslation } from 'react-i18next';
import { FiPhone,FiMail } from 'react-icons/fi';
import { TfiLocationPin } from 'react-icons/tfi';
import { FaTelegram,FaYoutube,FaFacebook } from 'react-icons/fa';
import "./contact.scss"

const Contact = () => {
  const {t}=useTranslation()
  return (
    <Container>
      <div className="contact">
<h1> {t("contact.title")}  </h1>
<div className="contact__phone">
   <a href="tel:+998 91 186 00 85"><FiPhone/>  +998 91 186 00 85 </a>
    </div>
    <div className="contact__email">
<span> <a href="mailto:erkinjon.hodjaev@gmail.com">   <FiMail/> erkinjon.hodjaev@gmail.com </a> </span>
</div>
<p className='contact__loaction'  > <span><TfiLocationPin/></span> <span> {t("footer.location")}</span></p>
<div className="contact-social">
  <p className='contact__follow'  > {t("contact.follow")} </p>
  <div className="contact-medias">
<div className="contact__medias-item"><a href="https://web.telegram.org/a/"><FaTelegram/>  </a></div>
<div className="contact__medias-item"><a href="https://www.facebook.com/"> <FaFacebook/>  </a></div>
<div className="contact__medias-item"><a href="https://www.youtube.com/">  <FaYoutube/>  </a></div>
  </div>
</div>
<iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d192799.77073852427!2d71.4798093!3d40.9706095!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1697251047141!5m2!1sen!2s" style={ {width:"100%",height:"450px", border:"0",allowfullscreen:"", loading:"lazy",referrerpolicy:"no-referrer-when-downgrade" } }   ></iframe>


      </div>
    </Container>
  )
}

export default Contact