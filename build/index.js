"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const knex_1 = require("./models/knex");
const app = (0, express_1.default)();
const PORT = 3036;
const port = process.env.PORT;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.static(path_1.default.resolve(__dirname, "..", "/public/")));
app.get("/users/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        if (!id || id === "") {
            const result = yield knex_1.db.raw(`SELECT * FROM users`);
            res.send({ result });
        }
        else if (id === "" || id === undefined) {
            res.status(404).send("author não encontrado");
        }
        else {
            const result = yield knex_1.db.raw(`SELECT * FROM users WHERE id="${id}"`);
            res.status(200).send({ result });
        }
    }
    catch (error) {
        console.log(error);
        if (req.statusCode === 200) {
            res.status(500);
        }
        if (error instanceof Error) {
            res.send(error.message);
        }
        else {
            res.send("Erro inesperado");
        }
    }
}));
app.get("/users", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const q = req.params.q;
    try {
        if (q === undefined) {
            const result = yield (0, knex_1.db)("users");
            res.status(200).send({ result });
        }
        else {
            const result = yield (0, knex_1.db)("users").where("name", "LIKES", `%${q}%`);
            res.status(200).send({ result });
        }
    }
    catch (error) {
        console.log(error);
        if (req.statusCode === 200) {
            res.status(500);
        }
        if (error instanceof Error) {
            res.send(error.message);
        }
        else {
            res.send("Erro inesperado");
        }
    }
}));
app.post("/users/create", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.body.id;
        const name = req.body.name;
        const nickname = req.body.nickname;
        const email = req.body.email;
        const password = req.body.password;
        const role = req.body.role;
        if (typeof id !== typeof "string") {
            res.status(400).send({ message: 'nome invalido' });
        }
        if (typeof name != "string") {
            res.status(400).send({ message: 'nome invalido' });
        }
        if (typeof nickname != "string") {
            res.status(400).send('nickname alfa-numerico');
        }
        if (typeof email != "string") {
            res.status(400).send('nickname alfa-numerico');
        }
        if (typeof password != "string") {
            res.status(400).send("outra senha essa é invalida tente alfa-numerico");
        }
        if (typeof role != "string") {
            res.status(400).send('nickname alfa-numerico');
        }
        const newAuthor = {
            id,
            name,
            nickname,
            email,
            password,
            role
        };
        yield (0, knex_1.db)("users").insert(newAuthor);
        res.status(200).send("cadastro com sucesso");
    }
    catch (error) {
        console.log(error);
        if (req.statusCode === 200) {
            res.status(500);
        }
        if (error instanceof Error) {
            res.send(error.message);
        }
        else {
            res.send("Erro inesperado");
        }
    }
}));
app.delete("/users/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const idToDelete = req.params.id;
        const [users] = yield (0, knex_1.db)("users").where({ id: idToDelete });
        if (!users) {
            throw new Error("usuario  nao encontrado");
        }
        yield (0, knex_1.db)("users").delete().where({ id: idToDelete });
        res.status(200).send({ message: 'users deletado com sucesso' });
    }
    catch (error) {
        console.log(error);
        if (req.statusCode === 200) {
            res.status(500);
        }
        if (error instanceof Error) {
            res.send(error.message);
        }
        else {
            res.send("Erro inesperado");
        }
    }
}));
app.put("/products/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newid = req.params.id;
        const newName = req.body.name;
        const newDescription = req.body.description;
        const newImageUrl = req.body.image_url;
        const newPrice = req.body.price;
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
        const [product4edit] = yield knex_1.db.raw(`SELECT * FROM products WHERE products.id="${newid}"`);
        if ([product4edit]) {
            product4edit.id = newid,
                product4edit.name = newName || product4edit.name,
                product4edit.description = newDescription || product4edit.description,
                product4edit.image_url = newImageUrl || product4edit.image_url,
                product4edit.price = newPrice || product4edit.price;
        }
        yield (0, knex_1.db)("products").update(product4edit).where({ id: `${newid}` });
        res.status(201).send("produto atualizado com sucesso");
    }
    catch (error) {
        console.log(error);
        if (req.statusCode === 200) {
            res.status(500);
        }
        if (error instanceof Error) {
            res.send(error.message);
        }
        else {
            res.send("Erro inesperado");
        }
    }
}));
app.post("/products/create", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.body.id;
        const name = req.body.name;
        const description = req.body.description;
        const image_url = req.body.image_url;
        const price = req.body.price;
        if (typeof name != typeof "string") {
            res.status(400).send({ message: 'nome do produto é invalido' });
        }
        if (typeof description != typeof "string") {
            res.status(400).send('description deve ser categoria de produto valida');
        }
        if (typeof image_url != typeof "string") {
            res.status(400).send('url da imagem deve ser valida');
        }
        if (typeof price == undefined) {
            res.status(400).send("price deve ser numerico");
        }
        const newAccount = {
            id,
            name,
            description,
            image_url,
            price
        };
        yield (0, knex_1.db)("products").insert(newAccount);
        res.status(201).send("produto cadastrado com sucesso");
    }
    catch (error) {
        console.log(error);
        if (req.statusCode === 200) {
            res.status(500);
        }
        if (error instanceof Error) {
            res.send(error.message);
        }
        else {
            res.send("Erro inesperado");
        }
    }
}));
app.get("/products", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const searchTerm = req.query.q;
        if (searchTerm === undefined) {
            const message = "LISTA DE PRODUTOS CADASTRADO DO SISTEMA";
            const result = yield (0, knex_1.db)("products");
            res.status(200).send({ result });
        }
        else {
            const [result] = yield (0, knex_1.db)("products").where("name", "LIKE", `%${searchTerm}%`);
            if (![result] || result == null) {
                res.send("PRODUTO NÃO CADASTRADO");
            }
            else {
                res.status(200).send({ result: [result], message: "PRODUTO ENCONTRADO" });
            }
        }
    }
    catch (error) {
        console.log(error);
        if (req.statusCode === 200) {
            res.status(500);
        }
        if (error instanceof Error) {
            res.send(error.message);
        }
        else {
            res.send("Erro inesperado");
        }
    }
}));
app.get("/products/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const [result] = yield knex_1.db.raw(`SELECT * FROM products WHERE id="${id}"`);
        if (!result) {
            res.status(200).send("produto  não encontrado");
        }
        else {
            res.status(200).send({ product: result });
        }
    }
    catch (error) {
        console.log(error);
        if (req.statusCode === 200) {
            res.status(500);
        }
        if (error instanceof Error) {
            res.send(error.message);
        }
        else {
            res.send("Erro inesperado");
        }
    }
}));
app.get("/purchases/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idSearched = req.params.id;
    try {
        if (idSearched === undefined) {
            res.status(200).send("É NECESSARIO INFORMAR ID DE PAGAMENTO");
        }
        else {
            const result = yield knex_1.db.select(`*`).from(`purchases`).where("id", "LIKE", `${idSearched}`);
            res.status(200).send({ purchase: result });
        }
    }
    catch (error) {
        console.log(error);
        if (req.statusCode === 200) {
            res.status(500);
        }
        if (error instanceof Error) {
            res.send(error.message);
        }
        else {
            res.send("Erro inesperado");
        }
    }
}));
app.listen(3036, () => {
    console.log(`Servidor rodando na porta 3036s `);
});
//# sourceMappingURL=index.js.map