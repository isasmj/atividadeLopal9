let numPrimeiro = parseInt(prompt("Digite um número inteiro"));
let numSegundo = parseInt(prompt("Digite agora um  outro número inteiro"));
let temp;
if (numSegundo < numPrimeiro) {
    temp = numPrimeiro;
    numPrimeiro = numSegundo;
    numSegundo = temp;
}
while (numPrimeiro < numSegundo) {
    if (numPrimeiro % 2 == 0)
        console.log(`Número ${numPrimeiro}`)
    numPrimeiro++;
}
