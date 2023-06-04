 const appCall = new Promise((resolve,reject)=>{
     resolve(`Sucesso !`);
     reject(`erro!`)});
 //**aqui estamos criando uma nova rpomessa que espera um sucesso ou um erro , criamos uma new promise e fazemos uma arroy function com o resolve e o reject */
//  appCall
//  .then((resposta)=>{ 
//     console.log(resposta)})
//     //**aqui estamos chamando a função com o .then com a resposta de sucesso */
//  .catch((erro)=>{ 
//     console.log(erro)});
//     //**aqui estamos chamando a função com o .catch com a resposta de erro */

    async function rum (){
        try{
            const resposta = await appCall;
            console.log(resposta) }
        catch(erro){
            console.log(erro)

     }
    }
    rum()



    //** diferença entre os dois é que quando nos usamos o .then e o ponto .catch eles não espera a resposta pra contimuar com o codigo */
    //** quando queremos usar a resposta da promissi temos que usar o await e o async , junto com o bloco de erro do try e o catch , assim o codigo só continuar quandit iver uma resposta da promessa  */