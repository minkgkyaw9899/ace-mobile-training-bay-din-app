import {PayloadAction, createSlice} from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

const countSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    increment: state => {
      state.value++;
    },
    decrement: state => {
      state.value--;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
    decrementByAmount: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const {increment, incrementByAmount, decrement, decrementByAmount} =
  countSlice.actions;

export default countSlice.reducer;
