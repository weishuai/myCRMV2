"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendorProjectVo = exports.VendorQuoteVo = exports.VendorCategoryVo = exports.VendorSearchVo = exports.VendorGetVo = exports.VendorUpdateVo = exports.VendorAddVo = void 0;
const searchVo_1 = require("../myutils/searchVo");
class VendorAddVo {
}
exports.VendorAddVo = VendorAddVo;
class VendorUpdateVo extends VendorAddVo {
}
exports.VendorUpdateVo = VendorUpdateVo;
class VendorGetVo extends VendorUpdateVo {
}
exports.VendorGetVo = VendorGetVo;
class VendorSearchVo extends searchVo_1.SearchVo {
}
exports.VendorSearchVo = VendorSearchVo;
class VendorCategoryVo {
}
exports.VendorCategoryVo = VendorCategoryVo;
class VendorQuoteVo {
}
exports.VendorQuoteVo = VendorQuoteVo;
class VendorProjectVo {
}
exports.VendorProjectVo = VendorProjectVo;
//# sourceMappingURL=VendorVo.js.map