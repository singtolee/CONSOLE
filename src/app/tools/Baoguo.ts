import { ExpressCompany } from './ExpressCompany';

export class Baoguo {

    constructor(public prdFee: number, public part1ShippingFee : number){
        this.company = "ZTKD"
        this.danhao = "trackingID"
        this.yunfei = part1ShippingFee
        this.huokuan = prdFee
        this.weight = 0
        this.size = 0
        this.tpiId = "Dimension"
        this.unitPrice = 9000
        this.remark = "STATUS"


    }


    company: string;
    danhao: string;
    yunfei:number;
    huokuan: number;
    weight: number;
    size: number;
    tpiId: string;
    unitPrice: number;
    remark: string;


}