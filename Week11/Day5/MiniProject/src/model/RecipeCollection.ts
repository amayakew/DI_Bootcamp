import { RecipeItem, RecipeObj } from "./RecipeItem";

export class RecipesCollection {
    recipes: RecipeItem[];

    constructor(recipes: RecipeItem[] = []){
        this.recipes = recipes;
    }

    addRecipe(recipe: RecipeItem): void {
        this.recipes.push(recipe);
        this.saveRecipes();
    }

    removeRecipe(recipeId: string): void {
        this.recipes = this.recipes.filter(recipe => recipe.id !== recipeId);
        this.saveRecipes();
    }

    
    clearRecipes(): void {
        this.recipes = [];
        this.saveRecipes();
    }

    toggleStatus(recipeId: string): void {
        const recipeToFavourite = this.recipes.find(recipe => recipe.id === recipeId);
        if(recipeToFavourite){
            recipeToFavourite.isFavourite = !recipeToFavourite.isFavourite;
        };
        this.saveRecipes();
    }

    saveRecipes(): void {
        const recipesObjects = this.recipes.map(r => r.toJSONObject());
        const recipesJSONStr = JSON.stringify(recipesObjects);
        localStorage.setItem('recipes', recipesJSONStr);
    }

    loadRecipes(): void {
        const storedJSONStr = localStorage.getItem('recipes');
        if(storedJSONStr !== null){
            const storedJSONObject: RecipeObj[] = JSON.parse(storedJSONStr);
            this.recipes = storedJSONObject.map(r => RecipeItem.fromJSON(r));
        } else {
            this.recipes = [];
        }
    }
}