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

  updateWeightAndShippingFee(fee,trackingId){
    var numFee:number = Number(fee);
    var tot = numFee + this.order.cnyShippingFee*5 + this.order.parttwo
    this.db.collection(this.dir).doc(this.order.key).update({'actualShippingCost':tot,'partthree':numFee,'shipped':true,'trackId':trackingId})
  }

}
