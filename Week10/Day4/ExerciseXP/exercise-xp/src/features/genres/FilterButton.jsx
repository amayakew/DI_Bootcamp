import { useGenreFilter, useGenreSelector } from "./state/hooks";

const FilterButton = ({text}) => {
    const genre = useGenreSelector();
    const filter = useGenreFilter();

    return (
        <>
            <button style={{backgroundColor: genre === text ? 'lightblue' : 'lightgrey'}} onClick={() => filter(text)}>{text}</button>
        </>
    );
};

export default FilterButton;