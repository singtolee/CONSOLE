import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth.guard';
const routes: Routes = [
  { path: '', redirectTo: '/orders',pathMatch: 'full'},
  { path:'orders', component:OrdersComponent, canActivate:[AuthGuard]},
  { path:'delivery', component:DeliveryComponent, canActivate:[AuthGuard]},
  { path:'login', component:LoginComponent},
  { path: "**", component:PageNotFoundComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  LoginComponent,
  OrdersComponent,
  DeliveryComponent,
  PageNotFoundComponent]
