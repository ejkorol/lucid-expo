import * as SecureStore from "expo-secure-store";
import api from "@/lib/api";

export interface ISignin {
  email: string;
  password: string;
};

const setToken = async (token: string) => {
  try {
    await SecureStore.setItemAsync('token', token);
    return token;
  } catch(e) {
    console.error(`An error occured setting the token: ${e}`);
  };
};

const deleteToken = async () => {
  try {
    await SecureStore.deleteItemAsync('token');
    return true;
  } catch(e) {
    console.error(`An error occured deleting the token: ${e}`);
  };
};

export const getToken = async () => {
  try {
    const token = await SecureStore.getItemAsync('token')
    return token;
  } catch(e) {
    console.error(`An error occured getting the token: ${e}`);
  };
};

export const signin = async ({ email, password }: ISignin) => {
  try {
    const token = await api.signin({ email, password });

    if (token) {
      await setToken(token);
      return true;
    }

    return false;
  } catch(e) {
    console.error(`An error occured at signin: ${e}`);
  };
};

export const signout = async () => {
  try {
    await deleteToken();
  } catch(e) {
    console.error(`An error occured at signout: ${e}`);
  };
};
