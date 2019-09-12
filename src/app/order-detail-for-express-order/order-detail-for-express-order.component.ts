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

  getMyPart1(){
    var fee = 0;
    for(var i=0;i<this.order.parcels.length;i++){
      fee = fee + this.order.parcels[i].yunfei
    }
    return fee
  }

  getUserPart1(){
    var fee = 0;
    for(var i=0;i<this.order.parcels.length;i++){
      if(this.order.parcels[i].yunfei*5 < 50){
        fee = fee + 50
      }else {
        fee = fee + this.order.parcels[i].yunfei*5
      }
    }
    return fee
  }

  getMyPart2(){
    var fee = 0
    for(var i=0;i<this.order.parcels.length;i++){
      fee = fee + this.order.parcels[i].size*7000
    }
    return fee
  }

  getUserPart2(){
    var fee = 0
    for(var i=0;i<this.order.parcels.length;i++){
      if(this.order.parcels[i].weight*39 > this.order.parcels[i].size*this.order.parcels[i].unitPrice){
        fee = fee + this.order.parcels[i].weight*39
      }else {
        fee = fee + this.order.parcels[i].size*this.order.parcels[i].unitPrice
      }
    }
    return fee

  }

}
