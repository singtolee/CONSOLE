import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './orders/orders.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OrderHeaderComponent } from './order-header/order-header.component';
import { ImageModalComponent } from './image-modal/image-modal.component';
import { PaidOrdersCellComponent } from './paid-orders-cell/paid-orders-cell.component';
import { UserInfoCardComponent } from './user-info-card/user-info-card.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { MiniPrdCellComponent } from './mini-prd-cell/mini-prd-cell.component';
import { BoughtOrderComponent } from './bought-order/bought-order.component';
import { NewOrderComponent } from './new-order/new-order.component';
import { BillUploadedOrderComponent } from './bill-uploaded-order/bill-uploaded-order.component';
import { ArrivedOrderComponent } from './arrived-order/arrived-order.component';
import { OrderDetailForNewOrderComponent } from './order-detail-for-new-order/order-detail-for-new-order.component';
import { OrderDetailForPaidOrderComponent } from './order-detail-for-paid-order/order-detail-for-paid-order.component';
import { OrderDetailForBoughtOrderComponent } from './order-detail-for-bought-order/order-detail-for-bought-order.component';
export const firebaseConfig = environment.firebaseConfig;

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    OrdersComponent,
    PageNotFoundComponent,
    OrderHeaderComponent,
    ImageModalComponent,
    PaidOrdersCellComponent,
    UserInfoCardComponent,
    OrderDetailComponent,
    MiniPrdCellComponent,
    BoughtOrderComponent,
    NewOrderComponent,
    BillUploadedOrderComponent,
    ArrivedOrderComponent,
    OrderDetailForNewOrderComponent,
    OrderDetailForPaidOrderComponent,
    OrderDetailForBoughtOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    AngularFireModule.initializeApp(firebaseConfig),
    NgbModule
  ],
  entryComponents:[
    ImageModalComponent,
    UserInfoCardComponent,
    OrderDetailComponent,
    OrderDetailForNewOrderComponent,
    OrderDetailForPaidOrderComponent,
    OrderDetailForBoughtOrderComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
