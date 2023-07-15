//objeto com const
const carrito = []
const comprasHTML = document.getElementById('compras')
//innertext - accede texto
const idContenedor = document.getElementById('listaGarrafas')

/*for(let termo of listadoTermos){

}*/


const addItemCart = (item)=>{
   if (carrito.some((termo) => termo.id === item.id)){
        const index  = (carrito.findIndex((termo) => termo.id === item.id))
           carrito[index].quantidade += 1
           // carrito[index].preco +=carrito[index] 
   }else{
        carrito.push({...item , quantidade: 1})
   }
   
}


const renderizarCarrito = (listaCarrito)=>{

    comprasHTML.innerHTML = ""
    console.log(listaCarrito)
    listaCarrito.forEach(produto =>{
    comprasHTML.innerHTML += `
    <li class="client-item-cart" id="client-item-{produto.id}">
    <div class="client-item-cart">
    <div class="client-item-text">
    <h2>${produto.nome}</h2>
    <p class="numItems"id="item-${produto.item}-quantidade
    ">${produto.quantidade}</p>
    <p> ${produto.preco}</p>
    <div>
    <button class="btn-less1-item-cart" id="btn-less1-item-${produto.id}"><i class="fa-solid fa-circle-minus"></i></button>
    <button class="btn-plus1-item-cart" id="btn-plus1-item-${produto.id}"><i class="fa-solid fa-circle-plus"></i></button>
   <button class="btn-delete-item-cart" id="btn-delete-item-${produto.id}"><i class="fa-solid fa-trash-can"></i></button>
    </div>
     <img class="divX4" src="${produto.imagen}">
  </div>
  </li>
    `     
}
)
const btnPlus1_ItemCart = document.getElementsByClassName('btn-add-item-cart')
const btnLess1_ItemCart = document.getElementsByClassName('btn-less1-item-cart')
const btnDelete_itemCart = document.getElementsByClassName('btn-delete-item-cart')

for(let i = 0; i< btnPlus1_ItemCart.lenght; i++){
  let plus1 = btnPlus1_ItemCart[i]
   plus1.addEventListener("click", ()=>
    console.log("btn + funciona")
   )
}
}
const mostrarTermos = (termosCatalogo) => {
    idContenedor.innerHTML = ""
    termosCatalogo.forEach(termo => {

        idContenedor.innerHTML += `

<article>
            <h2 class="entrada-blog">${termo.nome}</h2>
            <img src="${termo.imagen}" alt="termo ${termo.id}">

<ul>
<li><strong>Referencia: </strong>#0${termo.id}</li>
<li><strong>Material: </strong>${termo.material}</>

<li>
<strong>Cor: </strong>${termo.cor}</li>

<li><strong>Capacidade: </strong>${termo.capacidade}ml</li>

<li><strong>R$ ${termo.preco}</strong></li>


</ul>

  <button class="btn-add" id="btn-add-${termo.id}">Agregar em Carrinho</button>

        </article>
`
    })
  const btnAddList = document.getElementsByClassName('btn-add')
    
  for(const btnAdd of btnAddList){

    btnAdd.addEventListener("click", (event)=>{
    console.log(Number(event.target.id.split("-").pop()))
      addItemCart(
            listadoTermos.find((termo)=>Number(event.target.id.split("-").pop()==termo.id))
      )
renderizarCarrito(carrito)
    })
    
  }   
}
// ADD PARA AUTOMATIZAR REACT

mostrarTermos(listadoTermos)



const termoHTML = document.getElementById('inputSearch')
const mlHTML = document.getElementById("mlTermo")

termoHTML.addEventListener('change', () =>
    mostrarTermos(listadoTermos.filter((termo) =>
        termo.marca.includes(inputSearch.value)
    ))
)