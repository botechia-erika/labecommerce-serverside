import { db } from "../models/knex"

export type TPerson = {
    id: string,
    name: string,
    nickname: string,
    email: string,
    password: string,
    role: CATEGORY.ADM | CATEGORY.INSTRUCTOR | CATEGORY.NORMAL | CATEGORY.BUYER | CATEGORY.AUTHOR
}

export enum CATEGORY {
    ADM = "ADM",
    INSTRUCTOR = "INSTRUCTOR",
    NORMAL = "NORMAL",
    AUTHOR = "AUTHOR",
    BUYER = "BUYER"
}

export enum ACCOUNT{
    "MENSAL" ,
    "ANUAL",
    "PROMO",
    "COMBO"
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


export type TItemPurchased = {
    id: string,
    productSearched: string,
    name:string,
    description: string, 
    image_url: string,
    price : Number  | string,
    quantity: number,
}


export type TProductsDB = {
    product_id:string,
    quantity:number,
    priceUnity:number,
    totalItem:number
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
    ano: number | string
  }

  const teste = "true" && typeof true
/*  type TNormalAccount = {
    nickname: string,
    permission: false
  }
 */
  type TAdminAccount = {
    nickname: string,
    permission: true
  }


  const userAdmin: TAdminAccount = {
    nickname: "Muri",
    permission: true
 }

/*   const  userNormal: TNormalAccount = {
    nickname: "Yuri",
    permission: false
  } */


  type TPerson = {
    id: number|string;
    name: string;
    email: string,
    password: string;
    role: "Normal" | "Admin";
}

/* enum TPerson.role={

} */

/* 
type adminAccount={
    nickname: string,
    permission: true
}

type userAdmin: TAdminAccount={
    
}*/
//esse ok
const usuario :TPerson&TPerson={
    id:"1",
    name: "Matheus",
    email: "matheus@gmail.com",
    password: "123456",
    role: "Normal"
}

type Person = number | string ;

//valor "true" é typeof true se valor é "true" => admin true 


