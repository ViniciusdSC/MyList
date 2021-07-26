import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';

enum CartStatus {
  current = 'current',
  closed = 'closed',
}

export interface Cart {
  id: string;
  establishment_id: string | null;
  status: CartStatus;
  created_at: Date;
  updated_at: Date;
}

export interface CartStore {
  establishment_id: string | null;
  status: CartStatus;
}

const initialState: Cart[] = [
  {
    id: uuidv4(),
    establishment_id: null,
    status: CartStatus.current,
    created_at: new Date(),
    updated_at: new Date(),
  },
];

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    store(state: Cart[], action: PayloadAction<CartStore>) {
      const {establishment_id, status} = action.payload;

      state.push({
        id: uuidv4(),
        establishment_id,
        status,
        created_at: new Date(),
        updated_at: new Date(),
      });
    },
    update(state: Cart[], action: PayloadAction<Cart>) {
      state = state.map((cart: Cart) => {
        if (cart.id === action.payload.id) {
          return action.payload;
        }

        return cart;
      });
    },
    delete(state: Cart[], action: PayloadAction<string>) {
      state = state.filter((cart: Cart) => cart.id !== action.payload);
    },
  },
});

export const cartActions = cartSlice.actions;

const cartReducer = cartSlice.reducer;

export default cartReducer;
