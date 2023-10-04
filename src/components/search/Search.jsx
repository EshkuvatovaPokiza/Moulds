import React from 'react';
import { useEffect,useState } from 'react';
import {FiSearch} from "react-icons/fi";
import { Container } from '../../utils/utils';
import "./search.scss";
import {instance} from "../../api/axios";
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import noResult from "../images/resultno.png";
import { useTranslation } from 'react-i18next';

const Search = () => {
  const {t}=useTranslation()
  const[inputSearch,setinputSearch]=useState("");
  const [searchResult,setsearchResult]=useState([])

    useEffect(()=>{
instance(`product/search/${inputSearch}`)
.then(response=>setsearchResult(response.data))
.catch(err=>{
   
  console.log(err)
 setsearchResult([])
}

    )


    },[inputSearch])
  
  return (
  <Container>    <div className="search-input">
 
  <form  className='nav-search-form'  >
  <input type="text" placeholder={t("search.placeholder")}  value={inputSearch}   onChange={(e)=>setinputSearch(e.target.value)}   />
  <button> <FiSearch/>  </button>

  </form>
{
   searchResult.length>0  || inputSearch.length!=0  ? <div className="search-results">
<div className="search-results__content">
    <p className="results">Қидириш натижалари: <span> #{inputSearch} </span> </p>
    <p className="number-of-results"> {searchResult.length}  Натижа  </p>
    <p className="search-reset"  onClick={()=>{
        setsearchResult([])
        setinputSearch("")}}   >Бекор қилиш</p>
</div>


{
    searchResult.map(searchedItem=>

  <Link  to={`/productview/${searchedItem._id}`}   >
    <div className='search-results__item'  key={uuidv4() }  onClick={()=>setinputSearch("")}  >  
       <img src={searchedItem.productImages[0]} alt="" /> 
       <p> {searchedItem.productName_uz}  </p>
       <strong>  {`${searchedItem.productSizesAndQuantity.length==1? searchedItem.productSizesAndQuantity[0].price :"" }   ${searchedItem.productSizesAndQuantity.length>1 ? searchedItem.productSizesAndQuantity[0].price + "-" + searchedItem.productSizesAndQuantity.reverse()[0].price :"" } CУМ  `}   </strong>
     
    </div>
 
  
  
  </Link>
 

    )
}
{  searchResult.length===0 && inputSearch.length!=0? 
<div className="no-result__container"><  img className='no-result__image'     src={noResult} alt="" /></div>  : null

}
    
   </div> :<></>
}



</div>  </Container>
  )
}

export default Search