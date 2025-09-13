import { Autor } from './associacao/autor';
import { Livro } from './associacao/livro';
import { Departamento } from './agregacao/departamento';
import { Universidade } from './agregacao/universidade';
import { Carro } from './composicao/carro';
import { Animal } from './heranca/animal';
import { Gato } from './heranca/gato';
import { Cachorro } from './heranca/cachorro';
import { Aluno } from './multiplicidade/aluno';
import { Disciplina } from './multiplicidade/disciplina';
import { Professor } from './multiplicidade/professor';

//------------------------------- Associação ----------------------------------------

console.log("=== ASSOCIAÇÃO ===");
const autor = new Autor("J.K. Rowling", "jk@email.com");
const livro = autor.escreverLivro("Harry Potter");
console.log(livro.exibirInfo());

//------------------------------- Agregação ----------------------------------------

console.log("\n=== AGREGAÇÃO ===");

const universidadeFederal = new Universidade("Universidade Federal");
const universidadeEstadual = new Universidade("Universidade Estadual");

const deptoEngenharia = new Departamento("Engenharia");
const deptoMedicina = new Departamento("Medicina");
const deptoDireito = new Departamento("Direito");
const deptoArtes = new Departamento("Artes");

universidadeFederal.adicionarDepartamento(deptoEngenharia);
universidadeFederal.adicionarDepartamento(deptoMedicina);
console.log(`Departamentos ${universidadeFederal.nome}:`, universidadeFederal.listarDepartamentos());

universidadeEstadual.adicionarDepartamento(deptoDireito);
universidadeEstadual.adicionarDepartamento(deptoArtes);
console.log(`Departamentos ${universidadeEstadual.nome}:`, universidadeEstadual.listarDepartamentos());

// ------------------------------- Composição ----------------------------------------

console.log("\n=== COMPOSIÇÃO ===");

const carro = new Carro("Fusca", 65);

console.log(carro.ligarCarro());
console.log("Potência do motor:", carro.getInfoMotor());

// const motor = new Motor(100); // não permite acesso externo
// console.log(motor.ligar()); // não permite acesso externo

// ------------------------------- Herança ----------------------------------------

console.log("\n=== HERANÇA ===");

const cachorro = new Cachorro("Rex", 3, "Labrador");
const gato = new Gato("Mimi", 2, "Preto");

console.log(`Cachorro faz: ${cachorro.emitirSom()}`);
console.log(`Cachorro: ${cachorro.abanarRabo()}`);

console.log(`Gato faz: ${gato.emitirSom()}`);
console.log(`Gato: ${gato.arranhar()}`);

// ------------------------------- Multiplicidade ----------------------------------------

console.log("\n=== MULTIPLICIDADE ===");

const matematica = new Disciplina("Matemática", "MAT101");
const fisica = new Disciplina("Física", "FIS201");
const quimica = new Disciplina("Química", "QUI301");

const aluno1 = new Aluno("João Silva", "2023001");
const aluno2 = new Aluno("Maria Santos", "2023002");
const aluno3 = new Aluno("Pedro Costa", "2023003");

matematica.matricularAluno(aluno1);
matematica.matricularAluno(aluno2);

fisica.matricularAluno(aluno2);
fisica.matricularAluno(aluno3);

quimica.matricularAluno(aluno3);

const professor = new Professor("Dr. Carlos", "Ciências Exatas");
professor.ministrarDisciplina(matematica);
professor.ministrarDisciplina(fisica);

const professor2 = new Professor("Dra. Ana", "Química");
professor2.ministrarDisciplina(quimica);

console.log(`Alunos em ${matematica.nome}: ${matematica.getQuantidadeAlunos()}`);
console.log(`Alunos em ${fisica.nome}: ${fisica.getQuantidadeAlunos()}`);
console.log(`Alunos em ${quimica.nome}: ${quimica.getQuantidadeAlunos()}`);

console.log(`Disciplinas ministradas por ${professor.nome}: ${professor.listarDisciplinas().length}`);
console.log(`Disciplinas ministradas por ${professor2.nome}: ${professor2.listarDisciplinas().length}`);

for (const aluno of Aluno.getTodosAlunos()) {
    const disciplinasCursadas = Disciplina.getTodasDisciplinas()
        .filter(d => d.listarAlunos().includes(aluno))
        .map(d => d.nome)
        .join(', ');
    console.log(`Disciplinas cursadas por ${aluno.nome}: ${disciplinasCursadas}`);
}