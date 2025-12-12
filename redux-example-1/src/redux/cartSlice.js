import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
  itemsById: {}, // { [id]: { id, name, price, quantity } }
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const { id, name, price, quantity } = action.payload;

      const existing = state.itemsById[id];
      if (existing) {
        existing.quantity += quantity;
      } else {
        state.itemsById[id] = { id, name, price, quantity: quantity };
      }
    },
    removeItem(state, action) {
      delete state.itemsById[action.payload];
    },
    setQuantity(state, action) {
      const { id, quantity } = action.payload;
      const item = state.itemsById[id];
      if (!item){
        return;
      }
        
      if (quantity <= 0) {
        delete state.itemsById[id];
      } else {
        item.quantity = quantity
      }
    },
    clearCart(state) {
      state.itemsById = {};
    },
  },
});

export const { addItem, removeItem, setQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

export const selectCartItemsById = (state) => state.cart.itemsById;

export const selectCartItems = createSelector([selectCartItemsById], (itemsById) =>
  Object.values(itemsById)
);

export const selectCartCount = createSelector([selectCartItems], (items) =>
  items.reduce((sum, item) => sum + item.quantity, 0)
);

export const selectCartSubtotal = createSelector([selectCartItems], (items) =>
  items.reduce((sum, item) => sum + item.price * item.quantity, 0)
);