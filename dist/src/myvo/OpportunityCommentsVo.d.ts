import { SearchVo } from '../myutils/searchVo';
export declare class OpportunityCommentsVo {
    id: string;
    mid: string;
    subject: string;
    assignTo: string;
    note: string;
    createdAt: Date;
    updatedAt: Date;
    isactived: string;
    islocked: string;
    createUid: string;
    updatedUid: string;
}
export declare class OpportunityCommentsSearchVo extends SearchVo {
    fundType: string;
    mid: string;
    status: number;
}
