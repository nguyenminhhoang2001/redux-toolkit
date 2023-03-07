import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteProduct } from "../../featre/cartSilce";

const CartProduct = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  return <div>a</div>;
};

export default CartProduct;
