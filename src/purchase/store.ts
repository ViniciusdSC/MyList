import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';

export interface Purchase {
  id: string;
  cart_id: string;
  product_id: string;
  created_at: Date;
  updated_at: Date;
}

export interface PurchaseStore {
  cart_id: string;
  product_id: string;
}

const initialState: Purchase[] = [];

export const purchaseSlice = createSlice({
  name: 'purchase',
  initialState,
  reducers: {
    store(state: Purchase[], action: PayloadAction<PurchaseStore>) {
      const {cart_id, product_id} = action.payload;

      state.push({
        id: uuidv4(),
        cart_id,
        product_id,
        created_at: new Date(),
        updated_at: new Date(),
      });
    },
    update(state: Purchase[], action: PayloadAction<Purchase>) {
      state = state.map((cart: Purchase) => {
        if (cart.id === action.payload.id) {
          return action.payload;
        }

        return cart;
      });
    },
    delete(state: Purchase[], action: PayloadAction<string>) {
      state = state.filter((cart: Purchase) => cart.id !== action.payload);
    },
  },
});

export const purchaseActions = purchaseSlice.actions;

const purchaseReducer = purchaseSlice.reducer;

export default purchaseReducer;
