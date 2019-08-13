import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'; 
import { AliOrder } from './tools/AliOrder';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private orderSource = new BehaviorSubject(new AliOrder())
  currentOrder = this.orderSource.asObservable()

  constructor() { }

  changeOrder(order : AliOrder){
    console.log(order.key)
    this.orderSource.next(order)
  }
}
