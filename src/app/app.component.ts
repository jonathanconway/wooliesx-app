import { Component } from '@angular/core';

import { AppService } from "./app.service";
import { Product } from "./app.types";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public shoppingList: Product[] = this.appService.shoppingList;
  public shoppingCart: Product[] = this.appService.shoppingCart;

  constructor(private appService: AppService) {
    appService.shoppingListChanged.subscribe(() => {
      this.shoppingList = this.appService.shoppingList;
      this.shoppingCart = this.appService.shoppingCart;
    });
  }
}
