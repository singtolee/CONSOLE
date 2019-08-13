import { Component, OnInit, Input } from '@angular/core';
import { MiniProduct } from '../tools/MiniProduct';

@Component({
  selector: 'app-th-mini-prd-cell',
  templateUrl: './th-mini-prd-cell.component.html',
  styleUrls: ['./th-mini-prd-cell.component.css']
})
export class ThMiniPrdCellComponent implements OnInit {

  @Input() public prd:MiniProduct

  constructor() { }

  ngOnInit() {
  }

}
