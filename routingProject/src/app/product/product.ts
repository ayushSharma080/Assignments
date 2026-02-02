import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product-service';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product implements OnInit{

  products :any[] = [];
 
  constructor(private productService: ProductService, private router:Router)
  {}
 
  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }
 
  //The angular router will used to navigate to dynamic detail route
  goToDetails(id:number){
    this.router.navigate(['/flights',id]);
  }

}
