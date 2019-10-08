import { ExpressCompany } from './ExpressCompany';

export class Baoguo {

    constructor(public prdFee: number, public part1ShippingFee : number){
        this.company = "ZTKD"
        this.danhao = "trackingID"
        this.yunfei = part1ShippingFee
        this.huokuan = prdFee   //现在开始记录总cny付款额
        this.weight = 0
        this.size = 0
        this.tpiId = "Dimension"  //一段时间用于存储20*30*40 string 尺寸
        this.unitPrice = 9000
        this.remark = "NORMAL"  //记录确实，退款，追款等特殊情况
        this.status = 1
        this.description = "商品名称*QTY"
        this.box_h = 0
        this.box_l = 0
        this.box_w = 0
    }


    company: string;
    danhao: string;  
    yunfei:number;
    huokuan: number;  //现在记录总额（货款+运费）
    weight: number;
    size: number;
    tpiId: string;
    unitPrice: number;
    remark: string;
    //add two more attributes
    status: number;
    description: string
    //dimension
    box_h:number;
    box_l:number;
    box_w:number;


}

/*
Package status

1 Bought
2 Cancelled
3 Lost
4 Damaged
5 Posted_by_Vendor
6 TPI_C
7 TPI_T
8 ARR_Alitoyou
9 Posted_by_Alitoyou


*/