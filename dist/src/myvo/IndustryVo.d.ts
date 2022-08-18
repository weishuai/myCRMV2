import { SearchVo } from '../myutils/searchVo';
export declare class IndustryVo {
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
export declare class IndustrySearchVo extends SearchVo {
    fundType: string;
    status: number;
}