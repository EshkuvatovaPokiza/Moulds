import React from 'react'
import flagUzb from "./../images/flag.svg"
import flagRu from "./../images/flags.png"
import {FiPhone,FiMail} from "react-icons/fi"
import { Link, useLocation } from 'react-router-dom'
import "./subnav.scss"
import { Container } from '../../utils/utils'
import { useTranslation } from 'react-i18next'
import i18n from '../language/i18next';
import {useDispatch} from "react-redux";
const SubNav = () => {
  const location=useLocation()
  const exceptionalRoutes =["/login","/admin"]
  const {t}=useTranslation()
  const dispatch=useDispatch()
  function changeLanguage(selectedLangCode){
  i18n.changeLanguage(selectedLangCode)
 dispatch({language_code:selectedLangCode,type:"CHANGE_LANG"})
  }




  return !exceptionalRoutes.includes(location.pathname)? (
<Container>


<div className='sub-nav'  >
<div className="language">
<div className="flag-uz"      ><img src={flagUzb} alt=""    onClick={()=>{ changeLanguage("uz")}}  /></div>
<div className="flag-ru"><img src={flagRu} alt=""   onClick={()=>changeLanguage("ru")}     /></div> 
</div>
<div className="sub-nav__contact">
    <div className="sub-nav__phone">
   <a href="tel:+998 91 186 00 85"><FiPhone/>  +998 91 186 00 85 </a>
    </div>
    <div className="sub-nav__email">
<span> <FiMail/>  mailto:erkinjon.hodjaev@gmail.com </span>
</div>
</div>



    </div>
</Container>


  ) :<></>
}

export default SubNav