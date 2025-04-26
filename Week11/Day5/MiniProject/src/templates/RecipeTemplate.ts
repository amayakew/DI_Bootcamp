import { RecipesCollection } from "../model/RecipeCollection";
import { RecipeItem } from "../model/RecipeItem";

export class RecipeTemplate {
    recipeCollection: RecipesCollection;
    constructor() {
        this.recipeCollection = new RecipesCollection();
    }

    renderRecipeContainer() {
        const container = document.getElementById('recipeContainer');
        const recipeCollection = this.recipeCollection;
        const renderRecipeContainer = this.renderRecipeContainer.bind(this);
        if (container) container.innerHTML = '';
        recipeCollection.recipes.forEach(r => {
            const rWrap = document.createElement('div');
            rWrap.classList.add('recipeWrap') 
            container?.appendChild(rWrap);

            const rTitle = document.createElement('h3');
            rTitle.classList.add('recipeTitle');
            rTitle.innerText = r.title;
            rWrap.appendChild(rTitle);

            const details = document.createElement('div');
            details.classList.add('info');
            details.style.display = 'block';
            rWrap.appendChild(details);


            const showDetails = document.createElement('button');
            showDetails.innerText = 'Hide Details';
            showDetails.addEventListener('click', () => {
                if (showDetails.innerText == 'Hide Details') {
                    details.style.display = 'none';
                    showDetails.innerText = 'Show Details';
                }
                else {
                    details.style.display = 'block';
                    showDetails.innerText = 'Hide Details';
                }
            })

            const rIngredients = document.createElement('ul');
            rIngredients.classList.add('ingredients');
            r.ingredients.forEach(i => {
                const rIngredient = document.createElement('li');
                rIngredient.classList.add('ingredient');
                rIngredient.innerText = i;
                rIngredients.appendChild(rIngredient);
            });
            details.appendChild(rIngredients);

            const rInstructions = document.createElement('p');
            rInstructions.innerText = r.instructions;
            details.appendChild(rInstructions);

            const favButton = document.createElement('button');
            favButton.innerText = r.isFavourite ? '💖' : '🤍';
            favButton.addEventListener('click', () => {
                recipeCollection.toggleStatus(r.id);
                renderRecipeContainer();
            })

            const deleteButton = document.createElement('button');
            deleteButton.innerText = 'Delete';
            deleteButton.addEventListener('click', () => {
                recipeCollection.removeRecipe(r.id);
                renderRecipeContainer();
            })

            const btnsWrap = document.createElement('div');
            btnsWrap.classList.add('recipeButtonsWrap');
            btnsWrap.appendChild(favButton);
            btnsWrap.appendChild(deleteButton);
            btnsWrap.appendChild(showDetails);
            rWrap.appendChild(btnsWrap);

        });
    }

    handleCreateRecipeForm(){
        const recipeCollection = this.recipeCollection;
        const renderRecipeContainer = this.renderRecipeContainer.bind(this);

        const form = document.getElementById('recipeEntryForm');
        form?.addEventListener('submit', function(event) {
            event.preventDefault();

            let titleInput = (document.getElementById('recipeTitle') as HTMLInputElement).value;
            const ingredientsInputString = (document.getElementById('ingredients') as HTMLTextAreaElement).value;
            const ingredientsArray = ingredientsInputString.split('\n');
            const instructionsInput = (document.getElementById('instructions') as HTMLTextAreaElement).value;

            const recipe = new RecipeItem(titleInput,ingredientsArray,instructionsInput);
            recipeCollection.addRecipe(recipe);
            renderRecipeContainer();

            (document.getElementById('recipeTitle') as HTMLInputElement).value = '';
            (document.getElementById('ingredients') as HTMLTextAreaElement).value = '';
            (document.getElementById('instructions') as HTMLTextAreaElement).value = '';

          });
    }

    handleClearAll() {
        const recipeCollection = this.recipeCollection;
        const renderRecipeContainer = this.renderRecipeContainer.bind(this);
        const btn = document.getElementById('clearRecipesButton') as HTMLButtonElement;

        btn.addEventListener('click', () => {
            recipeCollection.clearRecipes();
            renderRecipeContainer();
        })
    }

    start() {
        this.recipeCollection.loadRecipes();
        this.renderRecipeContainer();
        this.handleCreateRecipeForm();
        this.handleClearAll();
    }
}

