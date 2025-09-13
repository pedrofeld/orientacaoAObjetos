export class Aluno {
    private static todosAlunos: Aluno[] = [];

    constructor(public nome: string, public matricula: string) {
        Aluno.todosAlunos.push(this);
    }

    static getTodosAlunos(): Aluno[] {
        return Aluno.todosAlunos;
    }
}