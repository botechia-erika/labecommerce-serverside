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


## ENDPOINTS PARA USERS

### ✅GetAllUsers
- Metodo http: **GET**
- Status Code : **200**
- Retorna 3 possibilidades segundo o que é informado em request

**caso1: request de enpoint sem informar nenhum query**
- Retorna lista com todos os usuarios :
**URL USADA: http://localhost:3036/users**
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

**caso2: QUERY PARA BUSCA DE NOME - RESPONSE DE BUSCA BEM SUCEDIDA **
- Busca desde um searchTerm qualquer usuario que inclua a query em qualquer parte do seu nome:
**URL USADA: http://localhost:3036/users?q=BELTRANO**
```json
{
    "result": [
        {
            "id": "f002",
            "name": "BELTRANO",
            "nickname": "beltrano-silva",
            "email": "beltranosilva@email.com",
            "password": "m4PlFzASXUc",
            "created_at": "2023-07-10 18:25:47"
        }
    ]
}
```



###✅CreateUser
- Metodo http: **GET**
- Status Code : **200**
- Retorna 3 possibilidades segundo o que é informado em request

**caso1: request de enpoint sem informar nenhum query**
- Retorna lista com todos os usuarios :
CREATE USER

app.get("/users/:id", async (req: Request, res: Response) => {
    const id = req.params.id

    try {
        if (!id || id === "") {
            const result = await db.raw(`SELECT * FROM users`)
            res.send({ result })
        }
        else if (id === "" || id === undefined) {
            res.status(404).send("author não encontrado")
        }
        else {

            const result = await db.raw(`SELECT * FROM users WHERE id="${id}"`)
            res.status(200).send({ result })
        }
    } catch (error) {
        console.log(error)

        if (req.statusCode === 200) {
            res.status(500)
        }

        if (error instanceof Error) {
            res.send(error.message)
        } else {
            res.send("Erro inesperado")
        }
    }
}
)




app.post("/users/create", async (req: Request, res: Response) => {

    try {
        const id = req.body.id
        const name = req.body.name
        const nickname = req.body.nickname
        const email = req.body.email
        const password = req.body.password
        const role = req.body.role


        if (typeof id !== typeof "string") {
            res.status(400).send({ message: 'nome invalido' })
        }

        if (typeof name != "string") {
            res.status(400).send({ message: 'nome invalido' })
        }
        if (typeof nickname != "string") {
            res.status(400).send('nickname alfa-numerico')
        }
        if (typeof email != "string") {
            res.status(400).send('nickname alfa-numerico')
        }
        if (typeof password != "string") {
            res.status(400).send("outra senha essa é invalida tente alfa-numerico")
        }
        if (typeof role != "string") {
            res.status(400).send('nickname alfa-numerico')
        }

        const newAuthor: { id: string, name: string, nickname: string, email: string, password: string, role: string } = {
            id,
            name,
            nickname,
            email,
            password,
            role
        }
        await db("users").insert(newAuthor)
        res.status(200).send("cadastro com sucesso")
    } catch (error) {
        console.log(error)

        if (req.statusCode === 200) {
            res.status(500)
        }

        if (error instanceof Error) {
            res.send(error.message)
        } else {
            res.send("Erro inesperado")
        }
    }
})
app.delete("/users/:id", async (req: Request, res: Response) => {

    try {
        const idToDelete = req.params.id

        const [users] = await db("users").where({ id: idToDelete })
        if (!users) {
            throw new Error("usuario  nao encontrado")
        }
        await db("users").delete().where({ id: idToDelete })
        res.status(200).send({ message: 'users deletado com sucesso' })
    }
    catch (error) {
        console.log(error)

        if (req.statusCode === 200) {
            res.status(500)
        }

        if (error instanceof Error) {
            res.send(error.message)
        } else {
            res.send("Erro inesperado")
        }
    }
})
