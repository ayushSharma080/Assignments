import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Product } from './product/product';
import { Home } from './home/home';
import { ProductDetail } from './product-detail/product-detail';
import { About } from './about/about';
import { AddFlight } from './about/add-flight/add-flight';
import { ManageFlight } from './about/manage-flight/manage-flight';
import { Notfound } from './notfound/notfound';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: Home },
  { path: 'flights', component: Product },
  { path: 'flights/:id', component: ProductDetail },

  {
    path: 'admin',
    component: About,
    children: [
      { path: 'add-flight', component: AddFlight },
      { path: 'manage-flights', component: ManageFlight }
    ]
  },

  { path: '**', component: Notfound }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
