import Usuario from "/Usuario.js"

export default class Usuario {

    //Atributos privados
    #nome;
    #id;
    #email;
    #senha;
    #login;
    
    constructor(nome, id, email, senha, login) {
        this.#nome  = Usuario.getNome()
        this.#id    = Usuario.getId()
        this.#email = Usuario.getEmail()
        this.#senha = Usuario.getSenha()
        this.#login = Usuario.getLogin()
    }



    getNome() {
        return this.#nome
    }

    getId() {
        return this.#id
    }

    getEmail() {
        return this.#email
    }

    getSenha() {
        return this.#senha
    }

    getLogin() {
        return this.#login
    }

    toJSON() {
        return '{ ' +
          '"nome" : "'      + this.#nome + '",' + 
          '"id" : "'       + this.#id + '",' +
          '"email" : "'      + this.#email + '",' + 
          '"senha" : "'     + this.#senha + '",' +
          '"login" : "'  + this.#login + '"' +
          '}';
      }

}