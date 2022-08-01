import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import _ from 'lodash';
import {
  DeliveryOrderSearchVo,
  DeliveryOrderVo,
} from '../myvo/DeliveryOrderVo';
import { DeliveryOrder } from '../myentities';

export class DeliveryOrderRepo {
  async create(accountTagVo: DeliveryOrderVo) {
    return await getRepository(DeliveryOrder).insert(accountTagVo);
  }
  async update(Id: string, user_id: string, accountTagVo: DeliveryOrderVo) {
    accountTagVo.updatedAt = new Date();
    accountTagVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(DeliveryOrder).update(Id, accountTagVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(DeliveryOrder).update(Ids[0], {
      isactived: '1',
    });
  }

  async getdeliveryOrdersById(id: string) {
    const qb =
      getRepository(DeliveryOrder).createQueryBuilder('delivery_order');
    const fields: Record<string, string> = {
      id: 'delivery_order.id',
      linkedInvoice: 'delivery_order.linked_invoice',
      deliveryName: 'delivery_order.delivery_name',
      clientCompany: 'delivery_order.client_company',
      deliveryDate: 'delivery_order.delivery_date',
      clientContact: 'delivery_order.client_contact',
      creator: 'delivery_order.creator',
      postCode: 'delivery_order.post_code',
      street: 'delivery_order.street',
      city: 'delivery_order.city',
      state: 'delivery_order.state',
      country: 'delivery_order.country',
      termsConditions: 'delivery_order.terms_conditions',
      remark: 'delivery_order.remark',
      createdAt: 'delivery_order.created_at',
      updatedAt: 'delivery_order.updated_at',
      isactived: 'delivery_order.isactived',
      islocked: 'delivery_order.islocked',
      createUid: 'delivery_order.create_uid',
      updatedUid: 'delivery_order.updated_uid',
      refNumber: 'delivery_order.ref_number',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'delivery_order', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getdeliveryOrderAll(search: DeliveryOrderSearchVo) {
    const qb =
      getRepository(DeliveryOrder).createQueryBuilder('delivery_order');
    const fields: Record<string, string> = {
      id: 'delivery_order.id',
      linkedInvoice: 'delivery_order.linked_invoice',
      deliveryName: 'delivery_order.delivery_name',
      clientCompany: 'delivery_order.client_company',
      deliveryDate: 'delivery_order.delivery_date',
      clientContact: 'delivery_order.client_contact',
      creator: 'delivery_order.creator',
      postCode: 'delivery_order.post_code',
      street: 'delivery_order.street',
      city: 'delivery_order.city',
      state: 'delivery_order.state',
      country: 'delivery_order.country',
      termsConditions: 'delivery_order.terms_conditions',
      remark: 'delivery_order.remark',
      createdAt: 'delivery_order.created_at',
      updatedAt: 'delivery_order.updated_at',
      isactived: 'delivery_order.isactived',
      islocked: 'delivery_order.islocked',
      createUid: 'delivery_order.create_uid',
      updatedUid: 'delivery_order.updated_uid',
      refNumber: 'delivery_order.ref_number',
    };
    selectFields(qb, fields);
    qb.where("delivery_order.isactived='0'");
    multiSearch(
      qb,
      ['delivery_order.delivery_name', 'delivery_order.remark'],
      search.search,
    );
    qb.orderBy('delivery_order.created_at', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return {'raws':raws,'count':count};
  }

  async getdeliveryOrderAllView() {
    const qb =
      getRepository(DeliveryOrder).createQueryBuilder('delivery_order');
    const fields: Record<string, string> = {
      id: 'delivery_order.id',
      linkedInvoice: 'delivery_order.linked_invoice',
      deliveryName: 'delivery_order.delivery_name',
      clientCompany: 'delivery_order.client_company',
      deliveryDate: 'delivery_order.delivery_date',
      clientContact: 'delivery_order.client_contact',
      creator: 'delivery_order.creator',
      postCode: 'delivery_order.post_code',
      street: 'delivery_order.street',
      city: 'delivery_order.city',
      state: 'delivery_order.state',
      country: 'delivery_order.country',
      termsConditions: 'delivery_order.terms_conditions',
      remark: 'delivery_order.remark',
      createdAt: 'delivery_order.created_at',
      updatedAt: 'delivery_order.updated_at',
      isactived: 'delivery_order.isactived',
      islocked: 'delivery_order.islocked',
      createUid: 'delivery_order.create_uid',
      updatedUid: 'delivery_order.updated_uid',
      refNumber: 'delivery_order.ref_number',
    };
    selectFields(qb, fields);
    qb.where('1=1');

    const res = await qb.getRawMany();
    return res;
  }

  async getdeliveryOrder(userId: string, search: DeliveryOrderSearchVo) {
    const qb =
      getRepository(DeliveryOrder).createQueryBuilder('delivery_order');
    const fields: Record<string, string> = {
      id: 'delivery_order.id',
      linkedInvoice: 'delivery_order.linked_invoice',
      deliveryName: 'delivery_order.delivery_name',
      clientCompany: 'delivery_order.client_company',
      deliveryDate: 'delivery_order.delivery_date',
      clientContact: 'delivery_order.client_contact',
      creator: 'delivery_order.creator',
      postCode: 'delivery_order.post_code',
      street: 'delivery_order.street',
      city: 'delivery_order.city',
      state: 'delivery_order.state',
      country: 'delivery_order.country',
      termsConditions: 'delivery_order.terms_conditions',
      remark: 'delivery_order.remark',
      createdAt: 'delivery_order.created_at',
      updatedAt: 'delivery_order.updated_at',
      isactived: 'delivery_order.isactived',
      islocked: 'delivery_order.islocked',
      createUid: 'delivery_order.create_uid',
      updatedUid: 'delivery_order.updated_uid',
      refNumber: 'delivery_order.ref_number',
    };

    selectFields(qb, fields);
    //qb.where("delivery_order.isactived='0'");
    const userIds = userId;
    qb.where(
      "delivery_order.isactived='0' and (delivery_order.create_uid = '" +
        userIds +
        "' or delivery_order.create_uid in (select login  from staff_list where role in (select id  from terms where leader_id LIKE '%" +
        userIds +
        "%') ) )",
    );

    andWhereEqual(qb, 'delivery_order', 'satus', search.fundType);
    multiSearch(
      qb,
      ['delivery_order.delivery_name', 'delivery_order.remark'],
      search.search,
    );
    setSorts(qb, fields, search.sort);

    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();

    const res = raws;

    return res;
  }
}
