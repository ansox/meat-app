import { Injectable } from '@angular/core';
import { CartItem } from './cart-item.model';
import { MenuItem } from 'app/restaurant-detail/menu-item.model'; 


@Injectable()
export class ShoppingCartService {
  items: CartItem[] = [];

  clear() {
    this.items = [];
  }

  total(): number {
    return this.items
      .map(item => item.value())
      .reduce((prev, value) => {
        return prev + value;
      }, 0);
  }

  addItem(item: MenuItem) {
    let foundItem = this.items.find(mItem => {
      return mItem.menuItem.id === item.id;
    });

    if (foundItem) {
      this.increaseQty(foundItem);
    } else {
      this.items.push(new CartItem(item));
    }
  }

  removeItem(item: CartItem) {
    this.items.splice(this.items.indexOf(item), 1);
  }

  constructor() {}

  increaseQty(item: CartItem): any {
    item.quantity++;
  }

  decreaseQty(item: CartItem) {
    item.quantity--;

    if (item.quantity === 0) {
      this.removeItem(item);
    }
  }

}
