import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AliOrder } from '../tools/AliOrder';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductsListViewComponent } from '../products-list-view/products-list-view.component';
import { PopOutWindowComponent } from '../pop-out-window/pop-out-window.component';
import { MiniProduct } from '../tools/MiniProduct';
import { Baoguo } from '../tools/Baoguo';

@Component({
  selector: 'app-order-packages-cell',
  templateUrl: './order-packages-cell.component.html',
  styleUrls: ['./order-packages-cell.component.css']
})
export class OrderPackagesCellComponent implements OnInit {

  @Input() order:AliOrder
  dir = "MYORDERS" 

  prdNames : MiniProduct[]

  constructor(private db : AngularFirestore, private modalService: NgbModal,private router : Router) { }

  ngOnInit() {
    //this.prdNames = [this.order.products[0]]
    this.prepareProductsNames()
  
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

  prepareProductsNames(){
    //检查有几个PID，过滤重复的商品名
    this.prdNames = [this.order.products[0]]
    let ppds = this.order.products
    for(let i = 1, len = ppds.length;i<len;i++){
      ppds[i].pid !== ppds[i-1].pid && this.prdNames.push(ppds[i])
    }
  }

  addParcel(total,sp){
    let tot = Number(total)
    let spf = Number(sp)
    let parcel = new Baoguo(tot,spf)
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


}
