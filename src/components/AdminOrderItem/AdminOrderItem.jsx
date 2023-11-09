import React, { useState } from 'react';
import {BsFillCartCheckFill} from "react-icons/bs"
import {GoDotFill} from "react-icons/go";
import { FiPhone } from 'react-icons/fi';
import { v4 as uuidv4 } from 'uuid';
import "./AdminOrderItem.scss"
import AdminProductDetails from '../AdminProductDetails/AdminProductDetails';

const AdminOrderItem = ({data}) => {
const [isModalOpen,setIsModalOpen]=useState(false)



  return (
    <div  className='orderitem__container'  >
    {
         data?.map(orderItem =>
            <div className="order-item__wrapper"  key={uuidv4()}  >
    <div className="order-item__client">
      <div className="order-item__upside">
      <div className="order-item__icon">
            <BsFillCartCheckFill/>
        </div>
        <div  className='order-item__client-name'  >
            <h1>{orderItem?.fullname}</h1>
            <h2> {orderItem?.phonenumber}  </h2>
           <div className='connect'>  {orderItem.contacted===true?<p className='connected__status' > <GoDotFill/>  <span>Связались</span> </p> :<p   className='not-connected__status' > <GoDotFill/>  <span>Связались</span> </p>}  </div>
        </div>
      </div>
      <div className='phone-icon'  >  <a href={ `tel: ${orderItem?.phonenumber}`} > <FiPhone/></a> </div>
    </div>
    <div className="order-item__sub">
        <p className='order-time'  >   Время заказа товара: <span> {orderItem?.orderedAt.split("")} </span>  </p>
        <div className="order-item__price">
            <p> Общее количество товаров: <span> {orderItem.orderedproducts.reduce((a, b) => ({quantity: a?.quantity + b?.quantity}))?.quantity} </span>  </p>
            <p> Общая стоимость товара:   <span>   {(orderItem.orderedproducts.reduce((a, b) => ({quantity: a?.quantity + b?.quantity}))?.quantity)* (orderItem.orderedproducts.map(order_product => +order_product.cost * order_product.quantity)?.reduce((a, b)=> a + b))  }  </span>    </p>
        </div>
        <div className="order-item__btns">
            <button className='learn-more'  onClick={()=> {
                 setIsModalOpen(!isModalOpen) 
                 addTocart(orderItem)
            }
             
              }   >Подробнее</button>
            <button className="connected">Связались</button>
            <button className='order-item__delete'  >  Удалить заказ  </button>
        </div>
    </div>
    
            </div>
            
            ) 
    }
    
    
        </div>
  )
}

export default AdminOrderItem