
import { Cliente } from "./Cliente.js";
import { contaCorrente } from "./ContaCorrente.js";



const cliente1 = new Cliente("Ricardo",11122233309);
const contaCorrente1 = new contaCorrente(1001,cliente1);
console.log(contaCorrente1);

const cliente2 = new Cliente("Alice",88822233309);
const contaCorrente2 = new contaCorrente(102,cliente2);
console.log(contaCorrente2);


/* tambem dá pra fazer assim; criando um objeto de outra forma
const baixo = {
    cordas: 4,
    madeira: "mogno",
    pickups: "single coil",

};
console.log(baixo)
*/

//contaCorrente2.depositar(1000);
//contaCorrente1.transferir(200, contaCorrente2);


//console.log(contaCorrente1);

console.log(cliente1);
console.log(cliente2);
console.log(contaCorrente.numeroDeContas);