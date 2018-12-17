import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AliOrder } from '../tools/AliOrder'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ImageModalComponent } from '../image-modal/image-modal.component';

@Component({
  selector: 'app-bill-uploaded-order',
  templateUrl: './bill-uploaded-order.component.html',
  styleUrls: ['./bill-uploaded-order.component.css']
})
export class BillUploadedOrderComponent implements OnInit {

  dir = "MYORDERS"
  billUploadedOrders: Observable<AliOrder[]>

  constructor(private db:AngularFirestore,private modalService: NgbModal) { }

  ngOnInit() {
    this.billUploadedOrders = this.loadBillUploadedOrders()
  }

  loadBillUploadedOrders(){
    return this.db.collection(this.dir, ref=>{
      return ref.where('done','==',false)
      .where('paid','==',false)
      .where('prdValueBillUploaded','==',true)
      .orderBy('date','desc')
    }).snapshotChanges().pipe(map(actions=>{
      return actions.map(a=>{
        const data = a.payload.doc.data() as AliOrder;
        const id = a.payload.doc.id;
        data.key = id
        return data;
      })
    }))

  }

  showbill(bill:AliOrder){
    const modalRef = this.modalService.open(ImageModalComponent,{centered:true});
    modalRef.componentInstance.order = bill;
  }


}
