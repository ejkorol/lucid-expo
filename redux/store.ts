import { configureStore } from "@reduxjs/toolkit";
import signupSlice from "./slices/signupSlice";
import accountRecoverySlice from "./slices/accountRecoverySlice";
import authSlice from "./slices/authSlice";

const store = configureStore({
  reducer: {
    signup: signupSlice,
    accRecovery: accountRecoverySlice,
    auth: authSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
