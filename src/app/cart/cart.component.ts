import { Component, OnInit } from '@angular/core';
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

  totalCalculator() {
    /*   
    for(let i = 0; i <= this.items.length; i++) {
      this.totalCost = this.totalCost + this.items[i].cost;
    }
    return this.totalCost;
    */
   for (let i in this.items) {
     this.totalCost = this.totalCost + this.items[i].cost;
   }

   return this.totalCost;
  }

  addNewItem(itemAdd) {
    this.items.push(itemAdd);
  }

  constructor() {
    //this.totalCost = this.totalCalculator();
   }

  ngOnInit() {
    this.totalCost = this.totalCalculator();
  }

}
