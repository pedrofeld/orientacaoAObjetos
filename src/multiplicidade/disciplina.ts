import { Aluno } from "./aluno";

export class Disciplina {
    private static todasDisciplinas: Disciplina[] = [];

    private alunos: Aluno[] = [];

    constructor(public nome: string, public codigo: string) {
        Disciplina.todasDisciplinas.push(this);
    }

    matricularAluno(aluno: Aluno): void {
        this.alunos.push(aluno);
    }

    // Multiplicidade 1 para muitos (1 disciplina para N alunos)
    listarAlunos(): Aluno[] {
        return this.alunos;
    }

    getQuantidadeAlunos(): number {
        return this.alunos.length;
    }

    static getTodasDisciplinas(): Disciplina[] {
        return Disciplina.todasDisciplinas;
    }
}