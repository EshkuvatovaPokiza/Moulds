import React from 'react'
import AdminSideBar from '../../components/adminSidebar/AdminSideBar'
import "./Admin.scss"
import { Outlet } from 'react-router-dom'
import AdminProductDetails from '../../components/AdminProductDetails/AdminProductDetails'

const Admin = () => {
  return (
    <div className='admin' >
  <AdminSideBar/>
<Outlet/>
<AdminProductDetails/>



    </div>
  )
}

export default Admin