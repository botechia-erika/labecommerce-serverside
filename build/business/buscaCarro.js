"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const frota_1 = require("./../dataTS/frota");
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
const query = process.argv[3];
console.log(buscaCarro(frota_1.Frota, query));
exports.default = buscaCarro;
//# sourceMappingURL=buscaCarro.js.map