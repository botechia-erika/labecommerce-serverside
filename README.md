# labecommerce-serverside
----
 [**DOCUMENTATION IN POSTMAN**](https://documenter.getpostman.com/view/26935008/2s946mYpYV)
## OBJETIVOS
- [x]  Get all users
- [x]  Create user
- [x]  Create product
- [x]  Get all products funcionalidades 1 e 2
- [x]  Edit product by id
- [ ]  Create purchase
- [ ]  Delete purchase by id
- [x]  Get purchase by id

## USERS COLLECTION 

### 1.1 GET ALL USERS ( AUSENCIA DE QUERY )
- retorna **lista completa de usuarios cadastrados**

METODO : **GET**
ENDPOINT : /users
````curl --location 'http://localhost:3036/users'````
RESPONSE CODE : HTTP/1.1 200 OK
```json
{
    "result": [
        {
            "id": "f001",
            "name": "FULANO",
            "nickname": "fulano-bastos",
            "email": "fulano@email.com",
            "password": "jzD_yyEcp0M",
            "created_at": "2023-07-10 18:25:47"
        },
        {
            "id": "f002",
            "name": "BELTRANO",
            "nickname": "beltrano-silva",
            "email": "beltranosilva@email.com",
            "password": "m4PlFzASXUc",
            "created_at": "2023-07-10 18:25:47"
        },
        {
            "id": "f003",
            "name": "ERIKA LUISA MENDONCA BOTECHIA DE JESUS LEITE",
            "nickname": "erika-botechia",
            "email": "botechiaeri@gmail.com",
            "password": "Conway22124748",
            "created_at": "2023-07-10 18:25:47"
        }
    ]
}
```
### 1.2 GET ALL USERS with SEARCH TERM 200 **FULANO ENCONTRADO**
- RETORNA USUARIO OU USUARIOS que contenham searchTerm definido por valor de q em seu nome 

METODO : **GET**
ENDPOINT : /users?q=FULANO
````curl --location 'http://localhost:3036/users?q=FULANO````
RESPONSE CODE : HTTP/1.1 200 OK
```JSON
{
    "message": "usuario encontrado no nosso sistema",
    "result": {
        "id": "f001",
        "name": "FULANO",
        "nickname": "fulano-bastos",
        "email": "fulano@email.com",
        "password": "jzD_yyEcp0M",
        "created_at": "2023-07-10 18:25:47"
    }
}```


### 1.3 getAllUsers 200 search OK && searchTerm  PEPE NOT FOUNDED
- RETORNA MENSAGEM DE USUARIO NÃO ENCONTRADO com STATS 200 PORQUE BUSCA FOI REALIZADA

METODO : **GET**
ENDPOINT : /users?q=PEPE    
````curl --location 'http://localhost:3036/users?q=PEPE````
RESPONSE CODE : HTTP/1.1 200 OK
```json
{
    "message": "usuario NÃO encontrado"
}
```

### 2.1  CREATE USER
- cria usuario a partir de bodyReques que deve ser json con info de usuario - id considerado CPF OU CNPJ (dado unico)

METODO : **POST**
ENDPOINT : /user    
````curl --location 'http://localhost:3036/user````
```JSON
{
    "id": "268809688-56",
    "name": "Matheus Yago da Luz",
    "nickname": "matheus-yago",
    "email": "matheus-daluz77@metalplasma.com.br",
    "password": "eSDPhBF9QQ"
}
```
RESPONSE CODE : HTTP/1.1 404 NOT FOUNDED
```
{
    "message": "usuario cadastrado com sucesso"
}
```

## 4 GET USER BY ID
Nesse caso retorna usuario que tenha id exatamente igual ao buscado em caso de ser um usuario cadastrado ou 404 NOT FOUNDED em caso de ser usuario não encontrado em sistema

METODO : **GET**
ENDPOINT : /user/:id
````curl --location 'http://localhost:3036/user/:id'````
RESPONSE CODE : HTTP/1.1 200 OK

RESPONSE GET USER BY ID **USUARIO NÃO ENCONTRADO**
````json
{
    "message": "USER não encontrado"
}
````

RESPONSE GET USER BY ID **USUARIO  ENCONTRADO**
RESPONSE CODE : HTTP/1.1 200 OK

busca id = "268809688-56" -> equivale a cpf do usuario cadastrado anteriormente
````json
{
    "message": "USUARIO ENCONTRADO",
    "result": {
        "id": "268809688-56",
        "name": "Matheus Yago da Luz",
        "nickname": "matheus-yago",
        "email": "matheus-daluz77@metalplasma.com.br",
        "password": "eSDPhBF9QQ",
        "created_at": "2023-07-20 19:21:41"
    }
}
````


### 5 DELETE USER BY ID
----




## PRODUCTS COLLECTION
### 6 METODO GET ALL PRODUCTS || GET ALL PRODUCTS WITH SearchTerm = q

#### 6.1 Get all products (AUSENCIA DE SEARCH TERM)
retorna **Lista de TODOS Produtos** cadastrados no sistema - em esse caso retornou a lista mais atualizada depois de receber novos produtos e edição de produtos vigentes 

METODO : **GET**
ENDPOINT : /products
````curl --location 'http://localhost:3036/products'````
RESPONSE CODE : HTTP/1.1 200 OK

```JSON
{
    "result": [
        {
            "id": "P001",
            "name": "PREMIUM-MUSIC",
            "description": "MENSAL",
            "image_url": "https://cms-fym.imgix.net/free_apple_music_362cfbaf74.png?auto=compress,format&fit=fillmax&ch=Save-Data&w=1600&max-h=1600",
            "price": 7
        },
        {
            "id": "P002",
            "name": "PREMIUM-PLANNER",
            "description": "MENSAL",
            "image_url": "https://i.postimg.cc/pdFCdKQp/PLANNER.png",
            "price": 7
        },
        {
            "id": "P003",
            "name": "PREMIUM-TASKS",
            "description": "MENSAL",
            "image_url": "https://cms-fym.imgix.net/how_much_is_spotify_premium_e81b7f47ff.png?auto=compress,format&fit=fillmax&ch=Save-Data&w=1600&max-h=1600",
            "price": 8
        },
        {
            "id": "P004",
            "name": "CADASTRO-CLIENTES-MENSAL",
            "description": "MENSAL",
            "image_url": "https://i.postimg.cc/4dZ4BQQz/crm-Mensal.png",
            "price": 15
        },
        {
            "id": "P005",
            "name": "WALLET-MENSAL",
            "description": "MENSAL",
            "image_url": "https://i.postimg.cc/CxgFF499/WALLET-MENSAL.jpg",
            "price": 10
        },
        {
            "id": "P007",
            "name": "TRACK-JOB-APPLICATIONS",
            "description": "MENSAL",
            "image_url": "https://i.postimg.cc/cJCqkkNP/trackjob.png",
            "price": 12
        },
        {
            "id": "BDX6J28",
            "name": "ONIX CHEVROLET",
            "description": "UBER-HATCH-36",
            "image_url": "https://i.postimg.cc/kMZm0cpS/ONIX-01.png",
            "price": 2390
        },
        {
            "id": "REP001",
            "name": "REP COM QUARTO INDIVIDUAL - METRO REPUBLICA",
            "description": "RENTAL-REP",
            "image_url": "https://postimg.cc/hJXWYvy7",
            "price": 1800
        },
        {
            "id": "QQV1073",
            "name": "ONIX 2019 - CHEVROLET",
            "description": "UBER-HATCH36",
            "image_url": "https://i.postimg.cc/XNBRPCXh/ONIX-2019.jpg",
            "price": 1700
        },
        {
            "id": "P006",
            "name": "ENERGETICO MONSTER - MANGO LOCO",
            "description": "FOODS",
            "image_url": "https://i.postimg.cc/4x2HnqZm/monster-mango-loco.webp",
            "price": 12
        }
    ]
}
```
### 6.2 GET ALL PRODUCTS with SEARCH TERM 200 **NOMEPRODUTO ENCONTRADO**
- RETORN PRODUTO OU PRODUTOS que contenham searchTerm definido por valor de q em seu nome 

METODO : **GET**
ENDPOINT : /users?q=CADASTRO-CLIENTES-MENSAL
````curl --location 'http://localhost:3036/users?q=CADASTRO-CLIENTES-MENSAL````
RESPONSE CODE : HTTP/1.1 200 OK
```JSON
{
    "result": [
        {
            "id": "P004",
            "name": "CADASTR0-CLIENTES-MENSAL",
            "description": "MENSAL",
            "image_url": "https://i.postimg.cc/4dZ4BQQz/crm-Mensal.png",
            "price": 15
        }
    ],
    "message": "PRODUTO ENCONTRADO"
    }
```


### 6.3 getAllProducts 200 search OK && searchTerm  OI NOT FOUNDED
- RETORNA MENSAGEM DE PRODUTO NÃO ENCONTRADO com STATUS CODE 200 PORQUE BUSCA FOI REALIZADA

METODO : **GET**
ENDPOINT : /products?q=OI    
````curl --location 'http://localhost:3036/products?q=OI````
RESPONSE CODE : HTTP/1.1 200 OK
```json
{
    "message": "PRODUTO NÃO ENCONTRADO"
}
```

### 7 METODO CREATE PRODUCTS
- cria produto a partir de bodyReques que deve ser json con info de novo produto - em caso de produto da categoria UBER (SERVIÇO RENTAL CARS MENSAL) o id é a placa do mesmo

METODO : **POST**
ENDPOINT : /products/create    
````curl --location 'http://localhost:3036/products/create````
```JSON
{
    "id": "BDX6J28",
    "name": "ONIX CHEVROLET",
    "description": "UBER-HATCH-36",
    "image_url": "https://i.postimg.cc/kMZm0cpS/ONIX-01.png",
    "price": 2390
}
```
RESPONSE CODE : HTTP/1.1 201 OK
```
produto cadastrado com sucesso
```

### 8 METODO EDIT PRODUCTS
- EDITA produto a partir de bodyRequest que deve ser json con info e params informado por URL referente a id do produto
- Como metodo post edita todo o produto - foram validados para que em caso de info não ser passada a edição considera valor de produto da DB ANTIGO como valor editado para não romper a api
- No exemplo atualizo a descrição do produto a img e o preço do mesmo a partir de id passado em url P004
- Como produto é plano mensal, serviço futuramente implementado como proprio da pagina o id é referente a numero proprio atribuido em cadastro de criação de produtos segundo a logica de negocio 

METODO : **PUT**
ENDPOINT : /products/:id    
````curl --location 'http://localhost:3036/products/:id````
```JSON
      {
            "id": "P004",
            "name": "CADASTR0-CLIENTES-MENSAL",
            "description": "MENSAL",
            "image_url": "https://i.postimg.cc/4dZ4BQQz/crm-Mensal.png",
            "price": 15
        }
```


## 9 METODO GET PRODUCT BY ID


METODO : **GET**
ENDPOINT : /product/:id
````curl --location 'http://localhost:3036/product/:id'````
RESPONSE CODE : HTTP/1.1 200 OK

RESPONSE GET PRODUCT BY ID **PRODUTO NÃO ENCONTRADO**
````json
{
    "message": "PRODUTO não encontrado"
}
````

RESPONSE GET PRODUCT BY ID **PRODUTO  ENCONTRADO**
RESPONSE CODE : HTTP/1.1 200 OK

METODO : **GET**
ENDPOINT : /product/:id
````curl --location 'http://localhost:3036/product/:id'``
````json
{
    "product": {
        "id": "P004",
        "name": "CADASTR0-CLIENTES-MENSAL",
        "description": "MENSAL",
        "image_url": "https://i.postimg.cc/4dZ4BQQz/crm-Mensal.png",
        "price": 15
    }
}

````


10 CREATE PURCHASE
