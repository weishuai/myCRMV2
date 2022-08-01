import { SearchVo } from '../myutils/searchVo';

export class JobVo {
  id: string;

  title: string;

  wiType: string;

  clients: string;

  enabled: string;

  createdAt: Date;

  updatedAt: Date;

  isactived: string;

  islocked: string;

  createUid: string;

  updatedUid: string;

  photo: string;
}

export class JobSearchVo extends SearchVo {
  fundType: string;

  status: number;
}
