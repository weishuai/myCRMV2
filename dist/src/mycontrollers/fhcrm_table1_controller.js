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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FHcrmTable1Controller = void 0;
const common_1 = require("@nestjs/common");
const fhcrm_table1_service_1 = require("../myservices/fhcrm_table1_service");
const fhcrm_table1_vo_1 = require("../myvo/fhcrm_table1_vo");
const ioredis_1 = require("ioredis");
const redis = new ioredis_1.default({
    port: 6379,
    host: '127.0.0.1',
});
let FHcrmTable1Controller = class FHcrmTable1Controller {
    constructor() {
        this.fhcrmTable1Service = new fhcrm_table1_service_1.FHcrmTable1Service();
    }
    async createFHcrmTable1(fhcrmTable1Vo) {
        await redis.lpush("my-users", fhcrmTable1Vo.name);
        console.log('ok1:999000');
        console.log('Body: ', fhcrmTable1Vo);
        return await this.fhcrmTable1Service.createFHcrmTable1(fhcrmTable1Vo);
    }
    async updateaFHcrmTable1(userToken, Id, fhcrmTable1Vo) {
        console.log('userToken: ', userToken);
        console.log('Id: ', Id);
        console.log('FHcrmTable1Vo: ', fhcrmTable1Vo);
        let userId = '';
        if (userToken != null && userToken != '') {
            userId = userToken;
        }
        return await this.fhcrmTable1Service.updateaFHcrmTable1(Id, userId, fhcrmTable1Vo);
    }
    async removeFHcrmTable1(Id) {
        return await this.fhcrmTable1Service.removeFHcrmTable1(Id);
    }
    async getFHcrmTable1ById(Id) {
        const ok = await redis.lrange("my-users", 0, -1);
        console.log('ok: ', ok);
        return await this.fhcrmTable1Service.getFHcrmTable1ById(Id);
    }
    async getFHcrmTable1List(query) {
        console.log('query: ', query);
        const search = new fhcrm_table1_vo_1.FHcrmTable1SearchVo();
        search.search = query.search;
        search.pageIndex = Number(search.pageIndex != null ? search.pageIndex : 0);
        search.recordIndex = Number(search.recordIndex != null ? search.recordIndex : 0);
        search.pageSize = Number(search.pageSize != null ? search.pageSize : 0);
        console.log('fhok: ', JSON.stringify(search));
        return await this.fhcrmTable1Service.getFHcrmTable1List(search);
    }
    async getFHcrmTable1All(search) {
        return await this.fhcrmTable1Service.getFHcrmTable1All(search);
    }
    async getFHcrmTable1AllView() {
        return await this.fhcrmTable1Service.getFHcrmTable1AllView();
    }
};
__decorate([
    (0, common_1.Post)('/createFHcrmTable1'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [fhcrm_table1_vo_1.FHcrmTable1Vo]),
    __metadata("design:returntype", Promise)
], FHcrmTable1Controller.prototype, "createFHcrmTable1", null);
__decorate([
    (0, common_1.Put)('/updateFHcrmTable1/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, fhcrm_table1_vo_1.FHcrmTable1Vo]),
    __metadata("design:returntype", Promise)
], FHcrmTable1Controller.prototype, "updateaFHcrmTable1", null);
__decorate([
    (0, common_1.Get)('/removeFHcrmTable1/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FHcrmTable1Controller.prototype, "removeFHcrmTable1", null);
__decorate([
    (0, common_1.Get)('/getFHcrmTable1ById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FHcrmTable1Controller.prototype, "getFHcrmTable1ById", null);
__decorate([
    (0, common_1.Get)('/getFHcrmTable1'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FHcrmTable1Controller.prototype, "getFHcrmTable1List", null);
__decorate([
    (0, common_1.Get)('/getFHcrmTable1All'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [fhcrm_table1_vo_1.FHcrmTable1SearchVo]),
    __metadata("design:returntype", Promise)
], FHcrmTable1Controller.prototype, "getFHcrmTable1All", null);
__decorate([
    (0, common_1.Get)('/getFHcrmTable1AllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FHcrmTable1Controller.prototype, "getFHcrmTable1AllView", null);
FHcrmTable1Controller = __decorate([
    (0, common_1.Controller)('/fhcrmTable1')
], FHcrmTable1Controller);
exports.FHcrmTable1Controller = FHcrmTable1Controller;
//# sourceMappingURL=fhcrm_table1_controller.js.map