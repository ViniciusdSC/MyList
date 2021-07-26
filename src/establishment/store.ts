import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';

export interface Establishment {
  id: string;
  name: string;
  lat: number;
  lng: number;
  created_at: Date;
  updated_at: Date;
}

export interface EstablishmentStore {
  name: string;
  lat: number;
  lng: number;
}

const initialState: Establishment[] = [];

export const establishmentSlice = createSlice({
  name: 'establishment',
  initialState,
  reducers: {
    store(state: Establishment[], action: PayloadAction<EstablishmentStore>) {
      const {name, lat, lng} = action.payload;

      state.push({
        id: uuidv4(),
        name,
        lat,
        lng,
        created_at: new Date(),
        updated_at: new Date(),
      });
    },
    update(state: Establishment[], action: PayloadAction<Establishment>) {
      state = state.map((cart: Establishment) => {
        if (cart.id === action.payload.id) {
          return action.payload;
        }

        return cart;
      });
    },
    delete(state: Establishment[], action: PayloadAction<string>) {
      state = state.filter((cart: Establishment) => cart.id !== action.payload);
    },
  },
});

export const establishmentActions = establishmentSlice.actions;

const establishmentReducer = establishmentSlice.reducer;

export default establishmentReducer;
