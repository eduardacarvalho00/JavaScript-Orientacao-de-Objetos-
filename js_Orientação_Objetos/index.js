/* 
const cliente1Nome = "ricardo";
const cliente1CPF = 11122233387;
const cliente1Agencia = 1001;
const cliente1Saldo = 0;

alternativa para isso é fazer uma classe 
*/
import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardo", 22233344456);

const cliente2 = new Cliente("Alice", 11122244456);

const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
contaCorrenteRicardo.depositar(500);
const conta2 = new ContaCorrente(102, cliente2);

let valor = 200;
contaCorrenteRicardo.transferir(valor, conta2);

console.log(contaCorrenteRicardo);
console.log(conta2);
console.log(ContaCorrente.numeroDeContas);