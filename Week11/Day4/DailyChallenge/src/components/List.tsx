import { ReactElement } from "react";



type ListProps<T> = {
    items: T[],
    renderItem: (item: T) => ReactElement
}

const List = <T,>({items, renderItem}: ListProps<T>): ReactElement => {
    return (
        <>
            <div>
                {items?.map((item,index) => <div key={index}>{renderItem(item)}</div>)}
            </div>
        </>
    );
};

export default List;


// Generic List Component
// Create a reusable, generic List component that accepts an array of items and a renderItem function. 
// This allows you to decide exactly how each book is displayed.

// Use the generic List component to display the list of books. 
// The renderItem function determines how each book is presented.
