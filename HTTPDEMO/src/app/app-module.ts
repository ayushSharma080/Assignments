import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { HttpClientModule } from '@angular/common/http';
import { ProductCategoryPipe } from './product-category-pipe';
import { FormsModule } from '@angular/forms';
import { ProductList } from './product-list/product-list';
import { ProductDetail } from './product-detail/product-detail';

@NgModule({
  declarations: [
    App,
    ProductCategoryPipe,
    ProductList,
    ProductDetail
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
