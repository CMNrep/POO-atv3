export default class Agencia {
   #cod
   #contas
   
    /**
     * Construtor da classe Agencia
     * @param {number} cod - Codigo da agencia
     */
    constructor(cod) {
        this.#cod = cod;
        this.#contas = [];
    }

    /**
     * Retorna uma string com informações da conta especificada
     * @param {number} ind - Indice da conta
     * @returns {string} Informações da conta
     */
    getConta(ind) {
        return this.#contas[(ind - 1)].toString()
    }
    
    /**
     * Adiciona uma conta a lista de contas da agencia
     * @param {Conta} contas - Conta a ser adicionada
     */
    addConta(contas) {
        this.#contas.push(contas);
    }
    /**
     * Retorna uma lista de strings com informções de todas as contas da agencia
     * @returns {string[]} Lista de informações de todas as contas
     */
    listContas() {
        let listContas = []
        for(const conta of this.#contas) {
            listContas.push("\n" + conta.toString());
        }
        return `\nInfo Contas:${listContas}`
    }
}