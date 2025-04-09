import { selectPosts, selectStatus,  filteredPosts} from "../state/selectors";
import { useSelector, useDispatch } from "react-redux";
import { useCallback } from "react";
import { addreaction, fetchPosts } from "./slice"; //actions

export const usePostsSelector = () => {
  // return useSelector(selectPosts); 
  return useSelector(filteredPosts);
};

export const usePostsStatus = () => {
  return useSelector(selectStatus);
};

export const useFetchPosts = () => {
  const dispatch = useDispatch();
  return useCallback(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
};

export const useAddReaction = () => {
  const dispatch = useDispatch();
  return useCallback(
    (id, name) => {
      dispatch(addreaction({ id, name }));
    },
    [dispatch]
  );
};