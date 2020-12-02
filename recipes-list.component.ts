import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
 
  @Output() recipeWasSelected =new EventEmitter<Recipe>();
  
  /* an array of receipe*/
   recipes : Recipe[] = [
   new Recipe('Aloo mattar','tasty ghar ka khaana',
   'https://images.immediate.co.uk/production/volatile/sites/2/2016/02/20501.jpg?webp=true&quality=90&crop=1px%2C328px%2C597px%2C257px&resize=597%2C253'),

   new Recipe('choco lava','yummy lava for khaali tummy',
   'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2018/09/dessert-main-image-molten-cake.jpg')
   

  ];
  constructor() { }

  onRecipeSelected(recipe:Recipe)
  {
    this.recipeWasSelected.emit(recipe);

  }

  ngOnInit(): void {
  }

   
}
