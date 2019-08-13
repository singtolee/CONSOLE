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
import { SelfPickingOrdersComponent } from './self-picking-orders/self-picking-orders.component';
import { EmsOrdersComponent } from './ems-orders/ems-orders.component';
import { KerryOrdersComponent } from './kerry-orders/kerry-orders.component';
import { OrderDetailForSelfPickingOrdersComponent } from './order-detail-for-self-picking-orders/order-detail-for-self-picking-orders.component';
import { OrdersReadyForDeliveryComponent } from './orders-ready-for-delivery/orders-ready-for-delivery.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { ReceiveComponent } from './receive/receive.component';
import { SelfPickingReadyOrdersComponent } from './self-picking-ready-orders/self-picking-ready-orders.component';
import { EmsReadyOrdersComponent } from './ems-ready-orders/ems-ready-orders.component';
import { KerryReadyOrdersComponent } from './kerry-ready-orders/kerry-ready-orders.component';
import { OrderDetailForSelfPickingReadyOrderComponent } from './order-detail-for-self-picking-ready-order/order-detail-for-self-picking-ready-order.component';
import { OrderDetailForExpressOrderComponent } from './order-detail-for-express-order/order-detail-for-express-order.component';
import { OrderDetailForExpressReadyOrderComponent } from './order-detail-for-express-ready-order/order-detail-for-express-ready-order.component';
import { SummaryComponent } from './summary/summary.component';
import { OrderDetailForDoneOrderComponent } from './order-detail-for-done-order/order-detail-for-done-order.component';
import { PackingListComponent } from './packing-list/packing-list.component';
import { OrderDetailForBillUploadedOrderComponent } from './order-detail-for-bill-uploaded-order/order-detail-for-bill-uploaded-order.component';
import { CartsComponent } from './carts/carts.component';
import { CartsOrderedComponent } from './carts-ordered/carts-ordered.component';
import { CartsOpenComponent } from './carts-open/carts-open.component';
import { ThMiniPrdCellComponent } from './th-mini-prd-cell/th-mini-prd-cell.component';
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
    OrderDetailForBoughtOrderComponent,
    SelfPickingOrdersComponent,
    EmsOrdersComponent,
    KerryOrdersComponent,
    OrderDetailForSelfPickingOrdersComponent,
    OrdersReadyForDeliveryComponent,
    DeliveryComponent,
    ReceiveComponent,
    SelfPickingReadyOrdersComponent,
    EmsReadyOrdersComponent,
    KerryReadyOrdersComponent,
    OrderDetailForSelfPickingReadyOrderComponent,
    OrderDetailForExpressOrderComponent,
    OrderDetailForExpressReadyOrderComponent,
    SummaryComponent,
    OrderDetailForDoneOrderComponent,
    PackingListComponent,
    OrderDetailForBillUploadedOrderComponent,
    CartsComponent,
    CartsOrderedComponent,
    CartsOpenComponent,
    ThMiniPrdCellComponent
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
    OrderDetailForBillUploadedOrderComponent,
    OrderDetailForPaidOrderComponent,
    OrderDetailForBoughtOrderComponent,
    OrderDetailForSelfPickingOrdersComponent,
    OrderDetailForSelfPickingReadyOrderComponent,
    OrderDetailForExpressOrderComponent,
    OrderDetailForDoneOrderComponent,
    OrderDetailForExpressReadyOrderComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
