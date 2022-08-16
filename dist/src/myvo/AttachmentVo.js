"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OwnerTypes = exports.AttachmentSearchVo = exports.AttachmentVo = void 0;
const searchVo_1 = require("../myutils/searchVo");
class AttachmentVo {
}
exports.AttachmentVo = AttachmentVo;
class AttachmentSearchVo extends searchVo_1.SearchVo {
}
exports.AttachmentSearchVo = AttachmentSearchVo;
exports.OwnerTypes = {
    Issue: 0,
    Vendor: 1,
    TrackingLog: 2,
    Quotation: 3,
};
//# sourceMappingURL=AttachmentVo.js.map