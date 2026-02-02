import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {

  title = 'KeysightProject';
  products?: Product[];

  constructor(private productService: ProductService) {}

  getProducts(): void {
    this.products = this.productService.getProducts();
  }
}
