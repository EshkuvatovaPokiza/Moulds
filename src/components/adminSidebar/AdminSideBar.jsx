import React from 'react';
import "./AdminSideBar.scss";
import sideBarImage from "../images/logo.svg";
import { useTranslation } from 'react-i18next'
import i18n from '../language/i18next';
import {useDispatch} from "react-redux";
import flagUzb from "./../images/flag.svg"
import flagRu from "./../images/flags.png";
import {MdAdminPanelSettings} from "react-icons/md";
import {FiShoppingCart,FiMenu,FiPlus} from "react-icons/fi"
import {IoAnalyticsOutline,IoExitOutline} from "react-icons/io5"
import { Link } from 'react-router-dom';

const AdminSideBar = () => {
    const dispatch=useDispatch()
    function changeLanguage(selectedLangCode){
        i18n.changeLanguage(selectedLangCode)
       dispatch({language_code:selectedLangCode,type:"CHANGE_LANG"})
        }
      
  return (
    <div className='admin-sidebar'  >
<div className="admin-sidebar__image">
   <Link  to={"/"} >  <img src={sideBarImage} alt="" /> </Link>
</div>
<div className="admin-sidebar__language">
<div className="language">
<div className="flag-uz"      ><img src={flagUzb} alt=""    onClick={()=>{ changeLanguage("uz")}}  /></div>
<div className="flag-ru"><img src={flagRu} alt=""   onClick={()=>changeLanguage("ru")}     /></div> 
</div>
</div>
<div className="admin-sidebar__title">
    <div className="admin-sidebar__icon">   <MdAdminPanelSettings/> </div>
    <div className="admin-sidebar__name">
        <h3>6270f64b</h3>
        <p>Администратор</p>
    </div>
</div>

<ul className="admin-sidebar__menu">
<li><Link to={"/admin/orders/all"} className=''> <button><FiShoppingCart/>  Заказы </button></Link></li>
<li> <Link to={"/admin/manage"}   ><button><FiMenu/>   Управление продуктом </button></Link> </li>
<li className='admin-sidebar__create'  ><Link to={"/admin/create"}  > <button> <FiPlus/> Создание продукта </button>  </Link></li>
<li> <Link to={"/admin/analytics"}   ><button> <IoAnalyticsOutline/> Аналитика </button></Link></li>


</ul>
<div className="admin-sidenar__exit">
  <IoExitOutline/> Bыйти из системы  
</div>


    </div>
  )
}

export default AdminSideBar