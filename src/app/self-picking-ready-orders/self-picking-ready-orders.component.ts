import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AliOrder } from '../tools/AliOrder'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OrderDetailForSelfPickingReadyOrderComponent } from '../order-detail-for-self-picking-ready-order/order-detail-for-self-picking-ready-order.component';

@Component({
  selector: 'app-self-picking-ready-orders',
  templateUrl: './self-picking-ready-orders.component.html',
  styleUrls: ['./self-picking-ready-orders.component.css']
})
export class SelfPickingReadyOrdersComponent implements OnInit {

  dir = "MYORDERS" 

  selfPickingOrders: Observable<AliOrder[]>
  constructor(private db:AngularFirestore,private modalService: NgbModal) { }

  ngOnInit() {
    this.selfPickingOrders = this.loadSelfPickingOrders()
  }

  loadSelfPickingOrders(){
    return this.db.collection(this.dir, ref=>{
      return ref.where('done','==',false)
      .where('paid','==',true)
      .where('bought','==',true)
      .where('arrived','==',true)
      .where('localShippingMethod','==',0)
      .where('shipped','==',true)
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

  viewOrder(order:AliOrder){
    const modalRef = this.modalService.open(OrderDetailForSelfPickingReadyOrderComponent,{centered:true});
    modalRef.componentInstance.order = order
  }

}
