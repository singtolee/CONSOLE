import { Component, OnInit , Input} from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { MiniProduct } from '../tools/MiniProduct'
import { AngularFirestore } from '@angular/fire/firestore';
import { Baoguo } from '../tools/Baoguo';
import { AliOrder } from '../tools/AliOrder';

@Component({
  selector: 'app-order-detail-for-paid-order',
  templateUrl: './order-detail-for-paid-order.component.html',
  styleUrls: ['./order-detail-for-paid-order.component.css']
})
export class OrderDetailForPaidOrderComponent implements OnInit {

  @Input() order: AliOrder;
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

  setPrdsBought(){
    this.db.collection(this.dir).doc(this.order.key).update({'bought':true})

  }

  setOrderArrived(){
    this.db.collection(this.dir).doc(this.order.key).update({'arrived':true});
  }

  addParcel(prd,sp){
    let prdFee = Number(prd)
    let spf = Number(sp)
    let parcel = new Baoguo(prdFee,spf)
    //this.order.parcels.push(parcel)
    if(Array.isArray(this.order.parcels) && this.order.parcels.length){
      this.order.parcels.push(parcel)
      console.log("ADD")

    }else {
      console.log("SET")
      console.log(parcel.huokuan)
      this.order.parcels = [parcel]
    }

  }

  gotoPrintPage(){
    this.activeModal.dismiss();
    this.router.navigate(['/print',this.order.key]);
  }

  saveParcels(){
    const baoguo = this.order.parcels.map((obj)=> {return Object.assign({}, obj)});
    this.db.collection(this.dir).doc(this.order.key).update({'parcels':baoguo})
  }

  //var roundedWeight = Math.ceil(xx)

}
