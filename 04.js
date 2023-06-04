const user1 = {
    id:8776,
    name:'jorge',
    lastName:'silva',
    email: 'jose"gmail.com',
    password: '123456',
    age:23,
    trabalhando: false,
}

const updateUser = {   //** aqui vamos usar a propiedade spred , que serve para nos pergamso um objeto e transcrevelo dentro de uma atualização , sem ter que escrevelo novamente , como uma atualiazação de cadastro muito longo , assim não precisamos trasncrevelo novamente , so pegamos o nome da const e jogamos na atualização (...nafrente , como esse {...user1}) e alteramos que desejamos fazer o update  */
    ...user1,
    trabalhando: true


}
console.log(user1)
console.log(updateUser)

//********** Tamplete Srintg ************/
console.log(`essa é a priemira linha  
e essa é a segunda linha `)

//**sempre que que queremos q a linha seja quebrada como nessa const devemos usar a ``; pois é a unica que permite  */

// console.log("essa é a priemira linha 
// e essa é a segunda linha")

//* assim com "" e '' não funciona e da erro

const {id} = updateUser

console.log(`OLA MEU AMIGO  ${id}`) //** Aqui estamos usanod o esqiema de imteropolação junti com o esquema de crase ``, que usamos para deixar o code mais facil de ler  */
