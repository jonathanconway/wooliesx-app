import { Injectable, EventEmitter } from '@angular/core';

import { Product } from "./app.types";
import { data } from "./app.data";

@Injectable({
  providedIn: 'root',
})
export class AppService {
  public shoppingList: Product[] = [data.products[0], data.products[1]];
  public shoppingCart: Product[] = [];
  public products: Product[] = data.products;

  public shoppingListChanged = new EventEmitter();
}