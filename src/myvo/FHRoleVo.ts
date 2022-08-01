import { SearchVo } from '../myutils/searchVo';

export class FHRoleVo {
  id: string;

  name: string;

  app: string;

  isDefault: number;

  isDel: number;

  createdAt: Date;

  updatedAt: Date;
}

export class FHRoleSearchVo extends SearchVo {
  fundType: string;

  status: number;
}
