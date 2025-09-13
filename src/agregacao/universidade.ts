import { Departamento } from "./departamento";

export class Universidade {
    private departamentos: Departamento[] = [];
    
    constructor(public nome: string) {}
    
    adicionarDepartamento(departamento: Departamento): void {
        this.departamentos.push(departamento);
    }
    
    listarDepartamentos(): string[] {
        return this.departamentos.map(depto => depto.nome);
    }
}