import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const USERS_URL = "https://jsonplaceholder.typicode.com/users";

const initialState = {
  users: [],
  author: -1,
};

export const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const response = await axios.get(USERS_URL);
  return response.data;
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    selectedAuthor: (state, action) => {
      state.author = action.payload;
    },
  },
  extraReducers(builder) {
    builder
        .addCase(fetchUsers.fulfilled, (state, action) => {
            state.users = action.payload;
        })
        // possible to add other states
  },
});

export const state = (state) => state.usersReducer;

export const { selectedAuthor } = usersSlice.actions;

export default usersSlice.reducer;