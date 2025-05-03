import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Story } from "../models/Story";
import { RootState } from "../app/store";
import {refreshToken} from './authSlice';
import { Contributor } from "../models/Contributor";

const API_URL = import.meta.env.VITE_API_BASE_URL;


export type StoriesSliceState = {
    data: Story[] | null;
    loading: boolean;
    error: string | null;
    currentStory: Story | null;
    currentContributors: Contributor[] | null
};

const initialState: StoriesSliceState = { 
    data: null,
    loading: false,
    error: null,
    currentStory: null,
    currentContributors: null,
};

export const fetchContributorsById = createAsyncThunk(
    'stories/fetchById',
    async (storyId: number, { getState, dispatch, rejectWithValue }) => {
        try {
            console.log('FETCHING CONTRIBUTERS')
            const state = getState() as RootState;
            const token = state.auth.authToken;
            const response = await axios.get(`${API_URL}/api/contributors/${storyId}`, {
              headers: { Authorization: `Bearer ${token}` },
              withCredentials: true
            });
            return response.data.contributors;
        }
        catch (error: any) {
            if (error?.response?.status === 403) {
                // try to refresh token
                const result = await dispatch(refreshToken());
                const newToken = (getState() as RootState).auth.authToken;
                try {
                    const response = await axios.get(`${API_URL}/api/contributors/${storyId}`, {
                        headers: { Authorization: `Bearer ${newToken}` },
                        withCredentials: true
                    });
                    return response.data.contributors;
                }
                catch (error: any) { }
            }
            return rejectWithValue('Failed to fetch story');
        }

    }
  );

export const fetchStories = createAsyncThunk<{stories: Story[]}, void, { state: RootState; rejectValue: string }>(
    'stories/fetchStories',
    async (_, { getState, dispatch, rejectWithValue }) => {
      try {
        const token = getState().auth.authToken;
        const response = await axios.get(`${API_URL}/api/stories`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
      } catch (error: any) {
        if (error.response?.status === 403) {
            // try to refresh token
            const result = await dispatch(refreshToken());
            const newToken = getState().auth.authToken;
            try {
                const response = await axios.get(`${API_URL}/api/stories`, {
                    headers: {
                      Authorization: `Bearer ${newToken}`,
                    },
                });
                return response.data;
            }
            catch (error: any) { }
          }
    
          return rejectWithValue('Failed to fetch stories');
      }
    }
  );
  
  const storiesSlice = createSlice({
    name: 'stories',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchStories.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchStories.fulfilled, (state, action) => {
          state.loading = false;
          state.data = action.payload.stories as Story[];
        })
        .addCase(fetchStories.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload || 'Unexpected error';
        })
        .addCase(fetchContributorsById.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.currentStory = null;
            state.currentContributors = null;
          })
          .addCase(fetchContributorsById.fulfilled, (state, action: PayloadAction<Contributor[]>) => {
            const storyId = ((action as any).meta as any).arg; // ✅ Type-safe now
            state.loading = false;
            state.currentStory = state.data?.find((s) => s.id == storyId) || null;
            state.currentContributors = action.payload;
          })
          .addCase(fetchContributorsById.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || "Failed to fetch story";
          });
    },
  });
  
  export default storiesSlice.reducer;