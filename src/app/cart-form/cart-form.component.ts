import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Items } from '../items';

@Component({
  selector: 'app-cart-form',
  templateUrl: './cart-form.component.html',
  styleUrls: ['./cart-form.component.css']
})
export class CartFormComponent implements OnInit {

  newItem = new Items("", 0, 0);

  @Output() itemAdd = new EventEmitter<Items>();

  addItem() {
    this.itemAdd.emit(this.newItem);
    //this.itemForm.reset();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
