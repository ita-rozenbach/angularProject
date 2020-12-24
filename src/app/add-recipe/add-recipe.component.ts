import { Component, OnInit } from '@angular/core';
import { Category } from 'src/modals/Category';
import { Recipe } from 'src/modals/Recipe';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {
  allCategories:Category[]=[];

  constructor(public categorySer:CategoryService) { 
this.categorySer.getAllCategories().subscribe(p=>this.allCategories=p,err=>console.log("cant got categories"))
  }

  ngOnInit(): void {
  }

  myNewRecipe:Recipe;



}
