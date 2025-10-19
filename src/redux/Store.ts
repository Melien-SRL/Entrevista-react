import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

type FlagState = { value: boolean };
const initialState: FlagState = { value: false };

const flagSlice = createSlice({
  name: "flag",
  initialState,
  reducers: {
    set(state, action: PayloadAction<boolean>) {
      state.value = action.payload;
    },
    toggle(state) {
      state.value = !state.value;
    },
  },
});

export const { set, toggle } = flagSlice.actions;

const store = configureStore({
  reducer: {
    flag: flagSlice.reducer,
  },
});

export default store;

type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = typeof store.dispatch;
