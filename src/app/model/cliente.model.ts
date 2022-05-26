export class Cliente {
    public id: string;
    public nome: string;
    public email: string;
    public senha: string;

    constructor()
    constructor(id?: string, nome?: string,
                email?: string, senha?: string) {
        this.id = (id)? id : '';
        this.nome = (nome)? nome : '';
        this.email = (email)? email : '';
        this.senha = (senha)? senha : '';
    }
}