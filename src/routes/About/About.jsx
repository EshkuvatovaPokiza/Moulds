import React from 'react';
import { Container } from '../../utils/utils';
import  Image from "../../components/images/aboutus.jpg"
import { useTranslation } from 'react-i18next';
import "./About.scss";

const About = () => {
  const {t}=useTranslation()

  return (
  <Container>
      <div className='about'>
      <h1> {t("nav.aboutus")}  </h1>
      <p> {t("aboutus.greeting")} </p>
      <p> {t("aboutus.shop")}  </p>
      <p>  {t("aboutus.delivery")} </p>
     
      <img src={Image} alt="" />
      <p className='range'  > {t("aboutus.range")} </p> 
      <ul>
        <li> {t("aboutus.li1")} </li>
        <li> {t("aboutus.li2")} </li>
        <li> {t("aboutus.li3")} </li>
        <li> {t("aboutus.li4")} </li>
        <li> {t("aboutus.li5")} </li>
        <li> {t("aboutus.li6")} </li>
        <li> {t("aboutus.li7")} </li>
        <li> {t("aboutus.li8")} </li>
      </ul>
    
    
    </div>
  </Container>
  )
}

export default About