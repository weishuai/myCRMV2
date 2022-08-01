import { SearchVo } from '../myutils/searchVo';
export declare class InvoicePaymentVo {
    id: string;
    invoiceId: string;
    date: Date;
    method: string;
    refNo: string;
    paymentAmount: string;
    remark: string;
    createdAt: Date;
    updatedAt: Date;
    isactived: string;
    islocked: string;
    createUid: string;
    updatedUid: string;
    mid: string;
    photo: string;
}
export declare class InvoicePaymentSearchVo extends SearchVo {
    fundType: string;
    mid: string;
    status: number;
}
