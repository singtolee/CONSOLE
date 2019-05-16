import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { MiniProduct } from '../tools/MiniProduct'
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-order-detail-for-bought-order',
  templateUrl: './order-detail-for-bought-order.component.html',
  styleUrls: ['./order-detail-for-bought-order.component.css']
})
export class OrderDetailForBoughtOrderComponent implements OnInit {

  @Input() order;
  dir = "MYORDERS" 

  prds:MiniProduct[]

  constructor(public activeModal: NgbActiveModal,private db : AngularFirestore) { }

  ngOnInit() {

    this.prds = this.order.products

  }

  setToSelfPicking(){
    this.db.collection(this.dir).doc(this.order.key).update({'arrived':true,'localShippingMethod':0})
  }

  setToEms(){
    this.db.collection(this.dir).doc(this.order.key).update({'arrived':true,'localShippingMethod':1})
  }

  setToKerry(){
    this.db.collection(this.dir).doc(this.order.key).update({'arrived':true,'localShippingMethod':2})
  }

  setPrdsBought(prdFee,shippingFee){
    var numPrdFee: number = Number(prdFee);
    var numShippingfee : number = Number(shippingFee);

    this.db.collection(this.dir).doc(this.order.key).update({'cnyPrdsFee':numPrdFee,'cnyShippingFee':numShippingfee,'bought':true})

  }

}
