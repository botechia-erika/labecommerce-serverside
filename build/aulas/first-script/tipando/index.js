"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const frota_1 = require("./frota");
function buscarCarrosPorMarca(frota, marca) {
    if (marca === undefined) {
        return frota;
    }
    return frota.filter((carro) => {
        return carro.marca === marca;
    });
}
console.log('*******FIAT********');
console.log(buscarCarrosPorMarca(frota_1.frota, "Fiat"));
console.log('*******CHEVROLET********');
console.log(buscarCarrosPorMarca(frota_1.frota, "Chevrolet"));
console.log('*******TOYOTA********');
console.log(buscarCarrosPorMarca(frota_1.frota, 'Toyota'));
console.log('*******FORD********');
console.log(buscarCarrosPorMarca(frota_1.frota, 'Ford'));
console.log('*****FROTA COMPLETA SEM MARCA REFATORA MARCA? ********');
console.log(buscarCarrosPorMarca(frota_1.frota));
console.log(buscarCarrosPorMarca(frota_1.frota, undefined));
console.log('*******MARCA HYUNDAI NAO EXISTE = []********');
console.log(buscarCarrosPorMarca(frota_1.frota, "Hyundai"));
//# sourceMappingURL=index.js.map