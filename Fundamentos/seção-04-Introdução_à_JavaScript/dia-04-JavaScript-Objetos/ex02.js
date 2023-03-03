let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

leitor.livrosFavoritos.push(
    {
      titulo: 'Harry Potter e o Prisioneiro de Azkaban',
      autor: 'JK Rowling',
      editora: 'Rocco',
    }
)

let favoriteBook = leitor.livrosFavoritos[0].titulo;

console.log(`O livro favorito de ${leitor.nome} ${leitor.sobrenome} é '${favoriteBook}'`);

let numberOfTitles = leitor.livrosFavoritos.length;



console.log(`${leitor.nome} tem ${numberOfTitles} livros favoritos`);