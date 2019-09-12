import { Component, OnInit, Input } from '@angular/core';
import { MiniProduct } from '../tools/MiniProduct'
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-order-detail-for-done-order',
  templateUrl: './order-detail-for-done-order.component.html',
  styleUrls: ['./order-detail-for-done-order.component.css']
})
export class OrderDetailForDoneOrderComponent implements OnInit {

  @Input() order;
  prds:MiniProduct[]
  dir = "MYORDERS" 

  constructor(public activeModal: NgbActiveModal, private db : AngularFirestore) { }

  ngOnInit() {
    this.prds = this.order.products
  }

  deleteOrder(){
    this.db.collection(this.dir).doc(this.order.key).delete()
  }

  unDoneOrder(){
    this.db.collection(this.dir).doc(this.order.key).update({'done':false})
  }

}
