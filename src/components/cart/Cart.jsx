import React, { useEffect, useState } from 'react';
import "./cart.scss";
import { useSelector } from 'react-redux';
import {useTranslation}  from 'react-i18next';
import {FiChevronRight } from "react-icons/fi";
import { useLocation } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';


const Cart = () => {
  const exceptionalRoutes =["/login","/admin"]
  const loaction=useLocation()
  const {lang}=useSelector(state=>state.language);
  const {t}=useTranslation()
const [isCartOpen,setisCartOpen]=useState(false);
const CartproductData=useSelector(state=>state.cart.product)
console.log(CartproductData)


// const [CartProductData,setCartProductData]=useState([])
// useEffect(()=>{
//   if(productData){
//     setCartProductData([...CartProductData,productData])
//   }
 

// },[productData])
// console.log(CartProductData)






// function DecreaseCount(){
//   if(CartProductData?.count>1){
//     setProductCount(CartProductData?.count-1)
//   }

// }
// function IncreaseCount(){
//   if(CartProductData.count<+ {CartProductData.productd}){
//     setProductCount(CartProductData.count+1)
//   }
 
// }


//   return  !exceptionalRoutes.includes(location.pathname) ? (


// <div className={isCartOpen? "cart  cart--active" : "cart"}>
//   <h1> {t("cart.title")}</h1>
// <div className="cart__wrapper">
// <div className="cart__item">
// {
//   CartProductData?.map(cartproduct=>
//     <div className="cart-product"   key={uuidv4()}   >
//     <img src={cartproduct?.productImages[0]} alt="" width={"120px"}  height={"120px"} />
    
//     <div className="cart-product__info">
//       <p className='cart-product__title'  >{lang==="uz" ? cartproduct?.productName_uz : cartproduct?.productName_ru}   </p> <FiChevronRight/> <p  className='cart-product__selected'  >  {   cartproduct?.selectedSize.size }</p>
//     </div>
//     <strong  className='cart-product__price' > {  cartproduct?.selectedSize.price }  </strong>
//     <div className="cart__btn">
//     <p > {t("product-view.amount")}</p>
    
//     <div  className='cart__item-btn'  > <button  >-</button>   <p>{cartproduct?.count}</p> <button     >+</button>  </div>
//     </div>
    
    
    
//     </div>
  
//   )
// }
// </div>


// <div className="cart__order">
// {/* <p > {t("product-view.amount")}  { }  </p>
// <p>{product.rest?.selectedType.price*product.rest?.count} </p> */}

// <form className="cart__form">

//   <input type="text"  placeholder={t("cart.input-name")}  />
//   <input type="number" placeholder='Телефон (991234567)' />
//   <button  type='submit'  >{t("cart.btn")}  </button>
// </form>

// </div>
// </div>

// <button className='cart-toggle'   onClick={()=>setisCartOpen(!isCartOpen)}  >Open and click</button>
// </div>


//   ) : <></>
}

export default Cart