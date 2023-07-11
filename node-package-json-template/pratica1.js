/*exercicio 01 - procurar um pais na lista*/

//npm run start brasil

console.log(query)
if (!query) {
  console.log('argumento nao registrado')
} else {
  const result = countries.find(country => country.name.toUpperCase().includes(query.toUpperCase()))
  console.log(result)
}

const query2 = process.argv[3]




if (!query | !query2) {
  console.log('argumento nao registrado')
} else {
  const result = countries.find(country => country.name.toUpperCase().includes(query.toUpperCase()))
  const p2 = countries.find(country2 => { country2.name.toUpperCase().includes(query2.toUpperCase()) })
  console.log('pais buscado 1 \n'.bgBlue + query.toUpperCase().bgGreen + '\n' + ' pais buscado 2 '.bgBlue + "\n" + query2.toUpperCase().bgGreen)
}

const nomeIngresado = process.argv[2]
const idadeIngresada = process.argv[3]
const novaIdade = Number(idadeIngresada) + 7
console.log('Olá ' + nomeIngresado + ' Você tem ' + idadeIngresada + ' anos!\n')
console.log(' Em 7 anos voce tera ' + novaIdade)

