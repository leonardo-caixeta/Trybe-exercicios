let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

info['recorrente'] = 'Sim'
let keys = Object.keys(info);
for(keys in info){
  console.log(keys)
}

// console.log(info)
// console.log(`Bem vinda, ${info.personagem}`);