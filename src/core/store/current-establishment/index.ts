import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Establishment} from 'establishment/store';

const initialState: Establishment | null = null;

export const currentEstablishmentSlice = createSlice({
  name: 'current-establishment',
  initialState,
  reducers: {
    setCurrentEstablishment(
      state: Establishment | null,
      action: PayloadAction<Establishment>,
    ) {
      state = action.payload;
    },
  },
});

export const currentEstablishmentActions = currentEstablishmentSlice.actions;

const currentEstablishmentReducer = currentEstablishmentSlice.reducer;

export default currentEstablishmentReducer;
