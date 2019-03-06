import {
  Component,
  OnInit,
  EventEmitter,
  Output
} from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  name = new FormControl();
  amount = new FormControl();
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onAddItem() {
    const ingName = this.name.value;
    const ingAmount = this.amount.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.ingredientAdded.emit(newIngredient);
  }

}
