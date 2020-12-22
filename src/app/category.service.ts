import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from 'src/modals/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  getRecipeByCode(code:number){
    return this.http.get<Category>("http://localhost:56265/api/Category/getRecipeByCode?code="+code);
  }

  constructor(public http:HttpClient) { }
}
