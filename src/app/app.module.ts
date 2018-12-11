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
    MiniPrdCellComponent
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
    OrderDetailComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
