import { SearchVo } from '../myutils/searchVo';
export class AccountTagVo {
  id = '';
  name = '';
  description = '';
  createdAt: Date = new Date();
  updatedAt: Date = new Date();
  isactived = '';
  islocked = '';
  createUid = '';
  updatedUid = '';
}

export class AccountTagSearchVo extends SearchVo {
  fundType: string;
  status: number;
}
