const getUser = ()=> ({
    id: '123',
    name:'jorge ',
    lastName:'matheus '
})

console.log(getUser());

const numero = (mensage = 'COLOQUE O SEU NOME NO CAMP ABAIXO')=>{
    console.log(mensage)

}
numero('jose')