const novo = `jose@mail.com`
const array = [`dois`,`tres`,`oito`]

const includsNovo = novo.includes(`.`) //** aqui nos usamos o ,inclusds para saber se temo oque queremos dentro do (`**`) -> lembradno qte é case sensitivity*/
const includesArrey = array.includes(`tres`) //** aqui ainda estamos usando o includs, nesse caso estamo usanod em array, e agiora ele não procura por letra e sim por palavras dentro das posiçoes  */

console.log(`Tem @ nesse email ? ${includesArrey}, 
Tem esse numero na senha ? ${includsNovo}`) 
//** aqui usamos o templete strings para interpolar as respostas com ${}  */

const start = novo.startsWith(`j`) //** aqui estamos vendo se a palara dentro dos ``comeca com a letra que passamos dentro dos parametros lembradno que é case sentitivity */
const end = novo.endsWith(`m`)   //** aqui estamos vendo se a palara dentro dos ``termina  com a letra que passamos dentro dos parametros lembradno que é case sentitivity */


console.log(`Termina com M? ${end}
 Começa com J ? ${start}`) 
//** aqui usamos o templete strings para interpolar as respostas com ${}  */
