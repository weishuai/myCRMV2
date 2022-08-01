import { SearchVo } from '../myutils/searchVo';

export class OpportunityCommentsVo {
  id: string;

  mid: string;

  subject: string;

  assignTo: string;

  note: string;

  createdAt: Date;

  updatedAt: Date;

  isactived: string;

  islocked: string;

  createUid: string;

  updatedUid: string;
}

export class OpportunityCommentsSearchVo extends SearchVo {
  fundType: string;

  mid: string;

  status: number;
}
