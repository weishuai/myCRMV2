import { SearchVo } from '../myutils/searchVo';

export class FundCategoryAddVo {
  name: string;

  fundType: string;
}

export class FundCategoryUpdateVo extends FundCategoryAddVo {
  id: string;

  isInuse: number;
}

export class FundCategoryGetVo extends FundCategoryUpdateVo {}
