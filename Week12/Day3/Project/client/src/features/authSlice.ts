import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "../models/User";

const API_URL = import.meta.env.VITE_API_BASE_URL;


export type AuthSliceState = {
  isLoggedIn: boolean;
  user: User | null;
  authToken: string | null;
  loading: boolean;
  errorLogin: string | null;
  errorRegister: string | null;
};

const initialState: AuthSliceState = { 
  isLoggedIn: false,
  user: null,
  authToken: null,
  loading: false,
  errorLogin: null,
  errorRegister: null
};

export const refreshToken = createAsyncThunk('auth/refreshToken', async (_, { rejectWithValue }) => {
  try {
    const res = await axios.post(`${API_URL}/api/refreshToken`, undefined, {withCredentials: true}); // adjust to your API
    return res.data;
  } catch (err: any) {
    return rejectWithValue(err.response?.data?.message || 'Refresh token failed');
  }
});

export const loginUser = createAsyncThunk("auth/loginUser", async (payload: {email: string, password: string}, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${API_URL}/api/login`, payload, {withCredentials: true});
    return response.data;
  } catch (err: any) {
    return rejectWithValue(err.response?.data?.message || "Login failed");
  }
});

export const registerUser = createAsyncThunk("auth/registerUser", async (payload: {email: string, username: string, password: string}, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${API_URL}/api/register`, payload);
    return response.data; // should include `user` and `token`
  } catch (err: any) {
    return rejectWithValue(err?.response?.data?.message || "Register failed");
  }
});

const authSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
      logout: (state) => {
        state.isLoggedIn = false;
        state.user = null;
        state.authToken = null;
        state.errorLogin = null;
        state.errorRegister = null;
      },
    },
    extraReducers(builder) {
      builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.errorLogin = null;
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<{ user: User; token: string }>) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.authToken = action.payload.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.errorLogin = action.payload as string || "Unexpected error";
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.errorRegister = null;
      })
      .addCase(registerUser.fulfilled, (state, action: PayloadAction<{ user: User; token: string }>) => {
        state.loading = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.errorRegister = action.payload as string || "Unexpected error";
      })
      .addCase(refreshToken.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.authToken = action.payload.token;
      })
      .addCase(refreshToken.rejected, (state) => {
        state.authToken = null;
        state.user = null;
        state.isLoggedIn = false;
      });
    },
  });

export const state = (state: {auth: AuthSliceState}) => state.auth;

export const { logout } = authSlice.actions;

export default authSlice.reducer;