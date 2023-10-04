import React from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const ScrollToTop = () => {
const location =useLocation()
useEffect(()=>{
window.scroll(0,0)

},[location.pathname])
  return null
}

export default ScrollToTop