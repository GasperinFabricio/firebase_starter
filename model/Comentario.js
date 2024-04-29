export default class Comentario {

    constructor(textoComentado) {
        this.setTextoComentado(textoComentado)
    }

    getTextoComentado(){
        return this.textoComentado
    }

    setTextoComentado(textoComentado){
        this.textoComentado = textoComentado
    }

    mostrar() {
        texto += "Comentário: " + this.textoPostagem + "\n";
          
        alert(texto);
        alert(JSON.stringify(this));
      }
}