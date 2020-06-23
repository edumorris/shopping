import { Component, OnInit, Input } from '@angular/core';
import { Items } from '../items';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: Items[] = [
    { name: "Soap", cost: 100 },
    { name: "Juice", cost: 150 },
    { name: "Rice", cost: 246 },
  ];

  totalCost: number;

  private _items: Items[];
  
  @Input() get item(): Items[] {
    return this._items;
  }

  set item(value: Items[]) {
    if(value) {
      this._items = this.items = value;
      this.totalcalculator();
    }
  }

  totalcalculator() {
    this.totalCost = 0;
    this.items.forEach((aCost: Items) => {
      this.totalCost += aCost.cost;
    });
  }
/*
  totalCalculator() {
    
    for(let i = 0; i <= this.items.length; i++) {
      this.totalCost = this.totalCost + this.items[i].cost;
    }
    return this.totalCost;
    //
   for (let i in this.items) {
     this.totalCost = this.totalCost + this.items[i].cost;
   }

   return this.totalCost;
  }
  */

  addNewItem(itemAdd) {
    this.items.push(itemAdd);
  }

  emptyCart() {
    confirm('Are you sure you want to empty your cart?');
    this.items = [];
  }

  constructor() {
    //this.totalCost = this.totalCalculator();
   }

  ngOnInit() {  }

}
