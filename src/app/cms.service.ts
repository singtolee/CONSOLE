import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';

interface Cost {
  land:number;
  landCube:number;
  minShippingCost:number;
  rate:number;
  scr:number;
}

@Injectable({
  providedIn: 'root'
})
export class CmsService {

  dir = 'SHIPPINGCOST';
  dirDoc = 'shippingcost';
  costSheet:Cost;

  constructor(private db:AngularFirestore) { 
    this.db.doc<Cost>(`SHIPPINGCOST/shippingcost`).valueChanges().pipe(take(1)).subscribe(cc=>this.costSheet=cc)
  }
}
