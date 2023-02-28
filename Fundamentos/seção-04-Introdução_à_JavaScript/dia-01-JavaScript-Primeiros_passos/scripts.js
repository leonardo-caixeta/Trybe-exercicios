let penteaderaCusto = 300
let penteaderaValor = 600
let lucro = penteaderaValor * 1000 - penteaderaCusto * 1000
let imposto = penteaderaCusto * (20/100)
let lucroTotal = lucro - lucroImposto

if (penteaderaCusto <= 0 || penteaderaValor <= 0){
  console.log("ERRO")
} else {
 console.log("Tudo certo")
}