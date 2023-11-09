import React from 'react'
import flagUzb from "./../images/flag.svg"
import flagRu from "./../images/flags.png"
import {FiPhone,FiMail} from "react-icons/fi"
import { Link, useLocation } from 'react-router-dom'
import "./subnav.scss"
import { Container } from '../../utils/utils'
import { useTranslation } from 'react-i18next'
import i18n from '../language/i18next';
import {useDispatch, useSelector} from "react-redux";
const SubNav = () => {
  const location=useLocation()
  const exceptionalRoutes =["/login","/admin","/admin/orders","/admin/create","/admin/create" , "/admin/orders/all", "/admin/orders/contacted", "/admin/orders/notcontacted"
]
  const {t}=useTranslation()
  const dispatch=useDispatch()
  function changeLanguage(selectedLangCode){
  i18n.changeLanguage(selectedLangCode)
 dispatch({language_code:selectedLangCode,type:"CHANGE_LANG"})
  }
const {lang}=useSelector(state=>state.language)
console.log(lang)




  return !exceptionalRoutes.includes(location.pathname)? (
<Container>


<div className='sub-nav'  >
<div className="language">
<div className="flag-uz"    style={lang==="uz"  ? {borderBottom: "2px solid dodgerblue"} :null}    ><img src={flagUzb} alt=""    onClick={()=>{ changeLanguage("uz")  } }  /></div>
<div className="flag-ru"    style={lang==="ru"  ? {borderBottom: "2px solid dodgerblue"} :null}    ><img src={flagRu} alt=""   onClick={()=>changeLanguage("ru")}     /></div> 
</div>
<div className="sub-nav__contact">
    <div className="sub-nav__phone">
   <a href="tel:+998 91 186 00 85"><FiPhone/>  +998 91 186 00 85 </a>
    </div>
    <div className="sub-nav__email">
<span> <a href="mailto:erkinjon.hodjaev@gmail.com">   <FiMail/> erkinjon.hodjaev@gmail.com </a> </span>
</div>
</div>



    </div>
</Container>


  ) :<></>
}

export default SubNav