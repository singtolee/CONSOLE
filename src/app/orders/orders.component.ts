import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface MiniProduct {
  pid:string;
  skuId:string;
  cartId:string;
  prdTitle:string;
  prdCnTitle:string;
  colorAndSize:string;
  imageUrl:string;
  color:string;
  size:string;
  price:string;
  qty:number;
}

interface ALiOrder {

  uid:string;
  date:Date;

  bought:boolean;

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
  newOrders: Observable<any>
  billUploadedOrders: Observable<any>
  paidOrders: Observable<any>
  boughtOrders:Observable<any>

  constructor(private db: AngularFirestore) { }

  ngOnInit() {
    this.newOrders = this.loadNewOrders()
    this.paidOrders = this.loadPaidOrders()
    this.billUploadedOrders = this.loadBillUploadedOrders()
    this.boughtOrders = this.loadBoughtOrders()
  }

  loadBillUploadedOrders(){
    return this.db.collection(this.dir, ref=>{
      return ref.where('done','==',false)
      .where('paid','==',false)
      .where('prdValueBillUploaded','==',true)
      .orderBy('date','desc')
    }).snapshotChanges().pipe(map(actions=>{
      return actions.map(a=>{
        const data = a.payload.doc.data() as ALiOrder;
        const id = a.payload.doc.id;
        data.key = id
        return data;
      })
    }))

  }

  loadNewOrders(){
    return this.db.collection(this.dir, ref=>{
      return ref.where('done','==',false)
      .where('paid','==',false)
      .orderBy('date','desc')
    }).snapshotChanges().pipe(map(actions=>{
      return actions.map(a=>{
        const data = a.payload.doc.data() as ALiOrder;
        const id = a.payload.doc.id;
        data.key = id
        return data;
      })
    }))
  }

  loadPaidOrders(){
    return this.db.collection(this.dir, ref=>{
      return ref.where('done','==',false)
      .where('paid','==',true)
      .orderBy('date','desc')
    }).snapshotChanges().pipe(map(actions=>{
      return actions.map(a=>{
        const data = a.payload.doc.data() as ALiOrder;
        const id = a.payload.doc.id;
        data.key = id
        return data;
      })
    }))

  }

  loadBoughtOrders(){
    return this.db.collection(this.dir, ref=>{
      return ref.where('done','==',false)
      .where('paid','==',true)
      .where('bought','==',true)
      .orderBy('date','desc')
    }).snapshotChanges().pipe(map(actions=>{
      return actions.map(a=>{
        const data = a.payload.doc.data() as ALiOrder;
        const id = a.payload.doc.id;
        data.key = id
        return data;
      })
    }))

  }

}
