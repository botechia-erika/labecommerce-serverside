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
## GET ALL USERS (AUSENCIA DE QUERY)

## GET ALL USERS SEARCH TERM Q



{
    "message": "usuario encontrado no nosso sistema",
    "result": [
        {
            "id": "f001",
            "name": "FULANO",
            "nickname": "fulano-bastos",
            "email": "fulano@email.com",
            "password": "jzD_yyEcp0M",
            "created_at": "2023-07-10 18:25:47";
        }
    ]
}

# getAllUsers 200 search OK && searchTerm  PEPE NOT FOUNDED

```json
{
    "message": "usuario NÃO encontrado"
}
```

### METODO CREATE USER
