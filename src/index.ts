import { Autor } from './associacao/autor';
import { Livro } from './associacao/livro';

console.log("=== ASSOCIAÇÃO ===");
const autor = new Autor("J.K. Rowling", "jk@email.com");
const livro = autor.escreverLivro("Harry Potter");
console.log(livro.exibirInfo());