// Podemos unir dos arreglos con el operados ...

let team1 = ['Vincent', 'Felipe', 'Raul']
let team2 = ['Belen', 'Zireael', 'Rosa']

let educacion = ['David', ...team1, ...team2]
console.log(educacion)