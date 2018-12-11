import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { AngularFirestore,AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface Address {
  address:string;
  city:string;
  consignee:string;
  phone:string;
  postCode:string;
}

@Component({
  selector: 'app-user-info-card',
  templateUrl: './user-info-card.component.html',
  styleUrls: ['./user-info-card.component.css']
})
export class UserInfoCardComponent implements OnInit {

  dir = "ADDRESSES"

  doc: AngularFirestoreDocument<Address>

  userAddress:Observable<Address>

  @Input() uid;

  constructor(public activeModal: NgbActiveModal, private db: AngularFirestore) { }

  ngOnInit() {
    this.doc = this.db.collection(this.dir).doc(this.uid)
    this.userAddress = this.doc.valueChanges();
  }

}
