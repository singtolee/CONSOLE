import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AliOrder } from '../tools/AliOrder'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css']
})
export class NewOrderComponent implements OnInit {
  dir = "MYORDERS"
  newOrders: Observable<AliOrder[]>

  constructor(private db:AngularFirestore) { }

  ngOnInit() {
    this.newOrders = this.loadNewOrders()
  }

  loadNewOrders(){
    return this.db.collection(this.dir, ref=>{
      return ref.where('done','==',false)
      .where('paid','==',false)
      .where('prdValueBillUploaded','==',false)
      .orderBy('date','desc')
    }).snapshotChanges().pipe(map(actions=>{
      return actions.map(a=>{
        const data = a.payload.doc.data() as AliOrder;
        const id = a.payload.doc.id;
        data.key = id
        return data;
      })
    }))
  }

  convert(a){
    return a.toDate()
  }

  viewNewOrderDetail(order:AliOrder){
    console.log(order.uid)
  }

  remindUserMakePaiment(){
    console.log("TIME TO SEND PUSH NOTIFICATION")
  }

  isOver48Hours(orderDate:Date,key:string){
    var now = new Date()
    now.setDate(now.getDate()-2)
    if(now>orderDate){
      this.deleteUnPaidOrder(key)
      return true
    }else {
      return false
    }
  }

  isOver30Minutes(orderDate:Date){
    var now = new Date()
    now.setMinutes(now.getMinutes()-30)
    if(now>orderDate){
      return true
    }else{
      return false
    }
  }

  deleteUnPaidOrder(key:string){
    this.db.collection(this.dir).doc(key).delete()
  }

}
