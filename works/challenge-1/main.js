// mensaje de bienvenida
alert("Bienvenido a FinanzaVersity: Aprende a gestionar tu dinero de manera inteligente y construye tu futuro financiero.");

// Variables para almacenar respuestas
let temaSeleccionado;
let porcentajeAhorro, tieneDeudas;
let saludFinanciera = "Desconocido";
let recomendaciones = [];

// Función para mostrar el menú y navegar entre los módulos
function mostrarMenu() {
    return prompt("Por favor, elige un tema:\n1. Introducción a las Finanzas Personales\n2. Presupuesto y Ahorro\n3. Conceptos Básicos de Inversión\n4. Salir");
}

// Bucle principal para la navegacion de modulos
while (true) {
    temaSeleccionado = mostrarMenu();

    switch (temaSeleccionado) {
        case "1":
            // contenido de los modulos
            alert("Has seleccionado: Introducción a las Finanzas Personales");
            alert("En este módulo aprenderás los conceptos básicos de las finanzas personales.\n\n" +
                "1. Ingresos: El dinero que recibes, por ejemplo, tu salario o ingresos adicionales.\n" +
                "2. Egresos: El dinero que gastas en tus necesidades, como vivienda, comida, servicios y otros gastos.\n" +
                "3. Ahorro: El dinero que decides guardar para el futuro, un colchón de seguridad para emergencias o metas personales.\n" +
                "4. Deuda: El dinero que debes, ya sea por préstamos, tarjetas de crédito o cualquier otro tipo de obligación financiera.\n\n" +
                "Entender la diferencia entre ingresos y gastos es el primer paso para una salud financiera sólida.");
            break;

        case "2":
            // Módulo 2: calcular presupuesto personal
            alert("Has seleccionado: Presupuesto y Ahorro");

            // Preguntar por porcentaje de ahorro
            porcentajeAhorro = parseInt(prompt("¿Cuánto porcentaje de tus ingresos destinas al ahorro? (0-100%)"));

            // Preguntar si tiene deudas
            tieneDeudas = confirm("¿Tienes deudas actualmente? (sí/no)");

            // Calcular salud financiera
            if (porcentajeAhorro >= 20 && !tieneDeudas) {
                saludFinanciera = "Excelente";
            } else if (porcentajeAhorro >= 10 && !tieneDeudas) {
                saludFinanciera = "Buena";
            } else if (porcentajeAhorro < 10 || tieneDeudas) {
                saludFinanciera = "Moderada";
            }

            // Mostrar el resultado del índice de salud financiera
            alert("Tu índice de salud financiera es: " + saludFinanciera + ". Necesitas mejorar tus estrategias de ahorro.");

            // Recomendaciones 
            if (porcentajeAhorro < 10) {
                recomendaciones.push("Implementa la regla del 50/30/20: 50% para necesidades, 30% para gustos y 20% para ahorro e inversión.");
            }

            if (tieneDeudas) {
                recomendaciones.push("Prioriza el pago de deudas con mayor tasa de interés y busca consolidar tus compromisos financieros.");
            }
            break;

        case "3":
            // Módulo 3: Conceptos basicos de inversion
            alert("Has seleccionado: Conceptos Básicos de Inversión");
            alert("En este módulo aprenderás los conceptos clave sobre la inversión:\n" +
                "1. Inversión: Es colocar dinero en activos con la esperanza de obtener ganancias.\n" +
                "2. Tipos de Inversión: acciones, bonos, fondos mutuos, bienes raíces.\n" +
                "3. Riesgo: Todas las inversiones conllevan un nivel de riesgo, por lo tanto, es importante diversificar.\n" +
                "4. Rentabilidad: Es la ganancia que se obtiene por una inversión realizada.");
            break;

        case "4":
            // Salida
            alert("Gracias por utilizar FinanzaVersity. ¡Sigue aprendiendo y construyendo tu futuro financiero!");
            break;

        default:
            alert("Selección no válida. Por favor, elige un número del 1 al 4.");
            continue;
    }

    // Mostrar resumen final si el usuario ha completado el módulo 2 (Presupuesto y Ahorro)
    if (temaSeleccionado === "2") {
        alert("Resumen Final:\n" +
            "■ Nivel de Salud Financiera: " + saludFinanciera + "\n" +
            "■ Recomendaciones: " + recomendaciones.join(" y ") + "\n" +
            "¡Sigue aprendiendo y mejorando!");
    }

    // Preguntar al usuario si desea continuar o salir
    let continuar = confirm("¿Deseas continuar explorando los módulos?");
    if (!continuar) {
        break;
    }
}
