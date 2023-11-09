
const initialState={
 products:[],


}


const CartReducer=(state=initialState, action)=>{
   console.log(action)
   console.log(state)
  
   switch(action.type){
    case "ADD_TO_CART":
   
        return ({
        products:[...state.products,action.productData]
        
        })
        case "DELETE_ALL":
       return ({
         products:[]
        
         })
         case "DELETE_ONE":
            const newCart =[...state.products]
            newCart.splice( action.index, 1, )
            
            return({
               products:newCart
            })
      
     default:
          return state
   }
     

        
    



}
export {CartReducer}