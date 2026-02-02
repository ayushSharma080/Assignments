import { Injectable } from '@angular/core';
 
@Injectable({
  providedIn: 'root'
})
export class ProductService {
 
  private products = [
    {id:101, name:'Indigo', 'price': 10000},
    {id:102, name:'AirIndia', 'price': 13000},
    {id:103, name:'AirIndia', 'price': 9000},
  ];
 
  getProducts(){
   return this.products;
  }
 
  getProductById(id:number){
    return this.products.find(p => p.id === id)
  }
 
  constructor() { }
}