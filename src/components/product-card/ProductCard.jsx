import React, { useEffect, useState } from 'react';
import "./productcard.scss";
import { SliderButton } from '../../utils/utils';
import { Link } from 'react-router-dom';
import { FiChevronRight, FiShoppingCart } from 'react-icons/fi';
import {FaRegHandPointUp} from "react-icons/fa";
import {t} from "i18next";
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {useDispatch} from "react-redux"

const ProductCard = ({productData}) => {
 
  const dispatch =useDispatch()
  const {lang}=useSelector(state=>state.language)
  const {t}=useTranslation()

function addToCart(productData){
  
  productData.count=1
productData.selectedSize=0

  dispatch({product: productData,type:"ADD_TO_CART"})
}


  return (
    <div  className='product-card'  >
<Link to={`/productview/${productData._id}`}  > <img src={ productData.productImages[0]}   alt=""   />  </Link>
<h3 title={productData.productName_uz}  >  {lang==="uz" ? productData.productName_uz.length>20 ? productData.productName_uz.slice(0,20)+ "..." :productData.productName_uz   :productData.productName_ru.length>20 ? productData.productName_ru.slice(0,20)+ "..." :productData.productName_ru}</h3>
<div className="product-card__categories">
  <span className="product-card__main" title={ lang==="uz"?  productData.productMainCategory_uz: productData.productMainCategory_ru}  > {lang==="uz"? productData.productMainCategory_uz.length>20 ?productData.productMainCategory_uz.slice(0,15)+ "...":productData.productMainCategory_uz : productData.productMainCategory_ru.length>20 ?productData.productMainCategory_ru.slice(0,15)+ "...":productData.productMainCategory_ru } </span> <FiChevronRight/> <span className='product-card__sub' title={ lang==="uz"? productData.productSubCategory_uz:productData.productSubCategory_ru} > { lang==="uz" ?productData.productSubCategory_uz.length>20? productData.productSubCategory_uz.slice(0,15) + "..." :productData.productSubCategory_uz:productData.productSubCategory_ru.length>20? productData.productSubCategory_ru.slice(0,15) + "..." :productData.productSubCategory_ru }  </span>
</div>
<div className="product-card__price"   >
  <span>  {`${productData.productSizesAndQuantity.length==1? productData.productSizesAndQuantity[0].price :"" }   ${productData.productSizesAndQuantity.length>1 ? productData.productSizesAndQuantity[0].price + "-" +productData.productSizesAndQuantity.reverse()[0].price :"" } CУМ  `}   </span>
  {/* { `${ productData.productData.productSizesAndQuantity[0].price}  ${ productData.productData.productSizesAndQuantity>1 ?  "-" +  productData.productData.productSizesAndQuantity[productData.productData.productSizesAndQuantity.length-1].price : ''}    `  }  */}
</div>

{
  productData.productSizesAndQuantity.length > 1? <Link to={`/productview/${productData._id}`   }  > <div className="product-cart-link__btn"   ><SliderButton   text={ t("card.choose")}  icon={ <FaRegHandPointUp/>} /></div> </Link> : <div className="main-window__btn" onClick={() => addToCart(productData)}  > <SliderButton    text={t("card.addtocart")}  icon={ <FiShoppingCart/>}   /></div>
}




    </div>
  )
}

export default ProductCard