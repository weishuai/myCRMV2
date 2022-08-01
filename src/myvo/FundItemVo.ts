import { SearchVo } from '../myutils/searchVo';

export class FundItemAddVo {
  name: string;

  fundCategoryId: string;
}

export class FundItemUpdateVo extends FundItemAddVo {
  id: string;
}

export class FundItemGetVo extends FundItemUpdateVo {}
