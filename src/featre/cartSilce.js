import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    item: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    buyProduct: (state, actions) => {
      const had = state.item.find((e) => (e.id = actions.payload.id));
      if (!had) {
        return (
          (state.item = [
            ...state.item,
            {
              id: actions.payload.id,
              price: actions.payload.price,
              image: actions.payload.image,
              description: actions.payload.description,
              quantity: 1,
            },
          ]),
          (state.totalPrice = state.totalPrice + actions.payload.price)
        );
      } else {
        const newCart = state.item;
        const objIndex = newCart.findIndex((e) => e.id === actions.payload.id);
        if (newCart[objIndex].quanlity) {
          newCart[objIndex].quanlity = 2;
          newCart.totalPrice = newCart.totalPrice + actions.payload.price;
        } else {
          newCart[objIndex].quanlity = newCart[objIndex].quanlity + 1;
          newCart.totalPrice = newCart.totalPrice + actions.payload.price;
        }
      }
    },
    deleteProduct: (state, actions) => {
      const newCart = state.item;
      const objIndex = newCart.findIndex((e) => e.id === actions.payload.id);
      newCart.splice(objIndex, 1);
      return (state.item = [...newCart]);
    },
  },
});

// Action creators are generated for each case reducer function
export const { buyProduct, deleteProduct } = cartSlice.actions;

export default cartSlice.reducer;
