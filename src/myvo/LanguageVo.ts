import { SearchVo } from '../myutils/searchVo';

export class LanguageVo {
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

export class LanguageSearchVo extends SearchVo {
  fundType: string;

  status: number;
}