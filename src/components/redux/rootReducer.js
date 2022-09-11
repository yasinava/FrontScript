import { combineReducers } from "redux";
import signReducer from "./sign/signReducer";
import shopReducer from "./shop/shopReducer";

const rootReducer = combineReducers({
    signState:signReducer,
    shopState:shopReducer
})

export default rootReducer;