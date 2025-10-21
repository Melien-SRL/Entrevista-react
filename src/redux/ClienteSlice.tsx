import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type State = number[];

const initialState: State = [1, 2];

const selectedClientIdsSlice = createSlice({
  name: "selectedClientIds",
  initialState,
  reducers: {
    add(state, action: PayloadAction<number>) {
      state.push(action.payload);
    },
    remove(state, action: PayloadAction<number>) {
      return state.filter((id) => id !== action.payload);
    },
    clear() {
      return [];
    },
  },
});

export const { add, remove, clear } = selectedClientIdsSlice.actions;
export default selectedClientIdsSlice.reducer;
