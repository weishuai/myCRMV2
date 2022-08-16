import { SearchVo } from '../myutils/searchVo';
export declare class TermConditionVo {
    id: string;
    name: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    isactived: string;
    islocked: string;
    createUid: string;
    updatedUid: string;
}
export declare class TermConditionSearchVo extends SearchVo {
    fundType: string;
    status: number;
}
