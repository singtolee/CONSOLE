import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { MiniProduct } from '../tools/MiniProduct'
import { AngularFirestore } from '@angular/fire/firestore';
import { AliOrder } from '../tools/AliOrder';


@Component({
  selector: 'app-order-detail-for-bought-order',
  templateUrl: './order-detail-for-bought-order.component.html',
  styleUrls: ['./order-detail-for-bought-order.component.css']
})
export class OrderDetailForBoughtOrderComponent implements OnInit {

  @Input() order: AliOrder;
  dir = "MYORDERS" 

  prds:MiniProduct[]

  constructor(public activeModal: NgbActiveModal,
              private db : AngularFirestore,
              private router : Router) { }

  ngOnInit() {
    this.prds = this.order.products

  }

  setToSelfPicking(){
    this.db.collection(this.dir).doc(this.order.key).update({'localShippingMethod':0,'localShippingMethodSet':true,})
  }

  setToEms(){
    this.db.collection(this.dir).doc(this.order.key).update({'localShippingMethod':1,'localShippingMethodSet':true,})
  }

  setToKerry(){
    this.db.collection(this.dir).doc(this.order.key).update({'localShippingMethod':2,'localShippingMethodSet':true})
  }

  setOrderArrived(actualWeight, cost){
    var aw:number = Number(actualWeight);
    var tCost:number = Number(cost);
    //console.log(aw);
    this.db.collection(this.dir).doc(this.order.key).update({'arrived':true,'actualWeight':aw,'parttwo':tCost});
  }

  saveDanhao(danhao){
    //console.log(danhao);
    this.db.collection(this.dir).doc(this.order.key).update({'yundanhaos':danhao});
  }

  gotoPrintPage(){
    this.activeModal.dismiss();
    this.router.navigate(['/print',this.order.key]);
  }

  setFees(prdFee,shippingFee){
    var numPrdFee: number = Number(prdFee);
    var numShippingfee : number = Number(shippingFee);

    this.db.collection(this.dir).doc(this.order.key).update({'cnyPrdsFee':numPrdFee,'cnyShippingFee':numShippingfee})

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
