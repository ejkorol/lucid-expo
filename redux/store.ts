import { configureStore } from "@reduxjs/toolkit";
import signupSlice from "./slices/signupSlice";
import accountRecoverySlice from "./slices/accountRecoverySlice";

const store = configureStore({
  reducer: {
    signup: signupSlice,
    accRecovery: accountRecoverySlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
