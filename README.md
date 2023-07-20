# labecommerce-serverside
----

## OBJETIVOS
- [x]  Get all users
- [x]  Create user
- [x]  Create product
- [x]  Get all products funcionalidades 1 e 2
- [x]  Edit product by id
- [ ]  Create purchase
- [ ]  Delete purchase by id
- [x]  Get purchase by id

## 1. GET ALL USERS  && GET ALL USERS WITH SEARCH TERM = q

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
## 1.2 GET ALL USERS with SEARCH TERM 200 **FULANO ENCONTRADO**
- RETORN USUARIO OU USUARIOS que contenham searchTerm definido por valor de q em seu nome 

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
}````

# getAllUsers 200 search OK && searchTerm  PEPE NOT FOUNDED
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

### METODO CREATE USER
