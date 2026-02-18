/* ==========================================================================
 * PROGRAMA: Renderizado Básico de Primitivas 2D
 * ==========================================================================
 * DESCRIPCIÓN:
 * Este script inicializa la API Canvas de HTML5 y demuestra el flujo
 * básico de renderizado: obtención del contexto, configuración de estado
 * (color) y dibujo de geometría (un rectángulo).
 *
 * REQUISITOS:
 * - Un archivo HTML que contenga una etiqueta: <canvas id="canvas"></canvas>
 *
 * CONCEPTOS CLAVE:
 * - DOM (Document Object Model): Manipulación de elementos HTML.
 * - Contexto de Renderizado: La interfaz (API) que permite dibujar.
 * - Máquina de Estados: Configurar un estilo afecta a los dibujos futuros.
 * - Sistema de Coordenadas: (0,0) está en la esquina superior izquierda.
 *
 * AUTOR: Miguel Angel Cano Alejandro
 * FECHA: 17 de Febrero de 2026
 * ========================================================================== */

// --------------------------------------------------------------------------
// 1. INICIALIZACIÓN DEL ENTORNO
// --------------------------------------------------------------------------

/**
 * Paso 1: Obtener la referencia al elemento del DOM.
 * Buscamos en el documento HTML la etiqueta <canvas> que tenga el ID "canvas".
 * Esto nos permite manipular el "lienzo" desde JavaScript.
 */
var canvas = document.getElementById("canvas");

/**
 * Paso 2: Obtener el Contexto de Dibujo (Rendering Context).
 * El método .getContext() es la puerta de entrada a la API gráfica.
 *
 * Argumentos:
 * - "2d": Solicita la interfaz para gráficos bidimensionales (Canvas API).
 * - "webgl": Solicitaría la interfaz para gráficos 3D (basada en OpenGL ES).
 *
 * La variable 'ctx' ahora contiene todos los métodos y propiedades necesarios
 * para dibujar (es nuestro "pincel" inteligente).
 */
var ctx = canvas.getContext("2d");


// --------------------------------------------------------------------------
// 2. CONFIGURACIÓN Y RENDERIZADO
// --------------------------------------------------------------------------

/**
 * Paso 3: Configurar el estado de dibujo (Color de Relleno).
 *
 * El contexto funciona como una "Máquina de Estados". Una vez que definimos
 * una propiedad (como el color), esta se mantiene activa para todas las
 * figuras siguientes hasta que se cambie de nuevo.
 *
 * Valores aceptados:
 * - Nombres de color CSS (ej: "green", "red", "blue")
 * - Hexadecimal (ej: "#00FF00")
 * - Funciones RGB/RGBA (ej: "rgb(0, 255, 0)")
 */
ctx.fillStyle = "#8244C0";

/**
 * Paso 4: Dibujar la geometría (Rasterización inmediata).
 *
 * El método fillRect() dibuja un rectángulo sólido usando el color
 * definido anteriormente en 'fillStyle'.
 *
 * Parámetros del método fillRect(x, y, ancho, alto):
 * - x (10): Posición en el eje horizontal (píxeles desde la izquierda).
 * - y (10): Posición en el eje vertical (píxeles desde arriba).
 * - ancho (100): Dimensión horizontal del rectángulo.
 * - alto (100): Dimensión vertical del rectángulo.
 */
ctx.fillRect(10, 10, 100, 100);

/* FIN DEL PROGRAMA */