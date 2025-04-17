import { useActiveCategorySelector, useActiveStatusSelector, useCategoriesSelector, useChangeActiveCategory, useChangeActiveStatus } from "./state/hooks";

const CategorySelector = () => {
    const categories = useCategoriesSelector();
    const activeCategory = useActiveCategorySelector();
    const activeStatus = useActiveStatusSelector();
    const changeCategory = useChangeActiveCategory();
    const changeActiveStatus = useChangeActiveStatus();

    return (
        <>
            <div className="filterWrap">
                <select value={activeCategory} onChange={(e) => changeCategory(e.target.value)}>
                    <option value={'All'}>All Categories</option>
                    {categories && categories.map(category => {
                        return (
                            <option key={category.id} value={category.id}>{category.name}</option>
                        )
                    })}
                </select>
                <select value={activeStatus} onChange={(e) => changeActiveStatus(e.target.value)}>
                    <option value={'All'}>All Tasks</option>
                    <option value={'Done'}>Done</option>
                    <option value={'Undone'}>Undone</option>
                </select>
            </div>
        </>
    );
};

export default CategorySelector;