import { FHcrmTable1SearchVo, FHcrmTable1Vo } from '../myvo/fhcrm_table1_vo';
export declare class FHcrmTable1Controller {
    private fhcrmTable1Service;
    createFHcrmTable1(fhcrmTable1Vo: FHcrmTable1Vo): Promise<import("typeorm").InsertResult>;
    updateaFHcrmTable1(userToken: string, Id: string, fhcrmTable1Vo: FHcrmTable1Vo): Promise<import("typeorm").UpdateResult>;
    removeFHcrmTable1(Id: string): Promise<import("typeorm").UpdateResult>;
    getFHcrmTable1ById(Id: string): Promise<any>;
    getFHcrmTable1List(query: any): Promise<any[]>;
    getFHcrmTable1All(search: FHcrmTable1SearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getFHcrmTable1AllView(): Promise<any[]>;
}
