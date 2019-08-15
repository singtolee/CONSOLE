import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AliCart } from '../tools/AliCart';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-carts-open',
  templateUrl: './carts-open.component.html',
  styleUrls: ['./carts-open.component.css']
})
export class CartsOpenComponent implements OnInit {

  dir = "MYCARTS"
  openCarts: Observable<AliCart[]>

  constructor(private db:AngularFirestore) { }

  ngOnInit() {
    this.openCarts = this.loadAllCarts()

  }

  loadAllCarts(){
    return this.db.collection(this.dir, ref=>{
      return ref.where('ordered','==',false)
      .orderBy('date','desc')
    }).snapshotChanges().pipe(map(actions=>{
      return actions.map(a=>{
        const data = a.payload.doc.data() as AliCart;
        const id = a.payload.doc.id;
        data.key = id
        return data;
      })
    }))

  }

  convert(a){
    return a.toDate()
  }

}
