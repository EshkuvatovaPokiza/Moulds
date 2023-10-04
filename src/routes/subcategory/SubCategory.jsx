import React from 'react';
import { instance } from '../../api/axios';
import { useEffect,useState, } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FiChevronRight,FiShoppingCart } from 'react-icons/fi';
import { Container, SliderButton } from '../../utils/utils';
import { FaRegHandPointUp } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
import ProductCard from '../../components/product-card/ProductCard';

const SubCategory = () => {
  const {subcategoryname}=useParams();
  const [SubCategoryData,setSubCategoryData]=useState(null)


useEffect(()=>{
instance(`category/subcategories/${subcategoryname}`)
.then(repsonse => setSubCategoryData(repsonse.data))
.catch(err=>console.log(err))



},[subcategoryname])



  return (
 
<Container  >


<div className="main-category__wrapper">
  <h2  > {SubCategoryData?.subCategoryTranslate.uz}  </h2>

<div className="main-category__grid">

{
  SubCategoryData?.subCategory.map((SubCategoryItem)=>
<ProductCard productData={SubCategoryItem}  />
      )
    }
</div>
 </div>
</Container>





  )
}

export default SubCategory