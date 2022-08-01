import { SearchVo } from '../myutils/searchVo';

export class PurchaseItemVo {
  id: string;

  detailsId: string;

  name: string;

  description: string;

  qty: string;

  balanceQty: string;

  unit: string;

  remark: string;

  createdAt: Date;

  updatedAt: Date;

  isactived: string;

  islocked: string;

  createUid: string;

  updatedUid: string;

  mid: string;
}

export class PurchaseItemSearchVo extends SearchVo {
  fundType: string;

  mid: string;

  status: number;
}
