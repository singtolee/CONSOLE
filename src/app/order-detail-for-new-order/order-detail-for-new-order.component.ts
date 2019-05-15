import { Component, OnInit, Input } from '@angular/core';
import { MiniProduct } from '../tools/MiniProduct'
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-order-detail-for-new-order',
  templateUrl: './order-detail-for-new-order.component.html',
  styleUrls: ['./order-detail-for-new-order.component.css']
})
export class OrderDetailForNewOrderComponent implements OnInit {
  @Input() order;
  prds:MiniProduct[]

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.prds = this.order.products
  }

}
