import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const initialState = {
    users: [],
    status: ''
};

export const fetchUsersData = createAsyncThunk('users/fetchUsersInfo', async() => {
    // throw new Error('error'); ---> to check status 'failed'
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return data;
});

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers (builder) {
        builder
            .addCase(fetchUsersData.fulfilled, (state,action) => {
                state.status = 'success';
                state.users = action.payload;
            })
            .addCase(fetchUsersData.rejected, (state) => {
                state.status = 'failed';
            })
    } 
});

export default usersSlice.reducer;