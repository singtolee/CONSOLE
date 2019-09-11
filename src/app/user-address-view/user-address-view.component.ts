import { Component, OnInit, Input } from '@angular/core';
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
  selector: 'app-user-address-view',
  templateUrl: './user-address-view.component.html',
  styleUrls: ['./user-address-view.component.css']
})
export class UserAddressViewComponent implements OnInit {

  dir = "ADDRESSES"

  doc: AngularFirestoreDocument<Address>

  userAddress:Observable<Address>

  @Input() uid;

  constructor(private db: AngularFirestore) { }

  ngOnInit() {
    this.doc = this.db.collection(this.dir).doc(this.uid)
    this.userAddress = this.doc.valueChanges();
  }

}
