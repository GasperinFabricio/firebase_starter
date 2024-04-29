export default class GrupoUsuarios {

    constructor(nomeGrupo){
        this.setNomeGrupo(nomeGrupo)
    }

    getNomeGrupo() {
        return this.nomeGrupo
    }

    setNomeGrupo(nomeGrupo) {
        this.nomeGrupo = nomeGrupo
    }

    mostrar() {
        texto += "Nome do Grupo: " + this.nomeGrupo + "\n";
          
        alert(texto);
        alert(JSON.stringify(this));
      }
}