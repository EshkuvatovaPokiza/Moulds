
const initialState={
 product:[]

}


const CartReducer=(state=initialState,action)=>{

   switch(action.type){
    case "ADD_TO_CART":
  
        return ({
         product:[...state.product,action.product]
        })
      
     default:
          return state
   }
     

        
    



}
export {CartReducer}