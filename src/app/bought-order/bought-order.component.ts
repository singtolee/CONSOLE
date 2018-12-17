import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AliOrder } from '../tools/AliOrder'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OrderDetailComponent } from '../order-detail/order-detail.component'

@Component({
  selector: 'app-bought-order',
  templateUrl: './bought-order.component.html',
  styleUrls: ['./bought-order.component.css']
})
export class BoughtOrderComponent implements OnInit {
  dir = "MYORDERS" 

  boughtOrders: Observable<AliOrder[]>
  constructor(private db:AngularFirestore,private modalService: NgbModal) { }

  ngOnInit() {
    this.boughtOrders = this.loadBoughtOrders()
  }

  loadBoughtOrders(){
    return this.db.collection(this.dir, ref=>{
      return ref.where('done','==',false)
      .where('paid','==',true)
      .where('bought','==',true)
      .where('arrived','==',false)
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

  viewBoughtOrderDetail(){
  }

  unBought(key:string){
    this.db.collection(this.dir).doc(key).update({'bought':false})
  }

  viewOrder(order:AliOrder){
    const modalRef = this.modalService.open(OrderDetailComponent,{centered:true});
    modalRef.componentInstance.order = order
  }

}
