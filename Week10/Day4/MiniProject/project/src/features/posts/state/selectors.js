import { createSelector } from "@reduxjs/toolkit";
import { state } from "./slice";

import { selectAuthor } from "../../users/state/selectors";

export const selectPosts = createSelector([state], (state) => {
  return state.posts;
});

export const selectStatus = createSelector([state], (state) => state.status);

export const filteredPosts = createSelector(
  [selectPosts, selectAuthor],
  (posts, author) => {
    if (author == -1) return posts;
    return posts.filter((item) => item.userId == author);
    }
);