import React, { useEffect, useState } from 'react';
import "./cart.scss";
import { useSelector ,useDispatch} from 'react-redux';
import { useTranslation } from 'react-i18next';
import { FiChevronRight } from "react-icons/fi";
import {PiShoppingCart} from "react-icons/pi"
import { Link, useLocation } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import CartImage from "../images/cartempty.png";
import {RiDeleteBin5Line} from "react-icons/ri"



const Cart = () => {
  const exceptionalRoutes = ["/login", "/admin" , "/admin/orders","/admin/create" , "/admin/orders/all", "/admin/orders/contacted", "/admin/orders/notcontacted"]
  const loaction = useLocation()
  const { lang } = useSelector(state => state.language);
  const { t } = useTranslation()
  const [isCartOpen, setisCartOpen] = useState(false);
  // const [cartItemCount,setcartItemCount]=useState(1);
  const CartproductData = useSelector(state => state.cart.products)
  const total = CartproductData?.map(product => product?.count).reduce((a, b) => a + b, 0);
  const totalcost = CartproductData?.map(product => product.count *  +product.productSizesAndQuantity[product.selectedSize].price).reduce((a, b) => a + b, 0)
  console.log(CartproductData)


  const dispatch =useDispatch()
  const DeleteAllProducts =()=>{
    dispatch({type:"DELETE_ALL"})
    
  }
  const DeleteOne =(index)=>{
    dispatch({ index, type:"DELETE_ONE"})
  }



function StopScroll(cartState){
cartState===true ? document.body.style.overflowY="hidden" : document.body.style.overflow="auto"
}
  function decreaseCount(cartItem,i){
  
    if(cartItem[i]?.count>1){
      setcartItemCount(cartItem[i]?.count-1)
    }
  
  }
  function IncreaseCount(cartItem,i){
    if(cartItem[i]?.count<  +cartItem[i]?.productSizesAndQuantity[cartItem.selectedSize].quantity){
      setcartItemCount(cartItem[i]?.count+1)
    }
   
  }
  function ScrollToTop(){
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }








  return !exceptionalRoutes.includes(location.pathname) ? (

<>


<div className={isCartOpen===true ?  "cart-background": "cart-background-none"}></div>
<div className={isCartOpen ? "cart  cart--active" : "cart"}>
{
  CartproductData?.length>0?  <div className="cart__wrapper">
<div className="title-btn">  
<h1> {t("cart.title")}</h1>
<button className="delete-all" onClick={DeleteAllProducts}  > {t("cart.delete-all")}  </button>
</div>

 
    <div className="cart__item">
      {
        CartproductData?.map( (cartproduct,index) =>
          <div className="cart-product" key={uuidv4()}   >
            <div className="delete-one"  onClick={ ()=> DeleteOne(index)}  > <RiDeleteBin5Line/> </div>
            <img src={cartproduct?.productImages[0]} alt="" width={"120px"} height={"120px"} />

            <div className="cart-product__info">
              <p className='cart-product__title'  >{lang === "uz" ? cartproduct?.productName_uz : cartproduct?.productName_ru}   </p> <FiChevronRight /> <p className='cart-product__selected'  >  { cartproduct?.productSizesAndQuantity[cartproduct?.selectedSize].size}</p>
            </div>
            <strong className='cart-product__price' > {cartproduct?.productSizesAndQuantity[cartproduct?.selectedSize].price}  </strong>
            <div className="cart__btn">
              <p > {t("product-view.amount")}</p>

              <div className='cart__item-btn'  > <button onClick={()=> decreaseCount(cartproduct,index) } >-</button>   <p>{cartproduct.count}</p> <button  onClick={()=>IncreaseCount(cartproduct,index)}   >+</button>  </div>
            </div>



          </div>

        )
      }
    </div>


    <div className="cart__order">
      <p > {t("product-view.amount")}  {total} </p>
<p> {totalcost} CУМ  </p>

      <form className="cart__form">

        <input type="text" placeholder={t("cart.input-name")} />
        <input type='tel' placeholder='Телефон (991234567)' />
        <button type='submit'  >{t("cart.btn")}  </button>
      </form>

    </div>
  </div> : <div className="cart__wrapper">
  <h1> {t("cart.title")}</h1>
 <div  className='cart-empty__wrapper'  >
 
  <p> {t("cart.empty")}</p>
  <img src={CartImage} alt="" />
  <p onClick={()=>setisCartOpen(false)}  ><Link  to={"/"} > {t("cart.buy")} </Link>  </p>


 </div>

  </div>
}
     
     

      <div className={  isCartOpen===true ? "cart-toggle-none" :"cart-toggle" } onClick={() => {  setisCartOpen(true) ;
    StopScroll(isCartOpen);
    ScrollToTop();
  
  }
    }    > <span> <PiShoppingCart/>  <p className='cart-count'  >{total}</p>   </span>  <p className='cart-price'  > {totalcost}  CУМ  </p>    </div> 
      <button className='cart-close'  onClick={ ()=> setisCartOpen(false)}  > x </button>
    </div>



</>
  ) : <></>
}

export default Cart