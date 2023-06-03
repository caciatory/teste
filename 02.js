const ola = (mensage)=> { // aqui nos declaramos a arroy function , aonde nos declaramos uma const e colocamos nome ( ou não ) 

    console.log(mensage ? mensage : 'INSIRA A SUA MENSAGEM ') //  aqui usamos o argumetno com ? para saber se a mesnagem esta sendo executado no console ,e caso não tiver ele devera retonr a a mesnagem padrão 
}
ola('ola ')

// Opção mais facil (fitles ) e moderna com os argumentos

const hello = (mensage = 'INSIRA A SUA MENSAGEM ')=> { // aqui nos declaramos a arroy function , e ja declaramos uma mensagem padrão na mensagem caso não for passado quando chamos a funtions 

    console.log(mensage) //  aqui nos declaramos para mostrar a mensagem com o console.log
}
hello('olá novamente ') // aqui nos estamos chamando a funtions 

