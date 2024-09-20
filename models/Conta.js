export default class Conta {

    #cod
    #titular
    #saldo

    /**
     * Construtor da classe Conta
     * @param {number} cod - Codigo da conta
     * @param {Titular} titular - Titular da conta
     * @param {number} saldo - Saldo da conta
     */
    constructor(cod, titular, saldo) {
        this.#cod = cod;
        this.#titular = titular;
        this.#saldo = saldo;
    }

    depositar(valor) {
        this.#saldo += valor;
    }

    retirar(valor) {
        this.#saldo -= valor;        
    }

    toString() {
        return `Conta: ${this.#cod}, Titular: ${this.#titular.nome}, Saldo: ${this.#saldo}`;
    }
}