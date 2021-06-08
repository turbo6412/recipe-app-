import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test',
  'https://chowhound3.cbsistatic.com/recipe_photos/29655_paella_mixta.jpg'),
  new Recipe('A Second Test Recipe', 'This is another test',
  'https://glebekitchen.com/wp-content/uploads/2017/04/tonkotsuramenfront.jpg'),
  new Recipe('A Third Test Recipe', 'This is a bad test',
  'https://orientalsouls.com/wp-content/uploads/2018/08/KRevoSushi01.jpg')


];


  constructor() { }

  ngOnInit(): void {
  }

}
