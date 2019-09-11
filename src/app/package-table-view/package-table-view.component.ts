import { Component, OnInit, Input } from '@angular/core';
import { Baoguo } from '../tools/Baoguo';

@Component({
  selector: 'app-package-table-view',
  templateUrl: './package-table-view.component.html',
  styleUrls: ['./package-table-view.component.css']
})
export class PackageTableViewComponent implements OnInit {

  @Input() parcels : Baoguo[]

  constructor() { }

  ngOnInit() {
  }

  toThaiBaht(cny: number){
    let fee = cny*5
    if(fee > 50){
      return fee
    }
    return 50
  }

  getPart2(kg:number, size:number,unit:number){

    let pWeight = kg*39
    let pSize = size*unit

    if(pWeight>pSize){
      return pWeight
    }
    return pSize

  }

  sum(){
    var fee : number = 0
    for(var i = 0;i< this.parcels.length;i++){
      fee = fee + this.getPart2(this.parcels[i].weight,this.parcels[i].size,this.parcels[i].unitPrice) + this.toThaiBaht(this.parcels[i].yunfei)
    }

    if(fee < 99){
      return 99
    }

    return fee
  }

}
