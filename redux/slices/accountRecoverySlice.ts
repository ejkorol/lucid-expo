import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AccRecoveryState {
  email: string;
  otp: string;
  password: string;
  confirmPassword: string;
}

const initialState: AccRecoveryState = {
  email: "",
  otp: "",
  password: "",
  confirmPassword: "",
};

const accountRecoverySlice = createSlice({
  name: "accRecovery",
  initialState,
  reducers: {
    updateAccRecovery(state, action: PayloadAction<Partial<AccRecoveryState>>) {
      return { ...state, ...action.payload };
    },
    resetAccRecovery() {
      return initialState;
    },
  },
});

export const { updateAccRecovery, resetAccRecovery } =
  accountRecoverySlice.actions;
export default accountRecoverySlice.reducer;
