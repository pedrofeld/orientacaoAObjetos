import { Disciplina } from "./disciplina";

export class Professor {
    private disciplinasMinistradas: Disciplina[] = [];
    
    constructor(public nome: string, public especialidade: string) {}
    
    // Multiplicidade muitos para muitos (1 professor para N disciplinas, 1 disciplina para N professores)
    ministrarDisciplina(disciplina: Disciplina): void {
        this.disciplinasMinistradas.push(disciplina);
    }
    
    listarDisciplinas(): Disciplina[] {
        return this.disciplinasMinistradas;
    }
}