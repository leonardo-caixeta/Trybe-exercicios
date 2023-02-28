let percent = 72;

if (percent < 100) {
  console.log("ERRO_Maior que 100");
}
  else if (percent < 0){
    console.log("ERRO_Menor que 0");
  }
  else if (percent >= 90) {
    console.log("A");
  }
  else if (percent >= 80 && percent < 90) {
    console.log("B");
  }
  else if (percent >= 70 && percent < 80) {
    console.log("C");
  }
  else if (percent >= 60 && percent < 70) {
    console.log("D");
  }
  else if (percent >= 50 && percent < 60) {
    console.log("E")
  }
  else if (percent < 50 && percent > 0) {
    console.log("F");
  }
