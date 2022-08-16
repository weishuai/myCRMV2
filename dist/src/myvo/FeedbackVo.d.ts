import { SearchVo } from '../myutils/searchVo';
export declare class FeedbackVo {
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
export declare class FeedbackSearchVo extends SearchVo {
    fundType: string;
    status: number;
}
