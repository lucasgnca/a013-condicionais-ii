/*Crie um código que receba um número por prompt
e verifique se um número é divisível por 2 ou por 3*/

const num = +prompt('Digite seu número');

// if(num % 2 === 0) {
//     console.log('O número inserido é divisível por 2.')
//     if(num % 3 === 0) {
//         console.log('O número inserido é divisível por 3.')
//     } else {
//         console.log('O número inserido não é divisível por 3.')
//     }
// } else {
//     console.log('O número inserido não é divisível por 2.')
// }

// Utilizando um operador lógico para unir duas operações relacionais

// if (num % 2 === 0 && num % 3 === 0) {
//     console.log('O número é divisível por 2 e por 3')
// } else {
//     console.log('O número não é divisível por 2 e por 3')
// }
//----

if (num % 2 === 0 || num % 3 === 0) {
    console.log('O número é divisível por 2 ou por 3')
} else {
    console.log('O número não é divisível por 2 ou por 3')
}
