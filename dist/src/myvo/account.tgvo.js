"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountTagSearchVo = exports.AccountTagVo = void 0;
const searchVo_1 = require("../myutils/searchVo");
class AccountTagVo {
    constructor() {
        this.id = '';
        this.name = '';
        this.description = '';
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.isactived = '';
        this.islocked = '';
        this.createUid = '';
        this.updatedUid = '';
    }
}
exports.AccountTagVo = AccountTagVo;
class AccountTagSearchVo extends searchVo_1.SearchVo {
}
exports.AccountTagSearchVo = AccountTagSearchVo;
//# sourceMappingURL=account.tgvo.js.map