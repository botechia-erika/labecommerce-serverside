import { db } from "../models/knex"

// aula typescript 2 
// criar sistema de cadastro que contenha

// 1l type alias para uma pessoa cadastrada de role normal com propiedades id, name, email, password, role => foi agregado nickname para fluidez da api futura quanto a rutas parametrizadas com endpoint equivalente a username para conta de perfil publico

// type aliases para 2 tipos de conta (AdminAccount , NormalAccount ) com propiedades account e permission - foram agregados os seguintes types para accountType

export type TPerson = {
    id: string,
    name: string,
    nickname: string,
    email: string,
    password: string,
    role: CATEGORY.NORMAL|"CADASTRADO"
}
const usuario:TPerson = {
    id: "u001",
    name: "Matheus Silva",
    nickname: "@matheuzinho-silva",
    email: "matheus@email.com",
    password: "abc123456A1!",
    role: "CADASTRADO"
}
export enum CATEGORY {
    ADMIN = "ADM",
    INSTRUCTOR = "INSTRUCTOR",
    NORMAL = "CADASTRADO",
    AUTHOR = "AUTHOR",
    BUYER = "BUYER",
    STUDENT = "STUDENT"
}


export enum ACCOUNTS{
    "NORMAL"=1,
    "ADMIN"=2,
    "ACADEMIC"=3,
    "BUYERS"=4
}

export enum ACCOUNT{
    "PREMIUM-MENSAL" ,
    "FULL-PREMIUM",
    "FREE"
}


export type Task = {
    id: string,
    title: string,
    description: string,
    status: CURRENTSTATUS.INICIADA | CURRENTSTATUS.NAOINICIADA
}

export enum CURRENTSTATUS {
    NAOINICIADA = 0,
    INICIADA = 1
}

export type AUTHORS_TASKS = {
    id_task: string,
    id_author: string
}

export type TProjects = {
    id: string,
    name: string,
    img: string,
    repo: string,
    url: string,
    release: number,
    modulos_idModulos: "MR";
}

export type TProductDB ={
   id: string,
   name:string,
   description: "FREE"| 'FULL-PREMIUM'|'PREMIUM-MENSAL',
   image_url: string,
   price : Number  | string
}
const Title = {
    name: "CONWAY",
    product: "AULAS",
    value: "LABENU"
}
type ADM = {
    name: "ERIKA-BOTECHIA",
    product: 8,
    key: "AUTORIZATION",
    AUTHORIZATHION: "CONWAY-ERIKA-BOTECHIA",
    LABENUMERO: "22124748",
    LABEMAIL: "BOTECHIAERI@GMAIL.COM" | "MENDONCABOTECHIA@PROTON.ME"
}




/*const purchaseDBNumber = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const dbFunciona = db;
        const lastPg = await dbFunciona.raw(`SELECT id FROM purchases ORDER BY DESC LIMIT 1`);
        
        console.log(newPurchaseId)
      } catch (err) {
        reject(err)
      }
    })
  }*/

  // await dbFunciona("users").where({ id: `${buyerId}` });

  export type TCarro ={
    marca: string
    modelo: string
    ano: number
  }
    

type AdminAccount = {
    nickname: "green",
    key: 2
}

type AcademicAccount = {
    nickname: "orange",
    key:3
}
type BuyerAccount = {
    nickname: "gold",
    key:4
}
type NormalAccount = {
    nickname: "blue",
    key: 1
}