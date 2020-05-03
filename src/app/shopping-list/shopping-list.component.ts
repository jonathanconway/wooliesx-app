import { Component, OnInit } from '@angular/core';

import { Product } from "../app.types";
import { AppService } from "../app.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent {
  public shoppingList: Product[] = this.appService.shoppingList;
  public deletedProduct?: Product;

  constructor(private appService: AppService) {
  }

  public onClickDelete(productIdToDelete: string) {
    this.appService.shoppingList = this.appService.shoppingList.filter(({ productId }) => productIdToDelete !== productId);
    this.deletedProduct = this.appService.products.find(({ productId }) => productId === productIdToDelete);
    this.shoppingList = this.appService.shoppingList;
    this.appService.shoppingListChanged.emit();
  }
  
  public onClickUndoDelete() {
    this.appService.shoppingList = [...this.appService.shoppingList, this.deletedProduct];
    this.deletedProduct = undefined
    this.shoppingList = this.appService.shoppingList;
    this.appService.shoppingListChanged.emit();
  }
}
