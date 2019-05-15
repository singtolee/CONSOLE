import { MiniProduct } from './MiniProduct'
export class AliOrder {
    uid:string;
  date:Date;

  bought:boolean;

  arrived:boolean;

  done:boolean;

  paid:boolean;

  billUrl:string;
  prdValueBillUploaded:boolean;

  shippingFeePaid:boolean;
  shippingBillUrl:string;
  shippingFeeBillUploaded:boolean;
  
  totalPrice:number;
  totalWeight:number;
  actualWeight:number;
  totalQty:number;
  serviceCharge:number;
  estimatedShippingCost:number;
  actualShippingCost:number;
  grandTotal:number;
  cartIdList:string[];
  products:MiniProduct[];
  key:string;
  //for shipping method
  localShippingMethod:number;
  trackId:string;

  //for accounting
  cnyPrdsFee:number;
  cnyShippingFee:number;


}