import { SearchVo } from '../myutils/searchVo';
export declare class WorkNoteVo {
    id: string;
    workId: string;
    title: string;
    note: string;
    assignTo: string;
    createdAt: Date;
    updatedAt: Date;
    isactived: string;
    islocked: string;
    createUid: string;
    updatedUid: string;
    mid: string;
}
export declare class WorkNoteSearchVo extends SearchVo {
    fundType: string;
    status: number;
    mid: string;
}
