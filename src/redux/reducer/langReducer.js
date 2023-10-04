const initialState ={
    lang:localStorage.getItem("lang")
}

 const langReducer=(state=initialState,action)=>{

    switch(action.type) {
        case "CHANGE_LANG" :
      return({
        lang:action.language_code
      })
      default:
        return state

        
    }
}

export {langReducer}