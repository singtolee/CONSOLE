import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { ReceiveComponent } from './receive/receive.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth.guard';
import { SummaryComponent } from './summary/summary.component';
import { CartsComponent } from './carts/carts.component';
import { PackingListComponent } from './packing-list/packing-list.component';
import { UsersListComponent } from './users-list/users-list.component';
const routes: Routes = [
  { path: '', redirectTo: '/orders',pathMatch: 'full'},
  { path:'orders', component:OrdersComponent, canActivate:[AuthGuard]},
  { path:'delivery', component:DeliveryComponent, canActivate:[AuthGuard]},
  { path:'receive', component:ReceiveComponent, canActivate:[AuthGuard]},
  { path:'summary', component:SummaryComponent, canActivate:[AuthGuard]},
  { path: 'packing', component:PackingListComponent, canActivate:[AuthGuard]},
  { path: 'carts', component:CartsComponent, canActivate:[AuthGuard]},
  { path: 'print/:oid', component:PackingListComponent, canActivate:[AuthGuard]},
  { path: 'users', component:UsersListComponent, canActivate:[AuthGuard]},
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
  ReceiveComponent,
  SummaryComponent,
  PackingListComponent,
  CartsComponent,
  PackingListComponent,
  UsersListComponent,
  PageNotFoundComponent]
