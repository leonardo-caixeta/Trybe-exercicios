let valueIdade ;

function imprimeIdade() {
  for (let idade = 30; idade <= 40; idade += 1) {
    valueIdade = idade;
    console.log(`Idade dentro do for: ${idade}`);
    return idade
  }
  return ;
}
imprimeIdade()
 console.log(`Idade fora do for ${valueIdade}`);

