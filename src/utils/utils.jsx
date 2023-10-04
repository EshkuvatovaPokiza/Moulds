import React from 'react'
import {FiShoppingCart} from "react-icons/fi"
import "./utils.scss"

const Container = ({children}) => {
  return (
  <div className='container'   >
    {children}
  </div>
  )
}








const SliderButton = ({text ,icon, use}) => {
  return (
    <div  className='product-slider-btn'> 
    {icon} { text }    </div>
  )
}



export {Container,SliderButton}