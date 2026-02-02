import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Product } from './product/product';
import { ProductDetail } from './product-detail/product-detail';
import { Overview } from './product/overview/overview';
import { Specs } from './product/specs/specs';
import { Reviews } from './product/reviews/reviews';
import { Notfound } from './notfound/notfound';
import { AddFlight } from './about/add-flight/add-flight';
import { ManageFlight } from './about/manage-flight/manage-flight';

@NgModule({
  declarations: [
    App,
    Home,
    About,
    Contact,
    Product,
    ProductDetail,
    Overview,
    Specs,
    Reviews,
    Notfound,
    AddFlight,
    ManageFlight
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
