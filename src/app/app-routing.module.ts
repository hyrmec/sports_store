import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreComponent } from './store/store.component';
import { CheckoutComponent } from './store/checkout.component';
import { CartDetailComponent } from './store/cart-detail.component';
import { StoreFirstGuard } from './store-first.guard';


const routes: Routes = [
  { path: 'store', component: StoreComponent, canActivate: [StoreFirstGuard ] },
  { path: 'checkout', component: CheckoutComponent, canActivate: [StoreFirstGuard ] },
  { path: 'cart', component: CartDetailComponent, canActivate: [StoreFirstGuard ] },
  {path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule', canActivate: [StoreFirstGuard ]},
  { path: '**', redirectTo: '/store' },
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [
    StoreFirstGuard
  ]
})
export class AppRoutingModule { }
