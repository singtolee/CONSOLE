import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { MiniProduct } from '../tools/MiniProduct'
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-order-detail-for-self-picking-orders',
  templateUrl: './order-detail-for-self-picking-orders.component.html',
  styleUrls: ['./order-detail-for-self-picking-orders.component.css']
})
export class OrderDetailForSelfPickingOrdersComponent implements OnInit {

  @Input() order;
  dir = "MYORDERS" 

  prds:MiniProduct[]

  constructor(public activeModal: NgbActiveModal,private db : AngularFirestore) { }

  ngOnInit() {

    this.prds = this.order.products

  }

  updateWeightAndShippingFee(fee){
    var numFee:number = Number(fee);
    this.db.collection(this.dir).doc(this.order.key).update({'actualShippingCost':numFee,'shipped':true, 'partthree':0})
  }

}
