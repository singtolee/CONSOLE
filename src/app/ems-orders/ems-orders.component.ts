import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AliOrder } from '../tools/AliOrder'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OrderDetailForExpressOrderComponent } from '../order-detail-for-express-order/order-detail-for-express-order.component';

@Component({
  selector: 'app-ems-orders',
  templateUrl: './ems-orders.component.html',
  styleUrls: ['./ems-orders.component.css']
})
export class EmsOrdersComponent implements OnInit {

  dir = "MYORDERS" 

  emsOrders: Observable<AliOrder[]>
  constructor(private db:AngularFirestore,private modalService: NgbModal) { }

  ngOnInit() {
    this.emsOrders = this.loadEmsOrders()
  }

  loadEmsOrders(){
    return this.db.collection(this.dir, ref=>{
      return ref.where('done','==',false)
      .where('paid','==',true)
      .where('bought','==',true)
      .where('arrived','==',true)
      .where('localShippingMethod','==',1)
      .where('shipped','==',false)
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
    const modalRef = this.modalService.open(OrderDetailForExpressOrderComponent,{centered:true});
    modalRef.componentInstance.order = order
  }

}
