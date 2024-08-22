import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {      
      const {name,cost,image} = action.payload

      const plant = state.items.find(p => p.name === name)

      if (plant) {
        plant.quantity++
      } else {        
        state.items = [...state.items,{name,cost: parseInt(cost.replace(/^\$/,'')),image,quantity: 1}]
      }
    },

    removeItem: (state, action) => {
      const { name } = action.payload
      state.items = state.items.filter(plant => plant.name !== name)
    },

    updateQuantity: (state, action) => {
      const { name,quantity } = action.payload
      
      const plant = state.items.find(plant => plant.name === name)

      if (plant) {
        plant.quantity = quantity
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
