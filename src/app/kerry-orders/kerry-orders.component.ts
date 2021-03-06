import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AliOrder } from '../tools/AliOrder'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OrderDetailForExpressOrderComponent } from '../order-detail-for-express-order/order-detail-for-express-order.component';

@Component({
  selector: 'app-kerry-orders',
  templateUrl: './kerry-orders.component.html',
  styleUrls: ['./kerry-orders.component.css']
})
export class KerryOrdersComponent implements OnInit {

  dir = "MYORDERS" 

  kerryOrders: Observable<AliOrder[]>
  constructor(private db:AngularFirestore,private modalService: NgbModal) { }

  ngOnInit() {
    this.kerryOrders = this.loadKerryOrders()
  }

  loadKerryOrders(){
    return this.db.collection(this.dir, ref=>{
      return ref.where('done','==',false)
      .where('paid','==',true)
      .where('bought','==',true)
      .where('arrived','==',true)
      .where('localShippingMethod','==',2)
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
