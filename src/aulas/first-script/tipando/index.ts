import {frota, TCarro} from "./frota"
//frota e array de carros e marca string
function buscarCarrosPorMarca(frota:TCarro[], marca?:string) {
  if (marca === undefined) {
    return frota
  }

  return frota.filter(
    (carro) => {
      return carro.marca === marca
    }
  )
}
console.log('*******FIAT********')
console.log(buscarCarrosPorMarca(frota, "Fiat"))
console.log('*******CHEVROLET********')
console.log(buscarCarrosPorMarca(frota, "Chevrolet"))
console.log('*******TOYOTA********')
console.log(buscarCarrosPorMarca(frota, 'Toyota'))
console.log('*******FORD********')
console.log(buscarCarrosPorMarca(frota, 'Ford'))
/*refatorando
tornar marca opcional com signo de interrogação
*/
console.log('*****FROTA COMPLETA SEM MARCA REFATORA MARCA? ********')
console.log(buscarCarrosPorMarca(frota))
console.log(buscarCarrosPorMarca(frota, undefined))
//retorna frota completa



console.log('*******MARCA HYUNDAI NAO EXISTE = []********')
//Ate momento se marca nao existe devolve array vazio!
console.log(buscarCarrosPorMarca(frota, "Hyundai"))
//producindo erro
//console.log(buscarCarrosPorMarca(frota,1))
//console.log(buscarCarrosPorMarca(frota, "Chevrolet"))

