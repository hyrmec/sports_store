import { Component } from '@angular/core';
import { Product } from '../model/product.model';
import { ProductRepository } from '../model/product.repository';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  moduleId: module.id,
  styleUrls: ['./store.component.css']
})

export class StoreComponent {

  constructor(private repository: ProductRepository) { }

  get products(): Product[] {
    return this.repository.getProducts();
  }

  get categories(): string[] {
    return this.repository.getCategories();
  }
}
