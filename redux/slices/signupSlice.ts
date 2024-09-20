import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SignupState {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  birthDate: string;
  birthTime: string;
  birthCountry: string;
  birthState: string;
  birthCity: string;
  mbti: string;
}

const initialState: SignupState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  birthDate: "",
  birthTime: "",
  birthCountry: "",
  birthState: "",
  birthCity: "",
  mbti: "",
};

const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    updateSignup(state, action: PayloadAction<Partial<SignupState>>) {
      return { ...state, ...action.payload };
    },
    resetSignup() {
      return initialState;
    },
  },
});

export const { updateSignup, resetSignup } = signupSlice.actions;
export default signupSlice.reducer;
