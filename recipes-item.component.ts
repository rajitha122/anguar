import { Component, OnInit,Input,EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {
//if we want to get any data from outside we should use @input
  @Input() recipe:Recipe;
  @Output() recipeSelected =new EventEmitter<void>();
  constructor() { }

  onSelected(){
   this.recipeSelected.emit();
  }

  ngOnInit(): void {
  }


  
}
