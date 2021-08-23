
function calcularIMC(altura, peso){
    return peso / (altura ** 2);
}
function classificacaoIMC(imc){

    let categoria

    if (imc < 18.5) {
        categoria = "abaixo do peso."
    } else if (imc < 25){
        categoria = "com pesoal ideal. <span class='azul'>Paarabéns.</span> "
    }else if (imc < 30){
        categoria = "levemente acima do peso."
    }else if (imc < 35){
    categoria = "com obesidade grau I."
    }else if (imc < 40){
        categoria = "com obesidade grau II." 
    } else {
        categoria ="com obesidade grau III <span class='vermelho'>Cuidado!!!</span>."
    }
    return categoria
}
//document.querySelector para puxar tags, id e classes
function camposValidos(){
    return document.querySelector("form").reportValidity()
}

// Colocar o = .value - Para pegar o valor que o usúario inseriu (digitou)
//toFixed(1) casa decimal
function exibirResultado() {
    const nome = document.getElementById("nome").value
    const altura = document.getElementById("altura").value.replace(",",".")
    const peso = document.getElementById("peso").value.replace(",",".")
    const resultado = document.getElementById("resultado")

    if (camposValidos()){
        const imc = calcularIMC(altura, peso)
        const classificacao = classificacaoIMC (imc)
    
        resultado.innerHTML = `${nome} seu IMC é ${imc.toFixed(1)} e você está com ${classificacao}`
    }else{
        resultado.textContent = "Preencha todos os campos!"
    }

}
function capturaEnter( evento ){
    if(evento.key == "Enter"){
        exibirResultado()
    }
}

//Eventos

//addEventListener("click") Evento que acontecera quando o usúario clicar
document.getElementById("calcular").addEventListener("click", exibirResultado)
document.querySelector("form").addEventListener("keypress",capturaEnter)