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
  

    try {
        const q = req.query.q as string | undefined      
        if (q === undefined) {
            const result = await db("users")
            res.status(200).send({ result })
        }else {
            const [result] = await db("users").where("name", "LIKE", `%${q}%`)
            if(result){
                res.status(200).send({ message: "usuario encontrado no nosso sistema" , result })

             
            }else{
                res.status(200).send({message: "usuario NÃO encontrado"})  
             
        }
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


app.get("/user/:id", async (req: Request, res: Response) => {
    const id = req.params.id as string | undefined

    try {
        if (id==="" || id === undefined) {
     
            res.send({ message: "ID DE USUARIO DEVE SER INFORMADO PARA BUSCA" })
        }
        else{
            const [result] = await db.raw(`SELECT * FROM users WHERE id="${id}"`)

            if(result && result != undefined) { 
                res.status(200).send({ message: "USUARIO ENCONTRADO" , result: result })
               
        }
        else {
            res.status(404).send({message: "USER não encontrado"})
        }
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





app.post("/user", async (req: Request, res: Response) => {

    try {
        const id = req.body.id
        const name = req.body.name
        const nickname = req.body.nickname
        const email = req.body.email
        const password = req.body.password

        if (typeof id !== typeof "string") {
            res.status(400).send({ message: 'id deve ser cpf - cnpj validado' })
        }

        if (typeof name !== "string") {
            res.status(400).send({ message: 'nome invalido' })
        }
        if (typeof nickname !== "string") {
            res.status(400).send('nickname alfa-numerico')
        }
        if (typeof email !== "string") {
            res.status(400).send('email invalido')
        }
        if (typeof password !== "string") {
            res.status(400).send("outra senha essa é invalida tente alfa-numerico")
        }


        const newAuthor: {id:string, name: string, nickname: string, email: string, password: string } = {
            id,
            name,
            nickname,
            email,
            password
        }
        await db("users").insert(newAuthor)
        res.status(201).send({message: "usuario cadastrado com sucesso"})
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

app.get("/products", async (req: Request, res: Response) => {
    try {
       const searchTerm = req.query.q as string | undefined
        if(searchTerm === undefined){
        const message = "LISTA DE PRODUTOS CADASTRADO DO SISTEMA"
        const result = await db("products")
        res.status(200).send({ result})
    }else{
    
       const [result] =await db("products").where("name", "LIKE" , `%${searchTerm}%`)
        if(![result]|| result == null){
            res.send({message: "PRODUTO NÃO ENCONTRADO"})     
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

app.get("/product/:id", async (req: Request, res: Response) => {
    const id = req.params.id as string | []

    try {
        const [result] = await db.raw(`SELECT * FROM products WHERE id="${id}"`)

        if (!result) {
            res.status(200).send({message: "PRODUTO  não encontrado"})
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
app.get("/purchases", async (req: Request, res: Response) => {
   
    try {
        const result = await db.raw(`select * from purchases`)
            res.status(200).send({message: "lista de pagamentos", result}
            )
   
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
   
app.get("/purchases/:id", async (req: Request, res: Response) => {
  
    try {
        const id = req.params.id 
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
        WHERE purchase_id="${id}"`
        )
         res.status(200).json({ message: `RESULTADO PARA PAGAMENTO IDENTIFICADO ${id}`, result: result});
    
    }catch (error) {
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

app.post("/purchases", async (req: Request, res: Response) => {

            try {
                const product_id=req.body.product_id 
                const total_price=req.body.total_price 
                const quantity = req.body.quantity 
                const buyer_id = req.body.buyer_id 
              
                      
                if(typeof total_price !==   "number"){
                    throw new Error("preço total deve ser valor numerico valido")
                  }
            
                        
                if(typeof buyer_id !== "string"){
                    throw new Error("quantidade de items deve ser valor numerico valida")
                  }

                  if( typeof quantity !== "number"){
                    throw new Error("quantidade de items deve ser valor numerico valida")
                  }
                
                  const newId = `${Date.now()}`.toString()
                  const newPurchase:{id:string, product_id:string, total_price:number, quantity:number , buyer_id:string }={
                  id:newId,
                product_id,
                total_price,
                 quantity,
                buyer_id
                  }
                  await db("purchases").insert(newPurchase)

                res.send(200).send({message: "cadastro realizado com sucesso"})
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


    app.delete("/purchases/:id", async (req: Request, res: Response) => {

        try {
            const id = req.params.id
    
            const [purchaseDelete] = await db("purchases").where({ id: id })
            if (!purchaseDelete) {
                throw new Error("purchase  nao encontrado")
            }
            await db("purchases").delete().where({ id: `${id}`})
            res.status(200).send({ message: 'purchase deletado com sucesso' })
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
    
app.listen(3036, () => {
    console.log(`Servidor rodando na porta 3036s `)
});