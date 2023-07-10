"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CURRENTSTATUS = exports.ACCOUNT = exports.CATEGORY = void 0;
var CATEGORY;
(function (CATEGORY) {
    CATEGORY["ADM"] = "ADM";
    CATEGORY["INSTRUCTOR"] = "INSTRUCTOR";
    CATEGORY["NORMAL"] = "NORMAL";
    CATEGORY["AUTHOR"] = "AUTHOR";
    CATEGORY["BUYER"] = "BUYER";
})(CATEGORY || (exports.CATEGORY = CATEGORY = {}));
var ACCOUNT;
(function (ACCOUNT) {
    ACCOUNT[ACCOUNT["PREMIUM-MENSAL"] = 0] = "PREMIUM-MENSAL";
    ACCOUNT[ACCOUNT["FULL-PREMIUM"] = 1] = "FULL-PREMIUM";
    ACCOUNT[ACCOUNT["FREE"] = 2] = "FREE";
})(ACCOUNT || (exports.ACCOUNT = ACCOUNT = {}));
var CURRENTSTATUS;
(function (CURRENTSTATUS) {
    CURRENTSTATUS[CURRENTSTATUS["NAOINICIADA"] = 0] = "NAOINICIADA";
    CURRENTSTATUS[CURRENTSTATUS["INICIADA"] = 1] = "INICIADA";
})(CURRENTSTATUS || (exports.CURRENTSTATUS = CURRENTSTATUS = {}));
const Title = {
    name: "CONWAY",
    product: "AULAS",
    value: "LABENU"
};
//# sourceMappingURL=types.js.map