import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(public activeModal: NgbActiveModal,private db : AngularFirestore,private router : Router) { }

  ngOnInit() {

    this.prds = this.order.products

  }

  gotoPrintPage(){
    this.activeModal.dismiss();
    this.router.navigate(['/print',this.order.key]);
  }

  updateWeightAndShippingFee(one,two,three,trackingId){
    var partonefee : number = Number(one);
    var parttwofee : number = Number(two);
    var partthreefee:number = Number(three);
    var tot = partonefee + parttwofee + partthreefee;
    this.db.collection(this.dir).doc(this.order.key).update({'actualShippingCost':tot,'partthree':partthreefee,'shipped':true,'trackId':trackingId})
  }

}
