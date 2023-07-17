import { db } from "../models/knex"



export enum CATEGORY {
    ADM = "ADM",
    INSTRUCTOR = "INSTRUCTOR",
    NORMAL = "CADASTRADO",
    AUTHOR = "AUTHOR",
    BUYER = "BUYER",
    STUDENT = "STUDENT"
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
type ESTUDANTE = {
    name: "LABENU",
    product: 8,
    key: "AUTORIZATION",
    AUTHORIZATHION: "CONWAY-BOTECHIA-ERIKA",
    LABENUMERO: "22124748",
    LABEMAIL: "BOTECHIAERI@GMAIL.COM" | "MENDONCABOTECHIA@PROTON.ME"
}


export type TItemPurchased = {
    id: string,

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
    ano: number
  }

  export enum PET_SIZE {
	SMALL = "Pequeno porte",
	MEDIUM = "Médio porte",
	LARGE = "Grande porte"
}

export type TPet = {
	id: string,
	name: string,
	age: number,
	size: PET_SIZE
}