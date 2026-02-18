# 🎨 Dibujo Básico con HTML5 Canvas

Este proyecto es una demostración introductoria sobre cómo configurar y manipular el elemento `<canvas>` de HTML5 utilizando JavaScript para renderizado gráfico 2D y CSS para el estilizado del contenedor.

![Badge HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Badge CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Badge JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 📋 Descripción

El programa inicializa un lienzo digital que se adapta dinámicamente al **50% del ancho y alto** de la ventana del navegador. Muestra cómo separar la lógica de presentación (CSS) de la lógica de dibujo (JS/Canvas API).

### Características Principales:
* **Renderizado 2D:** Dibujo de primitivas geométricas básicas (rectángulos) mediante `getContext('2d')`.
* **Diseño Responsivo (Básico):** Cálculo matemático del tamaño del canvas basado en `window.innerWidth`.
* **Estilizado Externo:** Uso de CSS para bordes, sombras (box-shadow) y colores de fondo del contenedor.
* **Gestión de Estados:** Implementación de la máquina de estados de Canvas para colores de relleno.

## 🚀 Instalación y Uso

No se requieren instalaciones complejas ni dependencias (como Node.js o Python). Este es un proyecto nativo del navegador.

1.  **Clonar el repositorio** (o descargar los archivos):
    ```bash
    git clone <tu-url-del-repositorio-aqui>
    ```
2.  **Abrir el proyecto:**
    Navega a la carpeta del proyecto y haz doble clic en el archivo `index.html`. Se abrirá en tu navegador web predeterminado.

## 📂 Estructura del Proyecto

* `index.html`: Estructura semántica y contenedor del canvas.
* `estilos.css`: Definición visual (Bordes azules, fondo rojo claro, sombras).
* `script.js`: Lógica de inicialización del contexto y comandos de dibujo.

## 🛠️ Tecnologías Utilizadas

* **HTML5 Canvas API:** Para la manipulación de píxeles.
* **CSS3:** Para el diseño visual (Modelo de caja).
* **JavaScript (ES6):** Para la lógica de programación.

## ✒️ Autor

**Miguel Angel Cano Alejandro**
* Desarrollado como práctica de fundamentos de Computación Gráfica.

---
*Este proyecto es fines educativos.*