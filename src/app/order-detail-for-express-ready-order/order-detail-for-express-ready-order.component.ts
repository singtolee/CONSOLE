import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { MiniProduct } from '../tools/MiniProduct'
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-order-detail-for-express-ready-order',
  templateUrl: './order-detail-for-express-ready-order.component.html',
  styleUrls: ['./order-detail-for-express-ready-order.component.css']
})
export class OrderDetailForExpressReadyOrderComponent implements OnInit {

  @Input() order;
  dir = "MYORDERS" 

  prds:MiniProduct[]

  constructor(public activeModal: NgbActiveModal,private db : AngularFirestore) { }

  ngOnInit() {

    this.prds = this.order.products

  }

  toggleShippingFeePaid(sta:boolean){
    this.db.collection(this.dir).doc(this.order.key).update({'shippingFeePaid':sta})
  }

  setOrderDone(){
    this.db.collection(this.dir).doc(this.order.key).update({'done':true})
  }

  updateTrackingId(tid){
    this.db.collection(this.dir).doc(this.order.key).update({'trackId':tid})
  }

}
