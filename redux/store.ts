import { configureStore } from "@reduxjs/toolkit";
import signupSlice from "./slices/signupSlice";

const store = configureStore({
  reducer: {
    signup: signupSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
