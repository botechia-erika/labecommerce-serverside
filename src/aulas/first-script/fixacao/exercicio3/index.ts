/*
A função abaixo pergunta à pessoa suas três cores favoritas e imprime no console um array contendo essas três cores. 

Refatore a função para o Typescript.
*/


function imprimeTresCoresFavoritas():void {
  const cor1:string = process.argv[2]
  const cor2:string = process.argv[3]
  const cor3:string = process.argv[4]

  console.log([cor1, cor2, cor3])
}

imprimeTresCoresFavoritas()

/*O operador void é muitas vezes utilizado apenas para obter o valor primitivo undefined, geralmente usando "void(0)" (o que equivale a "void 0"). Nestes casos, a variável global undefined pode ser utilizado em vez (supondo que ele não tenha sido atribuído a um valor não-padrão).*/