"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoicePayment = void 0;
const typeorm_1 = require("typeorm");
let InvoicePayment = class InvoicePayment {
};
__decorate([
    (0, typeorm_1.Column)('varchar', { primary: true, name: 'id', length: 10 }),
    __metadata("design:type", String)
], InvoicePayment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'invoice_id', nullable: true, length: 255 }),
    __metadata("design:type", String)
], InvoicePayment.prototype, "invoiceId", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'date', nullable: true }),
    __metadata("design:type", Date)
], InvoicePayment.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'method', nullable: true, length: 255 }),
    __metadata("design:type", String)
], InvoicePayment.prototype, "method", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'ref_no', nullable: true, length: 255 }),
    __metadata("design:type", String)
], InvoicePayment.prototype, "refNo", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'payment_amount', nullable: true, length: 255 }),
    __metadata("design:type", String)
], InvoicePayment.prototype, "paymentAmount", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'remark', nullable: true, length: 255 }),
    __metadata("design:type", String)
], InvoicePayment.prototype, "remark", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'created_at', nullable: true }),
    __metadata("design:type", Date)
], InvoicePayment.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'updated_at', nullable: true }),
    __metadata("design:type", Date)
], InvoicePayment.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'isactived', nullable: true, length: 255 }),
    __metadata("design:type", String)
], InvoicePayment.prototype, "isactived", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'islocked', nullable: true, length: 255 }),
    __metadata("design:type", String)
], InvoicePayment.prototype, "islocked", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'create_uid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], InvoicePayment.prototype, "createUid", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'updated_uid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], InvoicePayment.prototype, "updatedUid", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'mid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], InvoicePayment.prototype, "mid", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'photo', nullable: true, length: 255 }),
    __metadata("design:type", String)
], InvoicePayment.prototype, "photo", void 0);
InvoicePayment = __decorate([
    (0, typeorm_1.Entity)('invoice_payment')
], InvoicePayment);
exports.InvoicePayment = InvoicePayment;
//# sourceMappingURL=InvoicePayment.js.map