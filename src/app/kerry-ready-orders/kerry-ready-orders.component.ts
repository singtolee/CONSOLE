import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AliOrder } from '../tools/AliOrder'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OrderDetailForExpressReadyOrderComponent } from '../order-detail-for-express-ready-order/order-detail-for-express-ready-order.component';

@Component({
  selector: 'app-kerry-ready-orders',
  templateUrl: './kerry-ready-orders.component.html',
  styleUrls: ['./kerry-ready-orders.component.css']
})
export class KerryReadyOrdersComponent implements OnInit {

  dir = "MYORDERS" 

  emsReadyOrders: Observable<AliOrder[]>
  constructor(private db:AngularFirestore,private modalService: NgbModal) { }

  ngOnInit() {
    this.emsReadyOrders = this.loadEmsOrders()
  }

  loadEmsOrders(){
    return this.db.collection(this.dir, ref=>{
      return ref.where('done','==',false)
      .where('paid','==',true)
      .where('bought','==',true)
      .where('arrived','==',true)
      .where('localShippingMethod','==',2)
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
    const modalRef = this.modalService.open(OrderDetailForExpressReadyOrderComponent,{centered:true});
    modalRef.componentInstance.order = order
  }

}
