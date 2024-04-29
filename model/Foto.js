export default class Foto {

    constructor(conteudo, descricao){
        this.setConteudo(conteudo)
        this.setDescricao(descricao)
    }

    getConteudo() {
        return this.conteudo
    }

    getDescricao() {
        return this.descricao
    }

    setConteudo(conteudo) {
        this.conteudo = conteudo;
    }

    setDescricao(descricao) {
        this.descricao = descricao;
    }

    mostrar() {
        let texto = "Conteúdo da Foto: " + this.conteudo + "\n";
        texto += "Descrição da Foto: " + this.descricao + "\n";
          
        alert(texto);
        alert(JSON.stringify(this));
      }
}