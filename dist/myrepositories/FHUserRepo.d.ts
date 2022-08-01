import { FHUserSearchVo } from '../myvo/FHUserVo';
export declare class FHUserRepo {
    getFHUsersById(id: string): Promise<any>;
    UsersLogin(email: string, password: string): Promise<any[]>;
    getFHUserAll(): Promise<any[]>;
    getFHUserAllView(): Promise<any[]>;
    getFHUser(search: FHUserSearchVo): Promise<any[]>;
}
