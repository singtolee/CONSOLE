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
    this.db.collection(this.dir).doc(this.order.key).update({'localShippingMethod':0,'localShippingMethodSet':true,'shipped':false})
  }

  setToEms(){
    this.db.collection(this.dir).doc(this.order.key).update({'localShippingMethod':1,'localShippingMethodSet':true,'shipped':false})
  }

  setToKerry(){
    this.db.collection(this.dir).doc(this.order.key).update({'localShippingMethod':2,'localShippingMethodSet':true,'shipped':false})
  }

  setOrderArrived(){
    this.db.collection(this.dir).doc(this.order.key).update({'arrived':true,'localShippingMethodSet':false})
  }

}
