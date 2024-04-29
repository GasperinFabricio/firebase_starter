export default class PostagemDTO {

    //Atributos privados
    #id;
    #textoPostagem;

    constructor(id, textoPostagem) {
        this.#id(id)
        this.#textoPostagem(textoPostagem)
    }

    getId(){
        return this.#id;
    }
    
    getTextoPostagem(){
        return this.#textoPostagem;
    }

    toJSON() {
        return '{ ' +
          '"id" : "' + this.#id + '",' +
          '"textoPostagem" : "'       + this.#textoPostagem + '",' +
          '}';
      }
}