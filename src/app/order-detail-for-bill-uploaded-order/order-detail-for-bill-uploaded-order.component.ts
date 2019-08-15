import { Component, OnInit, Input } from '@angular/core';
import { MiniProduct } from '../tools/MiniProduct'
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-order-detail-for-bill-uploaded-order',
  templateUrl: './order-detail-for-bill-uploaded-order.component.html',
  styleUrls: ['./order-detail-for-bill-uploaded-order.component.css']
})
export class OrderDetailForBillUploadedOrderComponent implements OnInit {

  @Input() order;
  prds:MiniProduct[]
  dir = "MYORDERS"

  constructor(public activeModal: NgbActiveModal, private db : AngularFirestore) { }

  ngOnInit() {
    this.prds = this.order.products
  }

  setOrderPaid(){
    this.db.collection(this.dir).doc(this.order.key).update({'paid':true});
  }

  deleteOrder(){
    this.db.collection(this.dir).doc(this.order.key).delete()
  }

  setEstimatedShippingFee(eshippingfee){
    this.db.collection(this.dir).doc(this.order.key).update({'evaluatedShippingFee':eshippingfee});
  }

}
