import { Autor } from './autor';

export class Livro {
    constructor(public titulo: string, public autor: Autor) {}
    
    exibirInfo(): string {
        return `Livro: ${this.titulo} - Autor: ${this.autor.nome}`;
    }
}