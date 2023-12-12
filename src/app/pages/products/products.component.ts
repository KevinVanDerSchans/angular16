import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { ProductComponent } from './../../components/product/product.component';
import { Product } from 'src/app/models/product.model';

@Component({
  standalone: true,
  imports: [ CommonModule, ProductComponent ],
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  http = inject(HttpClient);
  products: Product[] = [];

  ngOnInit() {
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products')
      .subscribe((data: any) => {
        this.products = data;
    })
  }
}
