let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

info['recorrente'] = 'Sim';

let keys = Object.keys(info);
for(keys in info){
  //console.log(keys)
}

let value = Object.values(info)
for (key in info){
// console.log(info[key]);
}

let infoTioPatinhas = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
  nota: 'O último MacPatinhas',
};

infoTioPatinhas ['recorrente'] = 'Sim';

let infoAmbos = {
  nomes: info.personagem + ' e ' + infoTioPatinhas.personagem ,
  origem: info.origem + ' e ' + infoTioPatinhas.origem,
  nota: info.nota + ' e ' + infoTioPatinhas.nota
}

let infoRecorrente = '';

if (info.recorrente === infoTioPatinhas.recorrente){
  infoRecorrente = 'Ambos Recorrentes';
}

console.log(infoAmbos);
//console.log(infoRecorrente);