export default class Postagem {

    constructor(idPostagem, textoPostagem){
        this.setIdPostagem(idPostagem)
        this.setTextoPostagem(textoPostagem)
    }

    getIdPostagem() {
        return this.idPostagem
    }

    getTextoPostagem() {
        return this.textoPostagem
    }

    setIdPostagem(idPostagem) {
        this.idPostagem = idPostagem
    }

    setTextoPostagem(textoPostagem) {
        this.textoPostagem = textoPostagem
    }

    mostrar() {
        let texto = "ID da Postagem: " + this.idPostagem + "\n";
        texto += "Texto da Postagem: " + this.textoPostagem + "\n";
          
        alert(texto);
        alert(JSON.stringify(this));
      }
}