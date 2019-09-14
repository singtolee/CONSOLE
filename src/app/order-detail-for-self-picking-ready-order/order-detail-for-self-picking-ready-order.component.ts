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

  toggleShippingFeePaid(sta:boolean){
    this.db.collection(this.dir).doc(this.order.key).update({'shippingFeePaid':sta})
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
