import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const POST_URL = 'https://jsonplaceholder.typicode.com/posts';

const initialState = {
    posts: [],
    status: '' //loading,success,failed
};

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async() => {
    const res = await axios.get(POST_URL);
    return res.data;
});

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addreaction: (state,action) => {
            const {id,name} = action.payload;
            const post = state.posts.find((post) => post.id === id);
            if (post) {
                 post.reactions[name]++;
            }
        }
    },
    extraReducers (builder){
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchPosts.fulfilled, (state,action) => {
                state.status = 'success';

                // const postsWithReaction = action.payload.map(post => {
                //     post.reactions = {thumbsUp: 0, wow: 0, heart: 0, rocket: 0, coffee: 0};
                //     return post;
                // });
                // state.posts = postsWithReaction;

                // OR (better):

                state.posts = action.payload. map((post) => {
                    return {
                         ...post,
                         reactions: {thumbsUp: 0, wow: 0, heart: 0, rocket: 0, coffee: 0}
                    }
                });  
            })
            .addCase(fetchPosts.rejected, (state) => {
                state.status = 'failed';
            })
    }
});

export const state = (state) => state.postsReducer;
// to optimize useSelector functions in PostsList file. 
// If console.log state - will see function.
// We can't write here selectors, so we send them to selectors file 

export const {addreaction} = postsSlice.actions;

export default postsSlice.reducer;