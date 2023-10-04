import React, { useEffect, useState } from 'react';
import { useLocation,useParams } from 'react-router-dom';
import "./Aside.scss";
import {FiGrid,FiChevronRight} from "react-icons/fi";
import { instance } from '../../api/axios';
import {Link} from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';



const Aside = () => {


     let Product=useParams()
     console.log(Product)
    const location=useLocation()
    const [categoryItem,setcategoryItem]=useState({});
    const {lang} =useSelector(state=>state.language);
    const exceptionalRoutes =[`/productview/`,"/login","/admin","/partners","/contact","/aboutus"]
    useEffect(()=>{
instance("category/category-nest")
.then(response=>setcategoryItem(response.data))
.catch(err =>console.log(err)  )

    },[])
 
  
  return  !exceptionalRoutes.includes(location.pathname)? (
       <div className='aside' >
        <p className="aside__item">  <FiGrid/>  Категория  </p>
        <ul className="aside__menu"  >
            {
              lang==="uz" ? categoryItem.mainCategory_uz?.map( (categoryTitle, ind)=>
             <li className="aside__menu-item"  key={uuidv4()}  > <Link  to={`maincategory/${categoryTitle}`}  > {categoryTitle}  </Link>   <FiChevronRight/>  
                  <ul className='subCategory__menu' >
             {
                categoryItem.productSubCategories_uz[ind].map( subCategory =>
                     subCategory.length>0 ?<li className="subcategory__menu-item"   key={uuidv4()}   > <Link  to={`subcategory/${subCategory}`}  > {subCategory }  </Link>  </li>  :<React.Fragment key={uuidv4()}  ></React.Fragment>
                            
                            )
            }
                  </ul>
                    
                    
                    
                     </li>
                  



                    
                ):categoryItem.mainCategory_ru?.map( (categoryTitle, ind)=>
                <li className="aside__menu-item"  key={uuidv4()}  > <Link  to={`maincategory/${categoryTitle}`}  > {categoryTitle}  </Link>   <FiChevronRight/>  
                     <ul className='subCategory__menu' >
                {
                   categoryItem.productSubCategories_ru[ind].map( subCategory =>
                        subCategory.length>0 ?<li className="subcategory__menu-item"   key={uuidv4()}   > <Link  to={`subcategory/${subCategory}`}  > {subCategory }  </Link>  </li>  :<React.Fragment key={uuidv4()}  ></React.Fragment>
                               
                               )
               }
                     </ul>
                       
                       
                       
                        </li>
                     
   
   
   
                       
                   )
               

            }
          
        </ul>


    </div>
  )
:<></>}

export default Aside;