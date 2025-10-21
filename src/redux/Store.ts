import { configureStore } from "@reduxjs/toolkit";
import selectedClientIds from "./ClienteSlice";

export const store = configureStore({
  reducer: { selectedClientIds },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
