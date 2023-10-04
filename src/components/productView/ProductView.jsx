import React, { useEffect, useState } from 'react';
import {instance} from "../../api/axios";
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import {FiChevronRight,FiDisc,FiShoppingCart} from "react-icons/fi";
import "./productview.scss"
import { Container } from '../../utils/utils';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';


const ProductView = () => {
  const {lang}=useSelector(state=>state.language);
  const {t}=useTranslation()
  let ProductId=useParams()
  const [productViewData,setProductViewData]=useState(null);
  const [activImageNumber,setActiveImageNumber]=useState(0);
  const [productCount,setProductCount]=useState(1);
  const[selectedVariant,setSelectedVariant]=useState(0);
  const dispatch =useDispatch()
 
  useEffect(()=>{

    instance(`/product/single-product/${ProductId.id}`)
    .then(response=>setProductViewData(response.data?.singleProduct?.at(0)))
    .catch(err=>console.log(err))
  },[ProductId.id])

function decrement(){
  if(productCount>1){
    setProductCount(productCount-1)
  }

}
function increment(){
  if(productCount<+productViewData?.productSizesAndQuantity[selectedVariant].quantity){
    setProductCount(productCount+1)
  }
 
}
function addToCart(productData){
productData.count=productCount;
productData.selectedSize=productData.productSizesAndQuantity[selectedVariant]
productData.selectIndex=selectedVariant
 dispatch({product: productData,type:"ADD_TO_CART"})
 console.log(selectedVariant)
}





console.log(selectedVariant)

  return (
    <Container>
      <div className='product-view__wrapper'  >
<div className="product-view__images">

  <div className="main-image">
    <img   src={productViewData?.productImages[activImageNumber]} alt=""   />
  </div>
  <div className="sub-images">
{
  productViewData?.productImages.map((subImage ,ind)=>
<img  key={uuidv4()} style={ind===activImageNumber? {border:"2px solid dodgerblue"}:{border:"2px solid transparent"}}    width={100} height={100}   src={subImage} alt=""  onClick={ ()=>  setActiveImageNumber(ind)}  />
    
  )
}
  </div>
</div>
<div className="product-view__content" >
<h1 className="product-view__title"  >{ lang==="uz"?  productViewData?.productName_uz:productViewData?.productName_ru}</h1>
<div className="product-view__category">
  <p className="product-view__maincategory">{lang==="uz" ? productViewData?.productMainCategory_uz:productViewData?.productMainCategory_ru}</p> <FiChevronRight/> <p className="product-view__subcategory">
    { lang==="uz" ?  productViewData?.productSubCategory_uz:productViewData?.productSubCategory_ru}
  </p>
</div>

<div className="size-quantity">

  <h2> {t("product-view.store")} <span>{productViewData?.productSizesAndQuantity[selectedVariant].quantity}</span>  </h2>
<h3>
{t("product-view.size")}
<select value={selectedVariant} onChange={(e)=>{
    setSelectedVariant(+e.target.value)
    setProductCount(1)
    }}  >
{
  productViewData?.productSizesAndQuantity.map((ProductViewSize ,ind)=>
  
  <option value={ind}  key={uuidv4()}  >{ ProductViewSize.size} </option>
  
  )
}

  </select>
</h3>
</div>
<p className='product-view__price'  > <strong>{productViewData?.productSizesAndQuantity[selectedVariant].price}</strong>  </p>
{
 lang==="uz" ? productViewData?.productDescription_uz.map(description=>
    <p  key={uuidv4()}   className="product-view__description"><FiDisc/>{ description}  </p>
  ) :productViewData?.productDescription_ru.map(description=>
    <p key={uuidv4()}   className="product-view__description"><FiDisc/>{ description}  </p>
  ) 
} 


<div className="product-view__count">

<div className='counter' >
 <p > {t("product-view.amount")}</p>
<div className="item-count">
<button  onClick={decrement} >-</button>
  <span>{productCount}</span>
  <button  onClick={increment} >+</button>
</div>
</div>
<div className="total-price">
  <p>{t("product-view.finalprice")}</p>
    <p className='product-view__totalprice'  >  {productCount*productViewData?.productSizesAndQuantity[selectedVariant].price}  CУМ </p>

</div>

<div>
  <button className='product-view__btn' onClick={()=> addToCart(productViewData)}  > <FiShoppingCart/> {t("card.addtocart")}</button>
</div>
</div>



</div>


    </div>
    </Container>
  )
}

export default ProductView