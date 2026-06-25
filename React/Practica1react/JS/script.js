// 1. Uso de CONST para declarar elementos del DOM que no van a cambiar
const boton = document.getElementById('btn-generar');
const inputJuego = document.getElementById('juego');
const inputCalificacion = document.getElementById('calificacion');
const textoResultado = document.getElementById('resultado');

// 2. ARROW FUNCTION para procesar el veredicto según la nota
const obtenerVeredicto = (nota) => {
    if (nota >= 9) {
        return "Excelente trabajo, superaste las expectativas.";
    } 
    else if (nota >= 8) {
        return "Muy buen resultado, sigue así.";
    } 
    else if (nota >= 6) {
        return "Buen esfuerzo, aunque hay margen para mejorar.";
    } 
    else if (nota >= 4) { // Nuevo nivel agregado
        return "Aprobado por poco, conviene repasar algunos temas.";
    } 
    else {
        return "Necesitas practicar más para alcanzar el nivel esperado.";
    }
};

// 3. ARROW FUNCTION principal vinculada al evento Click del botón
boton.addEventListener('click', () => {

    // Uso de LET porque sus valores dependen de lo que el usuario escriba
    let nombreJuego = inputJuego.value;
    let nota = Number(inputCalificacion.value);

    // Validación básica
    if (nombreJuego === "" || inputCalificacion.value === "") {
        textoResultado.innerText = "Oye tío, pon un nombre y una nota válida.";
        return;
    }

    // Llamamos a la función para obtener el veredicto
    let veredictoFinal = obtenerVeredicto(nota);

    // Mostramos el resultado
    textoResultado.innerText =
        `Mi veredicto sobre "${nombreJuego}" es un ${nota}/10. ${veredictoFinal}`;
});