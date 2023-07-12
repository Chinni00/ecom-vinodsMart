import { createSlice } from "@reduxjs/toolkit";

const initialState={
  items: [],
  totalQuantity: 0,
  subTotal:0,
  changed:false,
  token:localStorage.getItem('token'),
  isLoading:false
}
const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    setLoader(state,action){
       state.isLoading=action.payload
    },
    setToken(state,action){
       state.token=action.payload
    },
    resetCart(state,action){
      state.items=[];
      state.totalQuantity=0;
      state.subTotal=0;
      state.changed=false;
    },
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
       state.subTotal=state.subTotal+newItem.price;
      state.changed=true;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          rating:newItem.rating.rate,
          image:newItem.image,
          name: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
       state.subTotal-=existingItem.price;
      state.changed=true
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice=existingItem.totalPrice - existingItem.price
      }
    },
  },
});


export const cartActions = cartSlice.actions;

export default cartSlice;
