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
  localShippingMethodSet:boolean;
  localShippingMethod:number;
  trackId:string;

  //for accounting
  cnyPrdsFee:number;
  cnyShippingFee:number;

  //记录此订单包含的全部商品是否已经到齐，暨是否全部运达曼谷
  //allArrivedBkk:boolean;

  shipped: boolean;  //记录订单是否处于可取货状态，对于EMS和KERRY，shipped 为true 时用户可以上传付款单；
  discountCode: string; //辨别推销员
  evaluatedShippingFee: string;  //帮助用户评估运费

  parttwo: number;
  partthree: number;


}