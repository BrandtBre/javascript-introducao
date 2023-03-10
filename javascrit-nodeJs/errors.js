const numero = 0;
// Uma constante deve ser inicializada, ou seja, não deve ser declarada de tal forma
// 'const numero;'
// SyntaxError: Missing intializer in const declaration

console.log(numero);
// Erro de sintaxe, não se deve escrever da seguinte forma:
// console.lo(numer;
// SyntaxError: missing ) after argument list

console.log(minhaVar); 
// Um erro de referência, ou seja, a linguagem não conseguiu achar a váriavel que está sendo utilizada
// ReferenceError: minhaVar is not defined

// RangeError: Quando um código recebe um dado do tipo certo, porém não dentro do formato aceitável.
// Por Exemplo, um processamento que só pode ser feito com números inteiros
// maiores ou iguais a zero, mas recebe '-1'

// ReferenceError: Normalmente ocorre quando o códgo tenta acessar algo que não existe, como uma variável que não foi definida;
// muitas vezer é causado por erros de digitação ou confusão nos nomes utilizados, mas também pode indicar um erro no programa.

// SytanxError: Na maior parte dos casos ocorre quando há erros no programa e o JavaScript não consegue executá-lo. 
// Os erros podem ser métodos ou propriedades escritos ou utilizados de forma incorreta,
// por exemplo, operadores ou sinais gráficos com elementos a menos, como esquecer de fechar chaves ou colchetes.

// TypeError: Indica que o código esperava receber um dado de um determinado tipo, tal qual uma string de texto, 
// mas recebeu outro, como um número, booleano ou null.
