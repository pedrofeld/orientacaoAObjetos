import { Animal } from "./animal";

export class Cachorro extends Animal {
    constructor(nome: string, idade: number, public raca: string) {
        super(nome, idade);
    }
    
    override emitirSom(): string {
        return "Au Au!";
    }
    
    abanarRabo(): string {
        return `${this.nome} está abanando o rabo!`;
    }
}