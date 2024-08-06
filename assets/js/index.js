const botao = document.querySelector('button').addEventListener('click', calcular);

const form = document.querySelector('#form');
function calcular(event){
    event.preventDefault();

    peso = document.querySelector('#peso').value;
    altura = document.querySelector('#altura').value;

    imc = peso / (altura * altura);

    console.log(imc.toFixed(2))

    const resultado = document.querySelector('#resultado');
    if(imc < 18.5){
        resultado.innerHTML = `<p> Seu IMC é:</p><p><b>${imc.toFixed(2)}</b></p><p>Abaixo do Peso</p>`
    } else if(imc >= 18.5 && imc <= 24,9){
        resultado.innerHTML = `<p> Seu IMC é:</p><p><b>${imc.toFixed(2)}</b></p><p>Peso Normal</p>`
    } else if(imc >= 25 && imc <= 29,9){
        resultado.innerHTML = `<p> Seu IMC é:</p><p><b>${imc.toFixed(2)}</b></p><p>Sobrepeso</p>`
    } else if(imc >= 30 && imc <= 34,9){
        resultado.innerHTML = `<p> Seu IMC é:</p><p><b>${imc.toFixed(2)}</b></p><p>Obesidade Grau 1</p>`
    } else if(imc >= 35 && imc <= 39,9){
        resultado.innerHTML = `<p> Seu IMC é:</p><p><b>${imc.toFixed(2)}</b></p><p>Obesidade Grau 2</p>`
    } else if(imc > 45){
        resultado.innerHTML = `<p> Seu IMC é:</p><p><b>${imc.toFixed(2)}</b></p><p>Obesidade Grau 3</p>`
    } else{
        resultado.innerHTML = `Preencha Corretamente`
    }
}