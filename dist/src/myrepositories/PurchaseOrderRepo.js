"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseOrderRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const myentities_1 = require("../myentities");
class PurchaseOrderRepo {
    async create(accountTagVo) {
        return await (0, typeorm_1.getRepository)(myentities_1.PurchaseOrder).insert(accountTagVo);
    }
    async update(Id, user_id, accountTagVo) {
        accountTagVo.updatedAt = new Date();
        accountTagVo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(myentities_1.PurchaseOrder).update(Id, accountTagVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(myentities_1.PurchaseOrder).update(Ids[0], {
            isactived: '1',
        });
    }
    async getpurchaseOrdersById(id) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.PurchaseOrder).createQueryBuilder('purchase_order');
        const fields = {
            id: 'purchase_order.id',
            name: 'purchase_order.name',
            currency: 'purchase_order.currency',
            contact: 'purchase_order.contact',
            paymentTerms: 'purchase_order.payment_terms',
            taxes: 'purchase_order.taxes',
            remark: 'purchase_order.remark',
            createdAt: 'purchase_order.created_at',
            updatedAt: 'purchase_order.updated_at',
            isactived: 'purchase_order.isactived',
            islocked: 'purchase_order.islocked',
            createUid: 'purchase_order.create_uid',
            updatedUid: 'purchase_order.updated_uid',
            refNumber: 'purchase_order.ref_number',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'purchase_order', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getpurchaseOrderAll(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.PurchaseOrder).createQueryBuilder('purchase_order');
        const fields = {
            id: 'purchase_order.id',
            name: 'purchase_order.name',
            currency: 'purchase_order.currency',
            contact: 'purchase_order.contact',
            paymentTerms: 'purchase_order.payment_terms',
            taxes: 'purchase_order.taxes',
            remark: 'purchase_order.remark',
            createdAt: 'purchase_order.created_at',
            updatedAt: 'purchase_order.updated_at',
            isactived: 'purchase_order.isactived',
            islocked: 'purchase_order.islocked',
            createUid: 'purchase_order.create_uid',
            updatedUid: 'purchase_order.updated_uid',
            refNumber: 'purchase_order.ref_number',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("purchase_order.isactived='0'");
        (0, my_utils_1.multiSearch)(qb, ['purchase_order.name', 'purchase_order.remark'], search.search);
        qb.orderBy('purchase_order.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return { 'raws': raws, 'count': count };
    }
    async getpurchaseOrderAllView() {
        const qb = (0, typeorm_1.getRepository)(myentities_1.PurchaseOrder).createQueryBuilder('purchase_order');
        const fields = {
            id: 'purchase_order.id',
            name: 'purchase_order.name',
            currency: 'purchase_order.currency',
            contact: 'purchase_order.contact',
            paymentTerms: 'purchase_order.payment_terms',
            taxes: 'purchase_order.taxes',
            remark: 'purchase_order.remark',
            createdAt: 'purchase_order.created_at',
            updatedAt: 'purchase_order.updated_at',
            isactived: 'purchase_order.isactived',
            islocked: 'purchase_order.islocked',
            createUid: 'purchase_order.create_uid',
            updatedUid: 'purchase_order.updated_uid',
            refNumber: 'purchase_order.ref_number',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        const res = await qb.getRawMany();
        return res;
    }
    async getpurchaseOrder(userId, search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.PurchaseOrder).createQueryBuilder('purchase_order');
        const fields = {
            id: 'purchase_order.id',
            name: 'purchase_order.name',
            currency: 'purchase_order.currency',
            contact: 'purchase_order.contact',
            paymentTerms: 'purchase_order.payment_terms',
            taxes: 'purchase_order.taxes',
            remark: 'purchase_order.remark',
            createdAt: 'purchase_order.created_at',
            updatedAt: 'purchase_order.updated_at',
            isactived: 'purchase_order.isactived',
            islocked: 'purchase_order.islocked',
            createUid: 'purchase_order.create_uid',
            updatedUid: 'purchase_order.updated_uid',
            refNumber: 'purchase_order.ref_number',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        const userIds = userId;
        qb.where("purchase_order.isactived='0' and (purchase_order.create_uid = '" +
            userIds +
            "' or purchase_order.create_uid in (select login  from staff_list where role in (select id  from terms where leader_id LIKE '%" +
            userIds +
            "%') ) )");
        (0, my_utils_1.andWhereEqual)(qb, 'purchase_order', 'satus', search.fundType);
        (0, my_utils_1.multiSearch)(qb, ['purchase_order.name', 'purchase_order.remark'], search.search);
        (0, my_utils_1.setSorts)(qb, fields, search.sort);
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        const res = raws;
        return res;
    }
}
exports.PurchaseOrderRepo = PurchaseOrderRepo;
//# sourceMappingURL=PurchaseOrderRepo.js.map