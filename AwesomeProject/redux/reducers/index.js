import CartReducer from "./cartReducer";
import { combineReducers } from "redux";

const reducer = combineReducers({
    CartReducer:CartReducer
})
export default function rootReducer(state,action){
    return reducer(state,action)
}