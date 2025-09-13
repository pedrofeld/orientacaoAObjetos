import { Animal } from "./animal";

export class Gato extends Animal {
    constructor(nome: string, idade: number, public cor: string) {
        super(nome, idade);
    }
    
    override emitirSom(): string {
        return "Miau!";
    }
    
    arranhar(): string {
        return `${this.nome} está arranhando!`;
    }
}