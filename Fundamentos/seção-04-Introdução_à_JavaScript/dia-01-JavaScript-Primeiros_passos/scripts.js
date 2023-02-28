let peça = "kNight";

switch (peça.toLowerCase()) {
  case "knight":
    console.log("se move em L (3 para frente e um para o lado)");
break;
  case"queen":
    console.log("se move para todas as direções");
break;
  case "king":
  console.log("se move um quadrado por direção");
break;
  case "bishop":
    console.log("se move nas diagonais");
break;
  case "hook":
    console.log("se move para frente e para os lados ");
break;
  case "pawn":
    console.log("no primeiro movimento pode-se pular 2 quadrados para frente, após,somente 1 quadrado por vez, pegando peças pulando na diagonal");
break;
  default:
    console.log("Peça inexistente");
break;
}