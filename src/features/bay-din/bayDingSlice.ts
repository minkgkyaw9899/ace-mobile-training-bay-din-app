import {PayloadAction, createSlice} from '@reduxjs/toolkit';

const initialState = {
  questionId: 0,
  questionName: '',
  itemNumber: '',
};

const bayDinSlice = createSlice({
  name: 'bayDin',
  initialState,
  reducers: {
    addQuestionData: (
      state,
      action: PayloadAction<{id: number; name: string}>,
    ) => {
      state.questionId = action.payload.id;
      state.questionName = action.payload.name;
    },
    addItemNumber: (state, action: PayloadAction<string>) => {
      state.itemNumber = action.payload;
    },
    resetState: state => {
      state = initialState;
      return state;
    },
  },
});

export const {resetState, addItemNumber, addQuestionData} = bayDinSlice.actions;

export default bayDinSlice.reducer;
