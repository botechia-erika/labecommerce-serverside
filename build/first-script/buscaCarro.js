"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const frota_1 = require("../dataTS/frota");
function buscaCarro(frota, marca) {
    if (marca === undefined) {
        return frota;
    }
    else {
        return frota.filter((Tcarro) => {
            return Tcarro.marca === marca;
        });
    }
}
console.log(buscaCarro(frota_1.Frota));
exports.default = buscaCarro;
//# sourceMappingURL=buscaCarro.js.map