import React from 'react';
import { Outlet,Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Private = () => {
  const {token}=useSelector(state=>state.login)
 return token  ?  (
<Outlet/>
  ):<Navigate to={"/login"}  />
}

export default Private