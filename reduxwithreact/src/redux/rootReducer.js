import { combineReducers } from "redux";
import cakeReducer from "./cakes/cakeReducers";
import iceCreamReducer from "./icecream/iceCreamReducers";
import userReducer from "./user/userReducers";

const rootReducer=combineReducers({
    
    cake: cakeReducer,
    iceCream:iceCreamReducer,
    user:userReducer
})

export default rootReducer;