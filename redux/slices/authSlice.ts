import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isLoggedIn: boolean;
  isOnboarded: boolean;
}

const initialState: AuthState = {
  isLoggedIn: false,
  isOnboarded: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateAuth(state, action: PayloadAction<Partial<AuthState>>) {
      return { ...state, ...action.payload };
    },
    resetAuth() {
      return initialState;
    },
  },
});
export const { updateAuth, resetAuth } = authSlice.actions;
export default authSlice.reducer;
