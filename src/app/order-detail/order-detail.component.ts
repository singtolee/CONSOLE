import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { MiniProduct } from '../tools/MiniProduct'
import { AngularFirestore } from '@angular/fire/firestore';
import { CmsService } from '../cms.service'

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  @Input() order;
  dir = "MYORDERS" 

  prds:MiniProduct[]

  constructor(public activeModal: NgbActiveModal,private db : AngularFirestore, private cms:CmsService) { }

  ngOnInit() {

    this.prds = this.order.products

  }

  togglePaymentStatus(sta:boolean){
    this.db.collection(this.dir).doc(this.order.key).update({'paid':sta})
  }
  toggleBoughtStatus(sta:boolean){
    this.db.collection(this.dir).doc(this.order.key).update({'bought':sta})
  }
  toggleArrivedStatus(sta:boolean){
    this.db.collection(this.dir).doc(this.order.key).update({'arrived':sta})
  }
  toggleDoneStatus(sta:boolean){
    this.db.collection(this.dir).doc(this.order.key).update({'done':sta})
  }

  updateWeight(xx){

    var roundedWeight = Math.ceil(xx)

    var fee = this.calculateShippingCostByWeight(roundedWeight)
    this.db.collection(this.dir).doc(this.order.key).update({'actualWeight':xx,'actualShippingCost':fee,'arrived':true})

  }

  calculateShippingCostByWeight(weight){

    var minSc = this.cms.costSheet.minShippingCost
    var land = this.cms.costSheet.land

    var cc = weight * land

    return cc > minSc ? cc : minSc

  }

}
