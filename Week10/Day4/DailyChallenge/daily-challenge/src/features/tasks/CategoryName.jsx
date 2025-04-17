import { useEffect, useState } from "react";
import { useActiveCategorySelector, useCategoryIdSelector, useDeleteCategory, useEditCategory} from "./state/hooks";

const CategoryName = () => {
    const activeCategoryId = useActiveCategorySelector();
    const activeCategory = useCategoryIdSelector(activeCategoryId);

    const deleteCategory = useDeleteCategory();
    const editCategory = useEditCategory();

    const [isEditMode, setIsEditMode] = useState(false);
    const [categoryValue, setCategoryValue] = useState(activeCategory?.name);

    useEffect(() => {
        if(isEditMode){
            setCategoryValue(activeCategory?.name)
        }
    },[isEditMode]);

    useEffect(() => {
        setIsEditMode(false)
    },[activeCategory]);

    const saveCategory = () => {
        editCategory(categoryValue, activeCategoryId);
    };

    if (activeCategoryId === 'All') return <></>;

    if (isEditMode) {
        return (
            <>
                <div className="editCategoryWrap">
                    <input value={categoryValue} onChange={(e) => setCategoryValue(e.target.value)}/>
                    <div className="editCategoryButtons">
                        <button onClick={() => saveCategory()}> ✅ </button>
                        <button onClick={() => setIsEditMode(false)}> ❌ </button> 
                    </div>
                </div>
            </>
        );
    };

    return (
        <>
            <div className="categoryWrap">
                <h3> {activeCategory.name} </h3>
                <button onClick={() => setIsEditMode(true)}> ✍ </button>
                <button onClick={() => deleteCategory(activeCategoryId)}> 🚮 </button>
            </div>
        </>
    );
};

export default CategoryName;