import { selectBooks, selectFantasyBooks, selectHorrorBooks, selectSciFiBooks } from "./selectors";
import {useSelector} from 'react-redux';

export const useBooksSelector = () => {
    return useSelector(selectBooks);
};

export const useHorrorBooksSelector = () => {
    return useSelector(selectHorrorBooks);
};
export const useFantasyBooksSelector = () => {
    return useSelector(selectFantasyBooks);
};
export const useSciFiBooksSelector = () => {
    return useSelector(selectSciFiBooks);
};

export const useFilteredBooksSelector = (genre) => {
    if (genre === 'All Books') return useBooksSelector();
    if (genre === 'Horror') return useHorrorBooksSelector();
    if (genre === 'Fantasy') return useFantasyBooksSelector();
    if (genre === 'Science Fiction') return useSciFiBooksSelector();
};