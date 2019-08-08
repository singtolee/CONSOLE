import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-packing-list',
  templateUrl: './packing-list.component.html',
  styleUrls: ['./packing-list.component.css']
})
export class PackingListComponent implements OnInit {

  @Input() order;

  constructor() { }

  ngOnInit() {
  }

}
