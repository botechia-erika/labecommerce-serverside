"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CURRENTSTATUS = exports.ACCOUNT = exports.ACCOUNTS = exports.CATEGORY = void 0;
const usuario = {
    id: "u001",
    name: "Matheus Silva",
    nickname: "@matheuzinho-silva",
    email: "matheus@email.com",
    password: "abc123456A1!",
    role: "CADASTRADO"
};
var CATEGORY;
(function (CATEGORY) {
    CATEGORY["ADMIN"] = "ADM";
    CATEGORY["INSTRUCTOR"] = "INSTRUCTOR";
    CATEGORY["NORMAL"] = "CADASTRADO";
    CATEGORY["AUTHOR"] = "AUTHOR";
    CATEGORY["BUYER"] = "BUYER";
    CATEGORY["STUDENT"] = "STUDENT";
})(CATEGORY || (exports.CATEGORY = CATEGORY = {}));
var ACCOUNTS;
(function (ACCOUNTS) {
    ACCOUNTS[ACCOUNTS["NORMAL"] = 1] = "NORMAL";
    ACCOUNTS[ACCOUNTS["ADMIN"] = 2] = "ADMIN";
    ACCOUNTS[ACCOUNTS["ACADEMIC"] = 3] = "ACADEMIC";
    ACCOUNTS[ACCOUNTS["BUYERS"] = 4] = "BUYERS";
})(ACCOUNTS || (exports.ACCOUNTS = ACCOUNTS = {}));
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