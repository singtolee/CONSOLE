import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { MiniProduct } from '../tools/MiniProduct'
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-order-detail-for-self-picking-ready-order',
  templateUrl: './order-detail-for-self-picking-ready-order.component.html',
  styleUrls: ['./order-detail-for-self-picking-ready-order.component.css']
})
export class OrderDetailForSelfPickingReadyOrderComponent implements OnInit {

  @Input() order;
  dir = "MYORDERS" 

  prds:MiniProduct[]

  constructor(public activeModal: NgbActiveModal,private db : AngularFirestore) { }

  ngOnInit() {

    this.prds = this.order.products

  }

  setOrderDone(){
    this.db.collection(this.dir).doc(this.order.key).update({'done':true})
  }

}
