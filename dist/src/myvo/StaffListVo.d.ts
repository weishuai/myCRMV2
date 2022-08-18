import { SearchVo } from '../myutils/searchVo';
export declare class StaffListVo {
    id: string;
    fullName: string;
    contactNo: string;
    email: string;
    role: string;
    clients: string;
    type: string;
    login: string;
    updatedAt: Date;
    isactived: string;
    islocked: string;
    createUid: string;
    updatedUid: string;
}
export declare class LStaffListVo {
    id: string;
    fullName: string;
    contactNo: string;
    email: string;
    role: string;
    clients: string;
    ltype: string;
    login: string;
    updatedAt: Date;
    isactived: string;
    islocked: string;
    createUid: string;
    updatedUid: string;
}
export declare class StaffListSearchVo extends SearchVo {
    fundType: string;
    status: number;
}