import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {ViewChild, ElementRef} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef; 
  @ViewChild('amountInput') amountInputRef: ElementRef; 
  @Output() shoppingListItemAdded = new EventEmitter<Ingredient>(); 

  constructor() { }

  ngOnInit() {
  }

  addShoppingListItem() {
    console.log(this.nameInputRef.nativeElement.value); 
    console.log(this.amountInputRef.nativeElement.value); 

    const ingredientName = this.nameInputRef.nativeElement.value; 
    const ingredientAmount = this.amountInputRef.nativeElement.value; 

    this.shoppingListItemAdded.emit(new Ingredient(ingredientName, ingredientAmount)); 
  }

}
