import React, { Fragment } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { instance } from '../../api/axios';
import { v4 as uuidv4 } from 'uuid';
import ProductSlider from '../product-slider/ProductSlider';
import { Container } from '../../utils/utils';
import "./main.scss"



const Main = () => {

    const [homeReelData,setHomeReelData]=useState([]);

useEffect(()=>{
    let isDataFetched=false;
    instance("/category/category-reel")
    .then(response=>setHomeReelData(response.data))
    .catch(err=>console.log(err))
    return () => {
        isDataFetched = true;
      }
    
    },[])


   
return (
<Container>

<div className='home-product-carousel'   >
        {
            homeReelData.slice(0 ,4).map(category=>
              <Fragment    key={uuidv4()} >

                    <h2 >{category.categoryName_uz}</h2> 
                       <ProductSlider  categoryData={category}    /> 
                


              </Fragment>
                )
        }



    </div>
</Container>
  )
}

export default Main