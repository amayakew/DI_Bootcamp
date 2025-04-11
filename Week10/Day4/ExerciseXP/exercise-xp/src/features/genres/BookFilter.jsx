import FilterButton from "./FilterButton";

const BookFilter = () => {

    return (
        <>
            <div>
                <FilterButton text='All Books'/>
                <FilterButton text='Horror'/>
                <FilterButton text='Fantasy'/>
                <FilterButton text='Science Fiction'/>
            </div>
        </>
    );
};

export default BookFilter;