import { SearchVo } from '../myutils/searchVo';
export declare class LeadpoolsVo {
    name: string;
    id: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    isactived: string;
    islocked: string;
    createUid: string;
    updatedUid: string;
}
export declare class LeadpoolsSearchVo extends SearchVo {
    fundType: string;
    status: number;
}
