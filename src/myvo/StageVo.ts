import { SearchVo } from '../myutils/searchVo';

export class StageVo {
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

export class StageSearchVo extends SearchVo {
  fundType: string;

  status: number;
}