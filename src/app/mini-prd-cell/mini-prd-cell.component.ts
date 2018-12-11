import { Component, OnInit, Input } from '@angular/core';
import { MiniProduct } from '../tools/MiniProduct';

@Component({
  selector: 'app-mini-prd-cell',
  templateUrl: './mini-prd-cell.component.html',
  styleUrls: ['./mini-prd-cell.component.css']
})
export class MiniPrdCellComponent implements OnInit {

  @Input() public prd:MiniProduct

  constructor() { }

  ngOnInit() {
  }

  urlBuilder(){
    return "https://detail.1688.com/offer/" + this.prd.pid + ".html"
  }

}
