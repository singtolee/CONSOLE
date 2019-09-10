import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AliOrder } from '../tools/AliOrder'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserInfoCardComponent } from '../user-info-card/user-info-card.component'
import { OrderDetailForPaidOrderComponent } from '../order-detail-for-paid-order/order-detail-for-paid-order.component'

@Component({
  selector: 'app-paid-orders-cell',
  templateUrl: './paid-orders-cell.component.html',
  styleUrls: ['./paid-orders-cell.component.css']
})
export class PaidOrdersCellComponent implements OnInit {

  dir = "MYORDERS" 

  paidOrders: Observable<AliOrder[]>

  constructor(private db:AngularFirestore,private modalService: NgbModal) { }

  ngOnInit() {
    this.paidOrders = this.loadPaidOrders()
  }

  loadPaidOrders(){
    return this.db.collection(this.dir, ref=>{
      return ref.where('done','==',false)
      .where('paid','==',true)
      .where('bought','==',false)
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

  togglePaidStatus(key:string){
    this.db.collection(this.dir).doc(key).update({'paid':false})
  }

  toggleProductsBoughtStatus(key:string){
    this.db.collection(this.dir).doc(key).update({'bought':true})
  }

  viewUserById(uid:string){
    //modal 弹出用户卡，查看用户信息
    const modalRef = this.modalService.open(UserInfoCardComponent,{centered:true});
    modalRef.componentInstance.uid = uid;
  }

  viewOrder(order:AliOrder){
    const modalRef = this.modalService.open(OrderDetailForPaidOrderComponent,{size : 'lg', centered:true});
    modalRef.componentInstance.order = order
  }

}
