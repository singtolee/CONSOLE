import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface MiniProduct {
  pid:string;
  skuId:string;
  cartId:string;
  prdTitle:string;
  imageUrl:string;
  color:string;
  size:string;
  price:string;
  qty:number;
}

interface ALiOrder {

  uid:string;
  date:Date;
  arrived:boolean;
  done:boolean;
  paid:boolean;
  billUrl:string;
  prdValueBillUploaded:boolean;
  shippingFeePaid:boolean;
  shippingBillUrl:string;
  shippingFeeBillUploaded:boolean;
  totalPrice:number;
  totalWeight:number;
  actualWeight:number;
  totalQty:number;
  serviceCharge:number;
  estimatedShippingCost:number;
  actualShippingCost:number;
  grandTotal:number;
  cartIdList:string[];
  products:MiniProduct[];
  key:string;

}


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  dir = "MYORDERS"
  orders: Observable<any>

  constructor(private db: AngularFirestore) { }

  ngOnInit() {
    this.orders = this.loadOrders()
  }

  loadOrders(){
    return this.db.collection(this.dir, ref=>{
      return ref.where('done','==',false)
                .orderBy('date','desc')
    }).snapshotChanges().pipe(map(actions=>{
      return actions.map(a=>{
        const data = a.payload.doc.data() as ALiOrder;
        const id = a.payload.doc.id;
        return {id,data};
      })
    }))
  }

}
