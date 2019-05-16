import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { MiniProduct } from '../tools/MiniProduct'
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-order-detail-for-express-order',
  templateUrl: './order-detail-for-express-order.component.html',
  styleUrls: ['./order-detail-for-express-order.component.css']
})
export class OrderDetailForExpressOrderComponent implements OnInit {

  @Input() order;
  dir = "MYORDERS" 

  prds:MiniProduct[]

  constructor(public activeModal: NgbActiveModal,private db : AngularFirestore) { }

  ngOnInit() {

    this.prds = this.order.products

  }

  updateWeightAndShippingFee(weight,fee,trackingId){
    var numWei:number = Number(weight);
    var numFee:number = Number(fee);
    this.db.collection(this.dir).doc(this.order.key).update({'actualWeight':numWei,'actualShippingCost':numFee,'shipped':true,'trackId':trackingId})
  }

}
