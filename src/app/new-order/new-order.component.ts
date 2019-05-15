import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AliOrder } from '../tools/AliOrder'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OrderDetailForNewOrderComponent } from '../order-detail-for-new-order/order-detail-for-new-order.component'

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css']
})
export class NewOrderComponent implements OnInit {
  dir = "MYORDERS"
  newOrders: Observable<AliOrder[]>

  constructor(private db:AngularFirestore,private modalService: NgbModal) { }

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
    const modalRef = this.modalService.open(OrderDetailForNewOrderComponent,{centered:true});
    modalRef.componentInstance.order = order
  }


}
