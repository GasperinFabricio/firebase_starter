export default class Comentario {

    //Atributos privados
    #textoComentado;

    constructor(textoComentado) {
        this.#textoComentado(textoComentado)
    }

    getTextoComentado(){
        return this.#textoComentado;
    }
    

    toJSON() {
        return '{ ' +
          '"textoComentado" : "' + this.#textoComentado + '",' 
          '}';
      }
}