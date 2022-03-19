import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register = createAsyncThunk("auth/register", async (body) => {
  try {
    const { data } = await axios.post("/users/signup", body);
    token.set(data.token);
    return data;
  } catch (error) {}
});

const logIn = createAsyncThunk("auth/login", async (body) => {
  try {
    const { data } = await axios.post("/users/login", body);
    token.set(data.token);
    return data;
  } catch (error) {}
});

const logOut = createAsyncThunk("auth/logout", async () => {
  try {
    await axios.post("/users/logout");
    token.unset();
  } catch (error) {}
});

const operations = {
  register,
  logIn,
  logOut,
};
export default operations;
