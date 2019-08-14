import { Component, OnInit , Input} from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { MiniProduct } from '../tools/MiniProduct'
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-order-detail-for-paid-order',
  templateUrl: './order-detail-for-paid-order.component.html',
  styleUrls: ['./order-detail-for-paid-order.component.css']
})
export class OrderDetailForPaidOrderComponent implements OnInit {

  @Input() order;
  dir = "MYORDERS" 

  prds:MiniProduct[]

  constructor(public activeModal: NgbActiveModal,private db : AngularFirestore,private router : Router) { }

  ngOnInit() {

    this.prds = this.order.products

  }

  togglePaymentStatus(sta:boolean){
    this.db.collection(this.dir).doc(this.order.key).update({'paid':sta})
  }

  setEstimatedShippingFee(eshippingfee){
    this.db.collection(this.dir).doc(this.order.key).update({'evaluatedShippingFee':eshippingfee});
  }

  setPrdsBought(prdFee,shippingFee){
    var numPrdFee: number = Number(prdFee);
    var numShippingfee : number = Number(shippingFee);

    this.db.collection(this.dir).doc(this.order.key).update({'cnyPrdsFee':numPrdFee,'cnyShippingFee':numShippingfee,'bought':true})

  }

  gotoPrintPage(){
    this.activeModal.dismiss();
    this.router.navigate(['/print',this.order.key]);
  }

  //var roundedWeight = Math.ceil(xx)

}
