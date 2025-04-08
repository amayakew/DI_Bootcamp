import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const initialState = {
    userAge: 29,
    loading: false
};

export const ageUpAsync = createAsyncThunk('userAge/incrementAge', async() => {
    // throw new Error ('error')
    await new Promise((res) => setTimeout(res, 1000));
    return 1;
});

export const ageDownAsync = createAsyncThunk('userAge/decrementAge', async() => {
    // throw new Error ('error')
    await new Promise((res) => setTimeout(res, 1000));
    return 1;
});

const ageTrackerSlice = createSlice({
    name: 'userAge',
    initialState,
    reducers: {
        ageIncrement: (state) => {
            state.userAge += 1;
        },
        ageDecrement: (state) => {
            state.userAge -= 1;
        }
    },
    extraReducers (builder) {
        builder
        .addCase(ageUpAsync.pending, (state) => {
            state.loading = true;
          })
        .addCase(ageUpAsync.fulfilled, (state, action) => {
            state.userAge += action.payload;
            state.loading = false;
        })
        .addCase(ageUpAsync.rejected, (state) => {
            state.loading = false;
            state.userAge = '';
        })

        .addCase(ageDownAsync.pending, (state) => {
            state.loading = true;
        })
        .addCase(ageDownAsync.fulfilled, (state, action) => {
            state.userAge -= action.payload;
            state.loading = false;
        })
        .addCase(ageDownAsync.rejected, (state) => {
            state.userAge = '';
            state.loading = false;
        })
    } 
});


export const {ageIncrement, ageDecrement} = ageTrackerSlice.actions;
export default ageTrackerSlice.reducer;

// I don't understand these requirements in the exercise:

// "Reducers to handle loading states and updating the age.
// Extra reducers for ageUpAsync and ageDownAsync, handling the asynchronous loading process."

// Why do I need to use both reducers: regular and extra? 
// (in case of calculations I've decided just add different buttons to see the difference,
//     but I didn't do regular state reducers)