import { Autor } from './associacao/autor';
import { Livro } from './associacao/livro';
import { Departamento } from './agregacao/departamento';
import { Universidade } from './agregacao/universidade';

console.log("=== ASSOCIAÇÃO ===");
const autor = new Autor("J.K. Rowling", "jk@email.com");
const livro = autor.escreverLivro("Harry Potter");
console.log(livro.exibirInfo());

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