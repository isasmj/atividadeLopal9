
let numeroAleatorio = Math.ceil(Math.random() * 10);

alert("Olá, vamos jogar um jogo!! você terá 3 tentativas para tentar acertar um número de 1 a 10 que estou pensando, vou te ajudar falando se é maior ou menor. Boa sorte!!!! ")

for (let tentativa = 1; tentativa <= 3; tentativa++) {
    numDigitado = parseInt(prompt(`Digite um número para sua ${tentativa} Tentativa:  `));

    if (numDigitado === numeroAleatorio) {
        alert(` Você acertou em ${tentativa} tentativas!!! parabéns🤩🎆.`);
        break;
    } else if (numDigitado < numeroAleatorio) {
        alert("sinto muito 😢 tente um número maior.");
    } else {
        alert("sinto muito 😢 tente um número menor.");
    }

    if (tentativa === 3) {
        alert(`Você não tem mais tentativas 😫. O número aelatório que eu pensei era ${numeroAleatorio}.`);
    }
}

