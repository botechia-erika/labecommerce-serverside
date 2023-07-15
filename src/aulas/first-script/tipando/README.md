A função **buscarCarrosPorMarca** recebe um array de carros e uma marca. Ela devolve os carros desta marca ou o array inteiro, caso a marca não seja passada.

1) Faça corretamente a tipagem do arquivo **frota.ts**, que contém os dados dos carros (marca, modelo, ano)

2) Importe os dados desse arquivo para o index.ts e faça a tipagem correta da função

3) Torne o parâmetro marca opcional


----
desenvolvimento
- função recebe array de carros chamado frota
- se a marca existe devolve o carro.marca
- se marca nao existe devolve frota

1) tipagem de frota.ts
- export const frota que exporta array de objeto com marca modelo e ano
1ero criar TCarro (tipagem para carro)
- marca : string
- modelo : string
- ano: number 
----
Type vem com export pq defino um modelo para este que são armazenados em arquivos types e exportados para serem usados de forma GLOBAL EM PROJETO



2) index.ts
resolução e comentarios no exercicio

NOTA SOBRE VOID
/*O operador void é muitas vezes utilizado apenas para obter o valor primitivo undefined, geralmente usando "void(0)" (o que equivale a "void 0"). Nestes casos, a variável global undefined pode ser utilizado em vez (supondo que ele não tenha sido atribuído a um valor não-padrão).*/