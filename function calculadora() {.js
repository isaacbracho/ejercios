function calculadora() {
    const operacion = prompt(
        "elige una de las opciones:\n" +
        "1. Suma \n" +
        "2. Resta \n" +
        "3. Multiplicacion \n" +
        "4. Division \n" +
        "5. Raz Cuadrada \n" +
        "6. Exponencia \n" +
        "7. Coseno \n" +
        "ingrese una opcion:"
    );

    if (operacion === null || !['1', '2', '3', '4', '5', '6', '7'].includes(operacion)) {
        console.log("error. Por favor, elige un numero del 1 al 7.");
        return;
    }

    let num1, num2, resultado;

    if (['1', '2', '3', '4', '6'].includes(operacion)) {
        num1 = parseFloat(prompt("Ingresa un numero:"));
        if (isNaN(num1)) {
            console.log("error. Por favor, ingresa un numero valido.");
            return;
        }

        num2 = parseFloat(prompt("Ingresa un numero:"));
        if (isNaN(num2)) {
            console.log("error, ingresa un numero valido.");
            return;
        }
    } else {
        num1 = parseFloat(prompt("Ingresa el numero:"));
        if (isNaN(num1)) {
            console.log("Entrada invalida. Por favor, ingresa un numero valido.");
            return;
        }
    }

    switch (operacion) {
        case '1':
            resultado = num1 + num2;
            console.log(`El resultado de la suma es: ${resultado}`);
            break;
        case '2':
            resultado = num1 - num2;
            console.log(`El resultado de la resta es: ${resultado}`);
            break;
        case '3':
            resultado = num1 * num2;
            console.log(`El resultado de la multiplicacion es: ${resultado}`);
            break;
        case '4':
            if (num2 === 0) {
                console.log("No se puede dividir por cero.");
            } else {
                resultado = num1 / num2;
                console.log(`El resultado de la division es: ${resultado}`);
            }
            break;
        case '5':
            if (num1 < 0) {
                console.log("No se puede calcular la raiz cuadrada de un numero negativo.");
            } else {
                resultado = Math.sqrt(num1);
                console.log(`La raiz cuadrada de ${num1} es: ${resultado}`);
            }
            break;
        case '6':
            resultado = Math.pow(num1, num2);
            console.log(`${num1} elevado a la ${num2} es: ${resultado}`);
            break;
        case '7':
            resultado = Math.cos(num1);
            console.log(`El coseno de ${num1} es: ${resultado}`);
            break;
        default:
            console.log("Ha ocurrido un error inesperado.");
            break;
    }
}

calculadora();



