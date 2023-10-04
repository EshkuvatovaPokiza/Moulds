import React from 'react'
import AdminSideBar from '../../components/adminSidebar/AdminSideBar'
import AdminMain from '../../components/AdminMain/AdminMain'
import "./Admin.scss"

const Admin = () => {
  return (
    <div className='admin' >
<AdminSideBar/>
<AdminMain/>


    </div>
  )
}

export default Admin