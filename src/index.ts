import { TItemPurchased } from './types/types';
import express from 'express'
import { Request, Response } from 'express';
import cors from 'cors';
import path from 'path';
import { db } from './models/knex'

import { ACCOUNT, CATEGORY, TProductDB } from './types/types';


const app = express()

const PORT = 3036
const port = process.env.PORT
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, "..", "/public/")))


//endpoints para users 
app.get("/users", async (req: Request, res: Response) => {
   try{
    const result = await db.raw(`SELECT * FROM users`)
   res.status(200).send(result)
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



app.get("/users/search", async (req: Request, res: Response) => {
   try {
   
    const search = req.query.q as string | undefined
     
        if (search === undefined) {
            const result ="Indique o nome a ser buscado"
            res.status(200).send(result)
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
})

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


app.put("/products/:id", async (req: Request, res: Response) => {
    try {
        const newid = req.params.id;
        const newName = req.body.name as string | undefined;
        const newDescription = req.body.description as string | undefined;
        const newImageUrl = req.body.image_url as string | undefined;
        const newPrice = req.body.price as string | number | undefined;

        if (newName !== undefined) {
            if (typeof newName !== "string") {
                res.status(400);
                throw new Error("Nome do produto deve ser do tipo string");
            }
        }

        if (newDescription !== undefined) {
            if (typeof newDescription !== "string") {
                res.status(400);
                throw new Error("Descrição deve ser do tipo string");
            }
        }

        if (newImageUrl !== undefined) {
            if (typeof newImageUrl !== "string") {
                res.status(400);
                throw new Error("Nova imagem deve ser do tipo string");
            }
        }

        const [product4edit] = await db.raw(`SELECT * FROM products WHERE products.id="${newid}"`);
        if ([product4edit]) {
            product4edit.id = newid,
                product4edit.name = newName || product4edit.name,
                product4edit.description = newDescription || product4edit.description,
            product4edit.image_url= newImageUrl || product4edit.image_url,
                product4edit.price = newPrice || product4edit.price
        }
                await db("products").update(product4edit).where({id :`${newid}`})
                res.status(201).send("produto atualizado com sucesso")
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

app.post("/products/create", async (req: Request, res: Response) => {

    try {
        const id = req.body.id
        const name = req.body.name
        const description = req.body.description
        const image_url = req.body.image_url
        const price = req.body.price 
        
    
        if (typeof name != typeof "string") {
            res.status(400).send({ message: 'nome do produto é invalido' })
        }
        if (typeof description != typeof "string") {
            res.status(400).send('description deve ser categoria de produto valida')
        }
        if (typeof image_url != typeof "string") {
            res.status(400).send('url da imagem deve ser valida')
        }
        if (typeof price == undefined) {
            res.status(400).send("price deve ser numerico")
        }


        const newAccount:TProductDB= {
            id,
            name,
            description,
            image_url,
            price
        }
            await db("products").insert(newAccount)
    
        res.status(201).send("produto cadastrado com sucesso")
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

// endpoints para purchases

app.get("/products/search", async (req: Request, res: Response) => {
    try {
       const search = req.query.q as string | undefined
        if(search=== undefined){
        const message = "LISTA DE PRODUTOS CADASTRADO DO SISTEMA"
        const result = await db("products")
        res.status(200).send({ result})
    }else{
    
       const [result] =await db("products").where("name", "LIKE" , `%${search}%`)
        if(![result]|| result == null){
            res.send("PRODUTO NÃO CADASTRADO")     
        }else{
        res.status(200).send({result : [result], message: "PRODUTO ENCONTRADO"})
    }
}}
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
});

app.get("/products/:id", async (req: Request, res: Response) => {
    const id = req.params.id as string | []

    try {
        const [result] = await db.raw(`SELECT * FROM products WHERE id="${id}"`)

        if (!result) {
            res.status(200).send("produto  não encontrado")
        }
        else {

            res.status(200).send({ product: result })
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

// enpoints para purchases
app.get("/purchases/:id", async (req: Request, res: Response) => {
    const idSearched = req.params.id as string | undefined
    try {
        if(idSearched=== undefined){
            res.status(200).send("É NECESSARIO INFORMAR ID DE PAGAMENTO")
        }
        else{
         const result = await db.raw(`
         SELECT
        products.name,
        products.price,
        purchases.id,
        purchases.quantity,
        purchases.total_price,
        purchases.buyer_id
        FROM purchases
        INNER JOIN products_purchases ON purchases.id = products_purchases.purchase_id
        INNER JOIN products ON products_purchases.product_id = products.id
        WHERE purchase_id="${idSearched}"`
        )
         res.status(200).send({ purchase: result});
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
});

app.post("/purchases/create", async (req: Request, res: Response) => {

            try {
                let id=req.body.id as v  undefined | string
                const product_id=req.body.product_id as string;
                const totalPrice=req.body.totalPrice as number;
                const quantity = req.body.quantity as number;
                const buyer_id = req.body.buyer_id as string| undefined
                if(id != typeof "string" && id !== undefined){
                  throw new Error("id deve ser string valida")
                }
                      
                if(typeof totalPrice != typeof number){
                    throw new Error("preço total deve ser valor numerico valido")
                  }
            
                        
                if(typeof quantity != typeof number){
                    throw new Error("quantidade de items deve ser valor numerico valida")
                  }
      

                if(buyer_id){
                  const buyerid = await db.raw(`SELECT id  FROM users WHERE id="${buyer_id}"`)
                 if(buyerDB === {}|| buyerDB === undefined){
                    throw new Error("cliente não cadastrado")
                 }else{
                     buyer_id = buyerid
                     return buyer_id
                 }
                }       
                if( id === undefined) {
                    const lastPg =  await db.raw(`SELECT id FROM purchases ORDER BY DESC LIMIT 1`)
                    const newNro = Number(lastPg.pop(3)) + 1
                    idPayment = "pgo" + newNro.toString() 
                    id= idPayment
                    return id
                    }
                const ItemPurchase ={
                id,
                product_id,
                quantity,
                totalPrice,
                buyer_id
                }
            const newPurchase = await db("purchases").insert(`${ItemPurchase}`)
                res.status(201).send("Pagamento arquivado com sucesso!")
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
app.listen(3036, () => {
    console.log(`Servidor rodando na porta 3036s `)
});