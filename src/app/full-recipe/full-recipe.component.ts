import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from 'src/modals/Recipe';
import { CategoryService } from '../category.service';
import { RecipeServiceService } from '../recipe-service.service';

@Component({
  selector: 'app-full-recipe',
  templateUrl: './full-recipe.component.html',
  styleUrls: ['./full-recipe.component.css']
})
export class FullRecipeComponent implements OnInit {

  myRecipe: Recipe;
  constructor(public active: ActivatedRoute, public router: Router, public recipeSer: RecipeServiceService, public categorySer: CategoryService) {
    this.active.params.subscribe(param => {
      this.myRecipe = param["myRecipe"]
    })
    this.myFullRecipe = recipeSer.clickedRecipe;

    this.categorySer.getRecipeByCode(this.myFullRecipe.codeCategory).subscribe(p => this.nameCategoryOfMyFullRecipe = p.name, err => console.log(this.myFullRecipe.codeCategory));

  }
  myFullRecipe: Recipe;
  nameCategoryOfMyFullRecipe: String;

  getCatortyImg() {
    return "./assets/" + this.myFullRecipe.codeCategory + ".png";
  }

  counter() {
    return new Array(this.myFullRecipe.LevelDifficulty);
  }

  isTheSameUserAdded(){
    if(this.myFullRecipe.userCode==JSON.parse(localStorage.getItem('user')).code)
    return true;
    return false;
  }

  ngOnInit(): void {
  }



}
