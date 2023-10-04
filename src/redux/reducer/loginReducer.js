const initialState ={
    admin:null,
    token:localStorage.getItem("admin-auth-token") || "",
    isLogged:false
}
const loginReducer=(state=initialState,action)=>{
   switch(action.type){
  
    case "LOGIN_USER":
        localStorage.setItem("admin-auth-token",action.payload.token)
        return ({
            admin:action.payload.user,
            token:action.payload.token,
            isLogged:true
        })
        default :
        return state
   }
}
export {loginReducer}