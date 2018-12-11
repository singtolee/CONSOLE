import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ImageModalComponent } from '../image-modal/image-modal.component';
import { UserInfoCardComponent } from '../user-info-card/user-info-card.component'
import { OrderDetailComponent } from '../order-detail/order-detail.component'

@Component({
  selector: 'app-paid-orders-cell',
  templateUrl: './paid-orders-cell.component.html',
  styleUrls: ['./paid-orders-cell.component.css']
})
export class PaidOrdersCellComponent implements OnInit {
  dir = "MYORDERS"

  @Input() public order 

  constructor(private db:AngularFirestore,private modalService: NgbModal) { }

  ngOnInit() {
  }

  convert(a){
    return a.toDate()
  }

  togglePaidStatus(paid:boolean){
    this.db.collection(this.dir).doc(this.order.key).update({'paid':paid})
  }

  toggleProductsBoughtStatus(bought:boolean){
    this.db.collection(this.dir).doc(this.order.key).update({'bought':bought})
  }

  showbill(url:string){
    const modalRef = this.modalService.open(ImageModalComponent,{centered:true});
    modalRef.componentInstance.image = url;
  }

  viewUserById(){
    //modal 弹出用户卡，查看用户信息
    const modalRef = this.modalService.open(UserInfoCardComponent,{centered:true});
    modalRef.componentInstance.uid = this.order.uid;
  }

  viewOrder(){
    const modalRef = this.modalService.open(OrderDetailComponent,{centered:true});
    modalRef.componentInstance.order = this.order
  }

}
