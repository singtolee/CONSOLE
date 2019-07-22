import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AliOrder } from '../tools/AliOrder'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OrderDetailForDoneOrderComponent } from '../order-detail-for-done-order/order-detail-for-done-order.component'

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  dir = "MYORDERS"
  doneOrders: Observable<AliOrder[]>

  constructor(private db:AngularFirestore,private modalService: NgbModal) { }

  ngOnInit() {
    this.doneOrders = this.loadDoneOrders()
  }

  loadDoneOrders(){
    return this.db.collection(this.dir, ref=>{
      return ref.where('done','==',true)
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
    const modalRef = this.modalService.open(OrderDetailForDoneOrderComponent,{centered:true});
    modalRef.componentInstance.order = order
  }

}
