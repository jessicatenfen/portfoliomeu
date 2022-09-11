"use strict";
var button = document.getElementById('button');
var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var soma = document.getElementById('soma');
var Subtração = document.getElementById('Subtração');
var Multiplicação = document.getElementById('Multiplicação');
var Divisão = document.getElementById('Divisão');
function somarNumeros(n1, n2) {
    return Number(n1) + Number(n2);
}
function multiplicarNumeros(n1, n2) {
    return Number(n1) * Number(n2);
}
function subtrairNumeros(n1, n2) {
    return Number(n1) - Number(n2);
}
function dividirNumeros(n1, n2) {
    return Number(n1) / Number(n2);
}
if (soma) {
    soma.addEventListener('click', function () {
        if (input1 && input2) {
            console.log(somarNumeros(Number(input1.value), Number(input2.value)));
        }
    });
}
if (Subtração) {
    Subtração.addEventListener('click', function () {
        if (input1 && input2) {
            console.log(subtrairNumeros(Number(input1.value), Number(input2.value)));
        }
    });
}
if (Multiplicação) {
    Multiplicação.addEventListener('click', function () {
        if (input1 && input2) {
            console.log(multiplicarNumeros(Number(input1.value), Number(input2.value)));
        }
    });
}
if (Divisão) {
    Divisão.addEventListener('click', function () {
        if (input1 && input2) {
            console.log(dividirNumeros(Number(input1.value), Number(input2.value)));
        }
    });
}
