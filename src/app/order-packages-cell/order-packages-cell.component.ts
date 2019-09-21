import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AliOrder } from '../tools/AliOrder';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductsListViewComponent } from '../products-list-view/products-list-view.component';
import { PopOutWindowComponent } from '../pop-out-window/pop-out-window.component';

@Component({
  selector: 'app-order-packages-cell',
  templateUrl: './order-packages-cell.component.html',
  styleUrls: ['./order-packages-cell.component.css']
})
export class OrderPackagesCellComponent implements OnInit {

  @Input() order:AliOrder
  dir = "MYORDERS" 

  constructor(private db : AngularFirestore, private modalService: NgbModal,private router : Router) { }

  ngOnInit() {
  }

  undateParcelsInfo(){
    //console.log("UPDATE PARCELS")
    const baoguo = this.order.parcels.map((obj)=> {return Object.assign({}, obj)});
    this.db.collection(this.dir).doc(this.order.key).update({'parcels':baoguo})
    //console.log(baoguo)
  }

  viewAllProducts(){
    const modalRef = this.modalService.open(ProductsListViewComponent,{centered: true})
    modalRef.componentInstance.products = this.order.products
  }

  printPackingList(){
    this.router.navigate(['/print',this.order.key]);
  }

  setOrderArrived(){
    const mod = this.modalService.open(PopOutWindowComponent,{centered: true})
    mod.componentInstance.key = this.order.key
    

  }

}
