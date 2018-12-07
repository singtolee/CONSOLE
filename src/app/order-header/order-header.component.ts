import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ImageModalComponent } from '../image-modal/image-modal.component';
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-order-header',
  templateUrl: './order-header.component.html',
  styleUrls: ['./order-header.component.css']
})
export class OrderHeaderComponent implements OnInit {

  dir = "MYORDERS"

  @Input() public order 

  constructor(private modalService: NgbModal, private db:AngularFirestore) { }

  ngOnInit() {
  }

  convert(a){
    return a.toDate()
  }

  showbill(bill:string){
    const modalRef = this.modalService.open(ImageModalComponent,{centered:true});
    modalRef.componentInstance.image = bill;
  }

  paymentReceived(){
    this.db.collection(this.dir).doc(this.order.key).update({'paid':true})
  }

  paymentNotReceived(){
    this.db.collection(this.dir).doc(this.order.key).update({'paid':false})
  }

}
