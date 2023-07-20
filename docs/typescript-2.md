
### nota asociada a TPerson em js
- TPerson adiciona role

type TPerson = {
    id: number|string;
    name: string;
    password: string;
    role: "Normal" | "Admin";
}

enum TPerson.role={

}


type adminAccount={
    nickname: string,
    permission: true
}

type normalAccount={

}
//esse ok
const usuario :TPerson={
    id: 1,
    name: "Matheus",
    email: "matheus@gmail.com",
    password: "123456",
    role: "NORMAL"
}

type Person = number | string ;

valor "true" é typeof true se valor é "true" => admin true 


