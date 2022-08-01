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
exports.Fhtest = void 0;
const typeorm_1 = require("typeorm");
let Fhtest = class Fhtest {
};
__decorate([
    (0, typeorm_1.Column)('varchar', { primary: true, name: 'id', length: 10 }),
    __metadata("design:type", String)
], Fhtest.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'fhname', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Fhtest.prototype, "fhname", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'nam', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Fhtest.prototype, "nam", void 0);
Fhtest = __decorate([
    (0, typeorm_1.Entity)('fhtest')
], Fhtest);
exports.Fhtest = Fhtest;
//# sourceMappingURL=Fhtest.js.map