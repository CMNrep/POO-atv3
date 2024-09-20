import Conta from "./models/Conta.js";//importando classes
import Agencia from "./models/Agencia.js";//importando classes
import Titular from "./models/Titular.js";//importando classes

//não foi feito verificação de tipo de valor if(typeof valor === 'number')
const Titular1 = new Titular("João da Silva", "111.111.111-11");
const Titular2 = new Titular("Maria Souza", "222.222.222-22");
let Conta1 = new Conta(1, Titular1, 100);
let Conta2 = new Conta(2, Titular2, 200);
const Agencia1 = new Agencia(1);

//adicionando conta na agencia
Agencia1.addConta(Conta1)
Agencia1.addConta(Conta2)

console.log(Agencia1.listContas())

//depositando e retirando
Conta1.depositar(100)
Conta2.retirar(50)

console.log(Agencia1.listContas())

console.log("")//apenas para pular a linha

//selecionando conta por index na agencia
console.log(Agencia1.getConta(1))//pega por index -1
console.log(Agencia1.getConta(2))//pega por index -1