export default class FotoDTO {

    //Atributos privados
    #conteudo;
    #descricao;

    constructor(conteudo, descricao) {
        this.#conteudo(conteudo)
        this.#descricao(descricao)
    }

    getConteudo(){
        return this.#conteudo;
    }
    
    getDescricao(){
        return this.#descricao;
    }

    toJSON() {
        return '{ ' +
          '"conteudo" : "' + this.#conteudo + '",' 
          '"descricao" : "'       + this.#descricao + '",'
          '}';
      }
}