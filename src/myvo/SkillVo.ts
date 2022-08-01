import { SearchVo } from '../myutils/searchVo';

export class SkillVo {
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

export class SkillSearchVo extends SearchVo {
  fundType: string;

  status: number;
}
