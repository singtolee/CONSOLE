import { Component, OnInit } from '@angular/core';
import { MiniProduct } from '../tools/MiniProduct';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-products-list-view',
  templateUrl: './products-list-view.component.html',
  styleUrls: ['./products-list-view.component.css']
})
export class ProductsListViewComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) {}

  products:MiniProduct[]

  ngOnInit() {
  }

}
