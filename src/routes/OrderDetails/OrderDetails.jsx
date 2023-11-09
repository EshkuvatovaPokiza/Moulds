import React from 'react'
import { useLocation } from 'react-router-dom';

import AdminOrderItem from '../../components/AdminOrderItem/AdminOrderItem';
import { useEffect,useState } from 'react';
import { instance } from '../../api/axios';
const OrderDetails = () => {
    let sum =0
    const location=useLocation()

    const [orders ,setOrders]=useState([])
    useEffect(()=>{
  
       instance('/order/all-orders' , {
        headers : {
          Authorization : `Bearer ${localStorage.getItem('admin-auth-token')}` ,
        },
       })
      .then(response =>setOrders(response.data.allOrders))
      .catch(err=>console.log(err));
    },[])
    console.log(orders)
    let contacted =orders?.filter (item => item.contacted===true);
    let notContacted =orders?.filter(item=> item.contacted===false);
    console.log(contacted)
   
  return (
<div>

{
  location.pathname==="/admin/orders/contacted" ? <AdminOrderItem   data={contacted} /> : 
  location.pathname==="/admin/orders/notcontacted"  ? <AdminOrderItem data={notContacted} /> :<AdminOrderItem  data ={orders} />
}


</div>
  )
}

export default OrderDetails