import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';

export interface Product {
  id: string;
  name: string;
  created_at: Date;
  updated_at: Date;
}

export interface ProductStore {
  name: string;
}

const initialState: Product[] = [];

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    store(state: Product[], action: PayloadAction<ProductStore>) {
      const {name} = action.payload;

      state.push({
        id: uuidv4(),
        name,
        created_at: new Date(),
        updated_at: new Date(),
      });
    },
    update(state: Product[], action: PayloadAction<Product>) {
      state = state.map((cart: Product) => {
        if (cart.id === action.payload.id) {
          return action.payload;
        }

        return cart;
      });
    },
    delete(state: Product[], action: PayloadAction<string>) {
      state = state.filter((cart: Product) => cart.id !== action.payload);
    },
  },
});

export const productActions = productSlice.actions;

const productReducer = productSlice.reducer;

export default productReducer;
