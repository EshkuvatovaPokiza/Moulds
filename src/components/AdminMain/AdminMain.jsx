import React from 'react';
import "./AdminMain.scss";
import {FiEdit} from "react-icons/fi";

const AdminMain = () => {
  return (
    <div className='admin-main'  >
<form  className='admin-main__form'  >
<h1>Создать продукт</h1>
<input type="text" className="admin-main__product-title"  placeholder='Название продукта'  />
<input type="text" className="admin-main__product-info"  placeholder='Информация о продукте' />
<div className="admin-product__quantity">
    <input type="text" className="admin-main__product-size"  placeholder='Размеры продукта'  />
    <input type="text" className="admin-main__product-price" placeholder='Последняя цена товара'  />
    <div  className='cart__item-btn'  > <button  >-</button>   <p>0</p> <button     >+</button>  </div>
</div>
<div className="admin-main__select">
    <select  className="admin-main__maincategory">
        <option value=""> Main-category        </option>
    </select>
    <select  className="admin-main__subcategory">
        <option value=""> Sub-category         </option>
    </select>
</div>
<div className="admin-main__image">
<input type="file"  accept="image/.jpeg, .png, .jpg"  className='admin-main__image-input'  />

</div>


</form>

<button className='admin-main__edit-btn' > <FiEdit/> Редактировать </button>
    </div>
  )
}

export default AdminMain