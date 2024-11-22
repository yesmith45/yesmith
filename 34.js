// Paso 1. Declaración de Variables
let num1 = 0; // Variable para el primer número
let num2 = 0; // Variable para el segundo número
let operacion = ""; // Variable para almacenar la operación matemática

// Paso 2. Función para realizar operaciones
function realizarOperacion(num1, num2, operacion) {
    if (operacion === "suma") {
        return num1 + num2;
    } else if (operacion === "resta") {
        return num1 - num2;
    } else if (operacion === "multiplicacion") {
        return num1 * num2;
    } else if (operacion === "division") {
        if (num2 === 0) {
            return "Error: No se puede dividir por cero.";
        }
        return num1 / num2;
    } else {
        return "Error: Operación no válida.";
    }
}

// Paso 4. Bucle para realizar múltiples operaciones
let continuar = true; // Control para el bucle

while (continuar) {
    // Simula la entrada del usuario (puedes usar prompt en un navegador)
    num1 = parseFloat(prompt("Ingrese el primer número:"));
    num2 = parseFloat(prompt("Ingrese el segundo número:"));
    operacion = prompt(
        "Ingrese la operación a realizar (suma, resta, multiplicacion, division) o escriba 'salir' para terminar:"
    );

    if (operacion.toLowerCase() === "salir") {
        console.log("Gracias por usar la calculadora. ¡Adiós!");
        continuar = false;
    } else {
        // Paso 3. Validaciones de datos y operaciones
        const resultado = realizarOperacion(num1, num2, operacion.toLowerCase());
        console.log(`El resultado de la operación es: ${resultado}`);
    }
}
