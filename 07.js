const array =[ 
    {nome:'celular Xiaome',price: 500, quantity:32},
    {nome:'celular apple',price: 3500, quantity:24},
    {nome:'celular sansung',price: 2500, quantity:42},
    {nomet:'celular lg',price: 1500, quantity:43},
    {nome:'celular oppo',price: 1200, quantity:12},
  ]
//****** aqui é o find e o findindex */
  const find = array.find((product)=> product.nome === 'celular apple' );
  console.log(find)

  const findIndex = array.findIndex((product)=> product.nome === 'celular oppo');
  console.log(findIndex)
  console.log(array[findIndex])

//**** aqui é o some e o every */

const some = array.some((product)=>product.price > 4000);  //** o .some faz uma pesquisa se tem ou não , sempre retorna com false ou true  */
console.log(`tem algum produto maior que o valor de 4000 ${some}`)

const every = array.every((product)=>product.price >= 500);  //** o .every faz uma pesquisa se todos os intens cumpre a regra  , sempre retorna com false ou true  */
console.log(`todos os produtos da nossa lista são maior que 500  ${every}`)

//** map */

const map = array.map((product)=> {
return {
    ...product,
    subtatoal: product.price * product.quantity


}} ); //**o map serve pra pegar um array e modificalo   */
console.log({map})
//console.log(`o valor de cada iten é  [${map}]`)
