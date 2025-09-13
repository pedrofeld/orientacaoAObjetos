export class Animal {
    constructor(public nome: string, public idade: number) {}
    
    emitirSom(): string {
        return "Som genérico de animal";
    }
    
    mover(): string {
        return "O animal está se movendo";
    }
}