
export default class GrupoUsuariosDTO {

    #nomeGrupo
    constructor(nomeGrupo) {
        this.#nomeGrupo = nomeGrupo;
    }

    getNomeGrupo() {
        return this.#nomeGrupo
    }

    toJSON() {
        return '{ ' +
          '"Nome Grupo:" : "' + this.#nomeGrupo + '",' +
          '}';
      }
}