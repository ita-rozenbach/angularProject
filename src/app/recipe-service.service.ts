import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from 'src/modals/Recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeServiceService {

clickedRecipe:Recipe;

  getsRecipes(){
    return this.http.get<Array<Recipe>>("http://localhost:56265/api/Recipe/getsRecipes");
  }

  constructor(public http:HttpClient){ 
  }

}