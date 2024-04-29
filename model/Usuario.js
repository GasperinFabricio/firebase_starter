
export default class Usuario {

    constructor(nome, id, email, senha, login) {
        this.setNome(nome)
        this.setId(id)
        this.setEmail(email)
        this.setSenha(senha)
        this.setLogin(login)
    }

    getNome() {
        return this.nome
    }

    getId() {
        return this.id
    }

    getEmail() {
        return this.email
    }

    getSenha() {
        return this.senha
    }

    getLogin() {
        return this.login
    }

    setNome(nome) {
        this.nome = nome
    }

    setId(id) {
        this.id = id
    }

    setEmail(email) {
        this.email = email;
    }

    setSenha(senha) {
        this.senha = senha
    }

    setLogin(login) {
        this.login = login
    }


    mostrar() {
        let texto = "ID do Usuário: " + this.id + "\n";
        texto += "Nome do Usuário: " + this.nome + "\n";
          
        alert(texto);
        alert(JSON.stringify(this));
      }
}