const user1 = {
    id: 123,
    name:'jorge',
    lastName:'silva',
    email: 'jose"gmail.com',
    password: '123456',
    age:23,
    redesSocais:['insta' ,'face ','whats ','link']
    
}

const fistName = user1.name          //* aqui nos criamos uma const parar pegar o o nome do obejto acima 
const lastName = user1.lastName      //* aqui nos criamos uma const parar pegar o segundo name  do obejto acima 
console.log(fistName,lastName)           //* aqui chamamos o console.log para mostar as duas consts 

//***** Esse jeito acima é o normal e o jeito abaixo é aplicando o metodo de destruturação *******

const user = {
    id: 123,
    name:'jorge',
    lastName:'silva',
    email: 'jose"gmail.com',
    password: '123456',
    age:23,
    redesSocais:['insta' ,'face ','whats ','link']
}

const {id, email,redesSocais, ...resto} = user // aqui nos estamos aplicandoa destruturação , pois só estamos criando uma const e colocando dentro das as strings que queremos oegar , sem a necssidade de criar novas const 
//** na ultima posição estamos usando o rest, é utilizado para coletar o resto das informaçãoes que não forao declaradas dentro da const , sempre devemos usar no final da const e sempre com os 3 pontos antes (...rest) , pode ser usado com qualquer nome  */
const [P1,P2] = redesSocais 

// console.log({id},{email})

// console.log( {P1})

// console.log( {id,email},{P1})

console.log(resto) //** usamos o chaves dentro para transforma o resultado do lag em um obejeto , se retirar o chaves ele retorna um array


