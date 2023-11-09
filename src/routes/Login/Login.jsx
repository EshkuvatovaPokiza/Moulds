import React from 'react';
import "./Login.scss";
import loginImage from "../../components/images/login.svg"
import { useState } from 'react';
import {FiEye,FiEyeOff} from "react-icons/fi";
import {AiOutlineLoading} from "react-icons/ai"
import {instance} from "../../api/axios";
import { toast} from "react-toastify";
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useNavigate ,Link} from 'react-router-dom';


const Login = () => {
    const {lang}=useSelector(state=>state.language);
    const dispatch=useDispatch()
    const {t}=useTranslation()
    const [isPasswordOpen,setisPasswordOpen]=useState(false);
    const[loginData,setLoginData]=useState({ username:"" ,password:""});
    const [isLoading,setIsLoading]=useState(false);
    const navigate=useNavigate()
  
    function SubmitLoginData(e){
   
     e.preventDefault()
     setIsLoading(true)
     instance.post('/auth/login',{
        username:loginData.username,
        password:loginData.password
     })
     .then(response=>{
        if(response.data.token){
          setIsLoading(false)
          toast.success( t("login.success") )
          dispatch({payload:response.data, type:"LOGIN_USER"})
          navigate("/admin")
           
        }
     })
     .catch(err=>{
        console.log(err)
        setIsLoading(false)
        toast.error( t("login.error") )
     
     }
       )
       setLoginData({username:"",password:""})
    }
  return (
    <div className='login__wrapper'  >
        <div className="login-main">
            <form className="login-form" onSubmit={SubmitLoginData}  >
                <h1>Login</h1>
                <input type="text"  placeholder='Your name' value={loginData.username} required onChange={(e)=>setLoginData({username:e.target.value,password:loginData.password})}  />
              <div className="password__wrapper">   <input type={isPasswordOpen===true? "text": "password"} value={loginData.password}  placeholder='Your password' required  onChange={(e)=>setLoginData({username:loginData.username,password:e.target.value})}  /> {isPasswordOpen===true ? <FiEye onClick={()=>setisPasswordOpen(false)}  />:<FiEyeOff onClick={()=>setisPasswordOpen(true)}  /> }</div>
                <button type='submit' className='login-btn' disabled={isLoading?true:false} >{isLoading&&  <AiOutlineLoading className='loading-icon'   /> } {isLoading?"":"Login"}</button>
            </form>
            <p><Link   to={"/"}  >  {t("nav.home")}  </Link>  </p>
        </div>
        <div className="login-image">

            <img src={loginImage} alt="" />
        </div>

       
    </div>
  )
}

export default Login