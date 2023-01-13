console.log("opa caba vei");

const idade = 24;


// console.log(idade);

// const idadeSomada = idade + 2;
// console.log(idadeSomada);

const nome = 'Carlos'


console.log(`Meu nome é ${nome}`)


let lista = ['carro', 'ovo', 'mandioca']
lista.push('chinelo')



const listaDestinos = new Array(
    `São Paulo`,
    `Rio de Janeiro`,
    `Salvador`
);
console.log(`Minha idade é ${idade}`)
console.log(listaDestinos);

listaDestinos.splice(0, 1);

console.log(listaDestinos);



console.log(`Embarque: \n`);
console.log("pode embarcar maldito");


let destino = "caruaru";
let contador = 0;

let existe = false

while (contador < listaDestinos.length) {
    if (listaDestinos[contador] == destino) {
        existe = true;
        break;

    }
    contador++;
}

console.log("esse destino é: " + existe);


/*
for (contador = 0; contador <= listaDestinos.length; contador++) {
    if (listaDestinos[contador] == destino) {
        console.log("Esse Destino faz parte do pacote promocional")
    
    }
    else {
        console.log("Esse destino nao faz parte do pacote")

    }
}*/
