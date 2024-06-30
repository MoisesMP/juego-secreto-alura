let numeroSecreto = 0;
let intentos = 0;
let numerosSorteados = [];
let numeroMaximo = 10;

function asingnarTextoElmento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

    if (numeroDeUsuario == numeroSecreto){
        asingnarTextoElmento('p', `Acertaste el numero en ${intentos} ${intentos == 1 ? 'intento' : 'intentos'}`);
        document.getElementById("reiniciar").removeAttribute('disabled');
    } else {
        // El usuario fallo
        if(numeroDeUsuario < numeroSecreto){
            asingnarTextoElmento('p', 'El numero es mayor');
        } else {
            asingnarTextoElmento('p', 'El numero es menor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    let elementoHTML = document.querySelector('#valorUsuario');
    elementoHTML.value = '';

}

function generarNumeroSecreto(){
    let numeroGenerado =  Math.round(Math.random() * numeroMaximo)+1;

    // Generar un nuevo numero si ya se ha generado
    if (numerosSorteados.length == numeroMaximo){
        asingnarTextoElmento('p', 'Ya se sortearon todos los numeros posibles');
    } else {
        // Evitar que se repitan
        if (numerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            numerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function CondicionesIniciales(){
    asingnarTextoElmento('h1', 'Juego del numero secreto');
    asingnarTextoElmento('p', `Indica un numero entre 1 y ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    document.getElementById("reiniciar").setAttribute('disabled', 'true');
    limpiarCaja();
    CondicionesIniciales();
}


CondicionesIniciales();