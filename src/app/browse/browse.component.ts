import { Component } from '@angular/core';
import { AppService } from "../app.service";
import { Product } from "../app.types";

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent {
  public products: Product[] = this.appService.products;
  public savedToListIds: string[] = this.appService.shoppingList.map(({ productId }) => productId);

  constructor(private appService: AppService) {
  }

  public onClickSaveToList(event: CustomEvent) {
    const productIdToSave = event.detail;
    const productToSave = this.products.find(({ productId }) => productId === productIdToSave);
    if (productToSave) {
      this.appService.shoppingList.push(productToSave);
      this.savedToListIds.push(productIdToSave);
    }
  }

  public onSearch(event: CustomEvent) {
    const text = event.detail;
    this.products = this.appService.products.filter(({ name }) => name.toUpperCase().includes(text.toUpperCase().trim()));
  }
}
