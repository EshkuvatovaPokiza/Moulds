import React from 'react';
import { instance } from '../../api/axios';
import { useEffect,useState, } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/product-card/ProductCard';
import { Link } from 'react-router-dom';
import { FiChevronRight,FiShoppingCart } from 'react-icons/fi';
import { Container, SliderButton } from '../../utils/utils';
import { FaRegHandPointUp } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
import "./maincategory.scss"

const MainCategory = () => {
  const {categoryname}=useParams();
  const [mainCategoryData,setMainCategoryData]=useState()
  console.log(categoryname)

  useEffect(()=>{
instance(`/category/categories/${categoryname}`)
.then(response => setMainCategoryData(response.data))
.catch(err=>console.log(err))


  },[categoryname])

console.log(mainCategoryData)

  return (
   


<Container>


<div className="main-category__wrapper">
  <h2  > {mainCategoryData?.maincategoryTranslate.uz}  </h2>

<div className="main-category__grid">

{
  mainCategoryData?.maincategory.map((mainCategoryItem)=>
<ProductCard  productData={mainCategoryItem}  />
      )
    }
</div>
 </div>
</Container>



   
  )
}

export default MainCategory