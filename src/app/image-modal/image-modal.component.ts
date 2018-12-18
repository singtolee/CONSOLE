import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { AngularFirestore } from '@angular/fire/firestore';
import { AliOrder } from '../tools/AliOrder';
@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.css']
})
export class ImageModalComponent implements OnInit {
  @Input() order:AliOrder;
  dir = "MYORDERS" 

  constructor(public activeModal: NgbActiveModal,private db:AngularFirestore) { }

  ngOnInit() {
  }

  togglePaid(sta:boolean){
    this.db.collection(this.dir).doc(this.order.key).update({'paid':sta})
  }

  toggleShippingFeePaid(sta:boolean){
    this.db.collection(this.dir).doc(this.order.key).update({'shippingFeePaid':sta})
  }

}
