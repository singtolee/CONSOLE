import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AliOrder } from '../tools/AliOrder'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OrderDetailComponent } from '../order-detail/order-detail.component'

@Component({
  selector: 'app-arrived-order',
  templateUrl: './arrived-order.component.html',
  styleUrls: ['./arrived-order.component.css']
})
export class ArrivedOrderComponent implements OnInit {

  dir = "MYORDERS" 

  arrivedOrders: Observable<AliOrder[]>
  constructor(private db:AngularFirestore,private modalService: NgbModal) { }

  ngOnInit() {
    this.arrivedOrders = this.loadArrivedOrders()
  }

  loadArrivedOrders(){
    return this.db.collection(this.dir, ref=>{
      return ref.where('done','==',false)
      .where('arrived','==',true)
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
    const modalRef = this.modalService.open(OrderDetailComponent,{centered:true});
    modalRef.componentInstance.order = order
  }

}
