var input = document.getElementById('input'),
numero = document.querySelectorAll('.numeros div'),
operador = document.querySelectorAll('.operador div'),
resultado = document.getElementById('resultado')
borrar = document.getElementById('clear'),
resultadoDisplayed = false;

for(let i = 0; i < numero.length; i++){
    numero[i].addEventListener('click',function(e){
        let stringNuevo = input.innerHTML;
        let ultimoChar = stringNuevo[stringNuevo.length - 1];

        if(resultadoDisplayed === false){
            input.innerHTML += e.target.innerHTML;
        }else if( resultadoDisplayed  === true && ultimoChar === "+" || ultimoChar === "-" || ultimoChar === "×" || ultimoChar === "÷"){
            resultadoDisplayed = false;
            input.innerHTML += e.target.innerHTML;
        }else{
            resultadoDisplayed = false;
            input.innerHTML = "";
            input.innerHTML += e.target-innerHTML
        }
    });
}
for(let i = 0; i < operador.length; i++){
    operador[i].addEventListener('click', function(e){
        let stringNuevo = input.innerHTML;
        let ultimoChar = stringNuevo[stringNuevo.length - 1];

        if(ultimoChar === "+" || ultimoChar === "-" || ultimoChar === "×" || ultimoChar === "÷"){
            let nuevoString = stringNuevo.substring(0, stringNuevo.length - 1) + e.target.innerHTML;
            input.innerHTML = nuevoString;
        }else if( stringNuevo.length == 0){
            alert('Debe ingresar un numero primero')
        }
        else{
            input.innerHTML += e.target.innerHTML;
        }
    });
}
resultado.addEventListener('click',function(){
    let inputString = input.innerHTML;
    let numero = inputString.split(/\+|\-|\×|\÷/g)
    let operadores = inputString.replace(/[0-9]|\./g, "").split("");
    console.log(inputString);
    console.log(operadores);
    console.log(numero);
    console.log("----------------------------");

    let dividido = operadores.indexOf("÷");
    while(dividido != -1){
        numero.splice(dividido, 2, numero[dividido] / numero[dividido + 1]);
        operadores.splice(dividido,1);
        dividido = operadores.indexOf("÷")
    }
    let multiplicar = operadores.indexOf("×");
    while(multiplicar != -1){
        numero.splice(multiplicar, 2, numero[multiplicar]* numero[multiplicar + 1]);
        operadores.splice(multiplicar,1)
        multiplicar = operadores.indexOf("×");
    }
    let resta = operadores.indexOf("-");
    while(resta != -1){
        numero.splice(resta, 2, numero[resta]- numero[resta + 1]);
        operadores.splice(resta,1)
        resta = operadores.indexOf("*");
    }
    var suma = operadores.indexOf("+");
  while (suma != -1) {
    numbers.splice(suma, 2, parseFloat(numero[suma]) + parseFloat(numero[suma + 1]));
    operadores.splice(suma, 1);
    suma = operadores.indexOf("+");
  }
  input.innerHTML = numero[0];
  resultadoDisplayed = true;
});
clear.addEventListener('click',function(){
    input.innerHTML = "";
})
