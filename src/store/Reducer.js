import { combineReducers } from "redux";
import reducers from "../featre/productSlice";
import cartReducer from "../featre/cartSilce";

const rootReducer = combineReducers({
  add: reducers,
  cart: cartReducer,
});
export default rootReducer;
