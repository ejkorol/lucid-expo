import * as SecureStore from "expo-secure-store";
import api from "@/lib/api";

export interface ISignup {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  mbti: string;
  dobDate: string;
  dobTime: string;
  dobLocation: string;
}

export interface ISignin {
  email: string;
  password: string;
}

const setToken = async (token: string) => {
  try {
    await SecureStore.setItemAsync("token", token);
    return token;
  } catch (e) {
    console.error(`An error occured setting the token: ${e}`);
  }
};

const deleteToken = async () => {
  try {
    await SecureStore.deleteItemAsync("token");
    return true;
  } catch (e) {
    console.error(`An error occured deleting the token: ${e}`);
  }
};

export const getToken = async () => {
  try {
    const token = await SecureStore.getItemAsync("token");
    return token;
  } catch (e) {
    console.error(`An error occured getting the token: ${e}`);
  }
};

export const signin = async ({ email, password }: ISignin) => {
  try {
    const token = await api.signin({ email, password });

    if (token) {
      await setToken(token);
      return true;
    }

    return false;
  } catch (e) {
    console.error(`An error occured at signin: ${e}`);
  }
};

export const signup = async (credentials: ISignup) => {
  try {
    const token = await api.signup(credentials);

    if (token) {
      await setToken(token);
      return true;
    }

    return false;
  } catch (e) {
    console.error`An error occured at signup: ${e}`;
  }
};

export const signout = async () => {
  try {
    await deleteToken();
  } catch (e) {
    console.error(`An error occured at signout: ${e}`);
  }
};

export const verify = async (credentials: string) => {
  try {
    const res = await api.verify(credentials);
    return res;
  } catch (e) {
    console.error(`An error occured at verify: ${e}`);
  }
};
