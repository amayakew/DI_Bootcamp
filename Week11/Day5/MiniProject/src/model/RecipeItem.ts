import { v4 as uuidv4 } from 'uuid';

export type RecipeObj = {
    id: string;
    title: string;
    ingredients: string[];
    instructions: string;
    isFavourite: boolean;
};

export class RecipeItem {

    id: string;
    title: string;
    ingredients: string[];
    instructions: string;
    isFavourite: boolean;

    constructor(title: string, ingredients: string[], instructions: string, isFavourite: boolean = false){
        this.id = uuidv4();
        this.title = title;
        this.ingredients = ingredients;
        this.instructions = instructions;
        this.isFavourite = isFavourite;
    }

    toJSONObject(): RecipeObj {
        return {
          id: this.id,
          title: this.title,
          ingredients: this.ingredients,
          instructions: this.instructions,
          isFavourite: this.isFavourite,
        };
      }
    
      static fromJSON(json: RecipeObj): RecipeItem {
        const recipe = new RecipeItem(
            json.title,
            json.ingredients,
            json.instructions,
            json.isFavourite,
        );
        recipe.id = json.id;
        return recipe;
    }
}