import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import "./orders.scss"
import { useRef } from 'react';

const Orders = () => {
const ref =useRef()
const AddStyle =(ref)=>{
  ref.current.classList.add("active")
  
}



  return (
    <div  className='orders___wrapper'   >

      <ul className='admin-orders-navbar'  >
        <li  ref={ref}  onClick={ ()=> AddStyle (ref)} > <Link to={'/admin/orders/all'}  > All </Link>  </li>
        <li> <Link   to={'/admin/orders/contacted'}   > Contacted</Link>  </li>
        <li> <Link     to={'/admin/orders/notcontacted'}   > NotContacted </Link>  </li>

      </ul>
      <Outlet/>
    </div>
  )
}

export default Orders