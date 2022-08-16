import { SearchVo } from '../myutils/searchVo';
export declare class QuotationItemVo {
    id: string;
    mid: string;
    name: string;
    photo: string;
    percentage: string;
    directPrice: string;
    reduction: string;
    description: string;
    qty: string;
    unit: string;
    unitPrice: string;
    unitCost: string;
    remark: string;
    createdAt: Date;
    updatedAt: Date;
    isactived: string;
    islocked: string;
    createUid: string;
    updatedUid: string;
    discount: string;
    discountType: string;
    productname: string;
}
export declare class QuotationItemSearchVo extends SearchVo {
    fundType: string;
    mid: string;
    status: number;
}
