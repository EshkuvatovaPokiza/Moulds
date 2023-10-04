import { combineReducers } from "redux";
import{ CartReducer} from "./CartReducer";
import { langReducer } from "./langReducer";
import { loginReducer } from "./loginReducer";




const rootReducer=combineReducers({
   cart:   CartReducer,
   language: langReducer,
   login: loginReducer
})

export default rootReducer