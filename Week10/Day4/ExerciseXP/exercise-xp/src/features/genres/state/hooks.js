import { selectGenre} from "./selectors";
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from "./slice";

export const useGenreSelector = () => {
    return useSelector(selectGenre);
};

export const useGenreFilter = () => {
    const dispatch = useDispatch();
    return (genre) => dispatch(setFilter(genre));
};