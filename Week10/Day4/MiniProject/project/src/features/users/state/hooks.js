import { useSelector, useDispatch } from "react-redux";
import { selectUsers, selectAuthor} from "./selectors";
import { fetchUsers,  selectedAuthor} from "./slice"; 
import { useCallback } from "react";

export const useUsersSelector = () => {
  return useSelector(selectUsers);
};

export const useSelectedAuthor = () => {
    return useSelector(selectAuthor);
};

export const useFetchUsers = () => {
  const dispatch = useDispatch();
  return useCallback(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
};

export const useSelectAuthor = () => {
  const dispatch = useDispatch();
  return useCallback(
    (id) => {
      dispatch(selectedAuthor(id));
    },
    [dispatch]
  );
};