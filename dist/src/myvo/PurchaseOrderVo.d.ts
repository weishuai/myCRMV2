import { SearchVo } from '../myutils/searchVo';
export declare class PurchaseOrderVo {
    id: string;
    name: string;
    currency: string;
    contact: string;
    paymentTerms: string;
    taxes: string;
    remark: string;
    createdAt: Date;
    updatedAt: Date;
    isactived: string;
    islocked: string;
    createUid: string;
    updatedUid: string;
    refNumber: string;
}
export declare class PurchaseOrderSearchVo extends SearchVo {
    fundType: string;
    status: number;
}
