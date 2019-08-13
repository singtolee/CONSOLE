import { Component, OnInit } from '@angular/core';
import { AliOrder } from '../tools/AliOrder';
import { ActivatedRoute } from '@angular/router'
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-packing-list',
  templateUrl: './packing-list.component.html',
  styleUrls: ['./packing-list.component.css']
})
export class PackingListComponent implements OnInit {

  order: Observable<AliOrder>
  dir = "MYORDERS" 
  orderDoc: AngularFirestoreDocument<AliOrder>

  id

  constructor(private route : ActivatedRoute,
              private db: AngularFirestore) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('oid')
    this.loadOrder()

  }

  loadOrder(){
    this.orderDoc = this.db.collection(this.dir).doc<AliOrder>(this.id)
    this.order = this.orderDoc.valueChanges()
  }

}
