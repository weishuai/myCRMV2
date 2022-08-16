import { SearchVo } from '../myutils/searchVo';
export declare class TranslateVo {
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
export declare class TranslateSearchVo extends SearchVo {
    fundType: string;
    status: number;
}
