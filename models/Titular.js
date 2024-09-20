export default class Titular {

    /**
     * Construtor da classe Titular
     * @param {string} nome - Nome do titular
     * @param {string} cpf - CPF do titular
     */
    constructor(nome, cpf) {
      this.nome = nome;
      this.cpf = cpf;
    }
  
    get Nome() {
      return this.nome;
    }

    get Cpf() {
      return this.cpf;
    }
  }