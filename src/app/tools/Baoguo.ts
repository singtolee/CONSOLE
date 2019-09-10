import { ExpressCompany } from './ExpressCompany';

export class Baoguo {

    constructor(public prdFee: number, public part1ShippingFee : number){
        this.company = "YTKD"
        this.danhao = "998877665544"
        this.yunfei = part1ShippingFee
        this.huokuan = prdFee
        this.weight = 0
        this.size = 0
        this.tpiId = "1234444"
        this.unitPrice = 9000
        this.remark = "douqil"


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