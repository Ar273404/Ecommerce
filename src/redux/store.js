import { configureStore } from "@reduxjs/toolkit";
import amazonReducer from './amazonSlice'
export const store = configureStore({
  reducer: {amazonReducer},
});
