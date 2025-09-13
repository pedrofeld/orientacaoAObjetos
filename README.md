# Projeto POO - Exemplos de Associação, Agregação, Composição, Herança e Multiplicidade

Este projeto demonstra os principais conceitos de Programação Orientada a Objetos (POO) utilizando TypeScript, com exemplos práticos de **associação**, **agregação**, **composição**, **herança** e **multiplicidade**.

## Conceitos e Aplicações

### Associação

**Definição:**  
A associação representa um relacionamento simples entre objetos, onde uma classe utiliza ou se relaciona com outra, mas sem dependência de ciclo de vida.

**No projeto:**  
- A classe `Autor` pode escrever vários livros (`Livro`), e cada livro está associado a um autor.
- Exemplo: Um autor escreve um livro, e o livro mantém referência ao autor.

---

### Agregação

**Definição:**  
A agregação é uma associação mais forte, onde um objeto "agrega" outros, mas os objetos agregados podem existir independentemente do agregador.

**No projeto:**  
- A classe `Universidade` agrega vários departamentos (`Departamento`), mas os departamentos podem existir fora da universidade.
- Exemplo: Departamentos são criados e depois adicionados à universidade.

---

### Composição

**Definição:**  
A composição é uma forma de agregação onde o objeto composto depende totalmente do objeto que o contém. O ciclo de vida do componente está atrelado ao do objeto principal.

**No projeto:**  
- A classe `Carro` contém um objeto `Motor`. O motor só existe dentro do carro e não pode ser acessado ou instanciado separadamente.
- Exemplo: O motor é criado internamente pelo carro e não pode ser manipulado fora dele.

---

### Herança

**Definição:**  
Herança permite que uma classe (subclasse) herde atributos e métodos de outra classe (superclasse), promovendo reutilização de código.

**No projeto:**  
- A classe `Animal` é a superclasse de `Cachorro` e `Gato`, que herdam seus métodos e atributos, podendo adicionar comportamentos específicos (polimorfismo).
- Exemplo: Cachorro e Gato herdam o método `emitirSom` de Animal e implementam métodos próprios.

---

### Multiplicidade

**Definição:**  
Multiplicidade representa relações de muitos para muitos entre objetos, como alunos em disciplinas e professores ministrando várias disciplinas.

**No projeto:**  
- A classe `Disciplina` pode ter vários alunos (`Aluno`) e professores (`Professor`), e cada aluno pode cursar várias disciplinas.
- Exemplo: Alunos são matriculados em disciplinas, e professores ministram múltiplas disciplinas.

---

## Como Executar

1. Instale as dependências do projeto.
2. Execute o arquivo principal (`index.ts`) para ver os exemplos de cada conceito no console.

---

## Estrutura do Projeto

- `/associacao` - Exemplos de associação (`Autor`, `Livro`)
- `/agregacao` - Exemplos de agregação (`Universidade`, `Departamento`)
- `/composicao` - Exemplos de composição (`Carro`, `Motor`)
- `/heranca` - Exemplos de herança (`Animal`, `Cachorro`, `Gato`)
- `/multiplicidade` - Exemplos de multiplicidade (`Aluno`, `Disciplina`, `Professor`)

---

## Objetivo

Este projeto serve como referência didática para estudantes e desenvolvedores que desejam entender e visualizar na prática os principais conceitos de POO aplicados em TypeScript.