import { Livro } from './livro';

export class Autor {
    constructor(public nome: string, public email: string) {}
    
    escreverLivro(titulo: string): Livro {
        return new Livro(titulo, this);
    }
}