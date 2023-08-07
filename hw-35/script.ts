// С ниже приведенным массивом решить следующие задачи. Все функции и данные должны быть протипизированы:

interface IUser {
    name: string; 
    phone: string;
    email: string; 
    animals?: string[]; 
    cars?: string[]; 
    hasChildren: boolean; 
    hasEducation: boolean;
}

const users: Array<IUser> = [
    {
        name: "Harry Felton",
        phone: "(09) 897 33 33",
        email: "felton@gmail.com",
        animals: ["cat"],
        cars: ["bmw"],
        hasChildren: false,
        hasEducation: true    
    },
    {
        name: "May Sender",
        phone: "(09) 117 33 33",
        email: "sender22@gmail.com",
        hasChildren: true,
        hasEducation: true
    },
    {
        name: "Henry Ford",
        phone: "(09) 999 93 23",
        email: "ford0@gmail.com",
        cars: ["bmw", "audi"],
        hasChildren: true,
        hasEducation: false
    }
]


// 1. Создать строку из имен пользователей через запятую
function getUsersName(users: Array<IUser>):string {
    return users.map(({name}) => name).join(', ');
}
console.log(getUsersName(users));


// 2. Посчитать общее количество машин у пользователей
function getUsersCars(users: Array<IUser>):number {
    let i = 0;
    users.map(({cars}) => cars ? cars.map(() => i++) : [])
    return i
}
console.log(getUsersCars(users));


// 3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования
function getEducatedUsers(users: Array<IUser>):string {
    let arrUsers: string[] = [];
    users.map(({name, hasEducation}) => hasEducation ? arrUsers.push(name) : [])
    let educatedUsers: string = arrUsers.join(', ');
    return educatedUsers
}
console.log(getEducatedUsers(users));


//4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных
function getUsersWithAnimals(users: Array<IUser>): string {
    let arrUsers: string[] = [];
    users.map(({name, animals}) => animals ? arrUsers.push(name) : [])
    let usersWithAnimals: string = arrUsers.join(', ');
    return usersWithAnimals
}
console.log(getUsersWithAnimals(users));


//5. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с названиями марок автомобилей через запятую
function getCarName(users: Array<IUser>):string {
    let arrUsers: string[] = [];
    users.map((users) => {
        if (users.cars) {
            for(let i = 0; i<users.cars.length; i++){
                arrUsers.push(users.cars[i]);
            }
        }
    })
    let carName = arrUsers.join(', ');
    return carName
}
console.log(getCarName(users));
