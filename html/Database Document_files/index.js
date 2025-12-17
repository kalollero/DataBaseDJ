const app = document.querySelector('#app')

// 1. Inicializa Markdown-it
// Markdown-it no necesita opciones de configuración para tablas o GFM.
const md = window.markdownit();

fetch("/Documentos/DataBase.md")
    .then((response) => {
        // Asegura que la respuesta sea OK antes de continuar
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
        return response.text();
    })
    .then(text => {
        // 2. Convierte el Markdown a HTML usando md.render()
        const html = md.render(text);

        // 3. Inserta el HTML en el DOM
        app.innerHTML = html;

        // 4. Aplica el resaltado de sintaxis de Highlight.js
        // hljs.highlightAll();
    })
    .catch(error => {
        console.error("Error al cargar o convertir el documento:", error);
        // Mensaje de error visible para el usuario si falla la carga
        app.innerHTML = "<p style='color: red;'>Error al cargar el documento Markdown: verifique la ruta del archivo.</p>";
    });


// const app = document.querySelector('#app')
// const md = fetch("/Documentos/DataBase.md").then((response) => response.text()).then(text => {
//     const converter = new showdown.Converter({
//         tables: true,       // Para las tablas
//         ghCodeBlocks: true  // Para los bloques de código (```código```)
//     });
//     const html = converter.makeHtml(text);
//     app.innerHTML = html
// })
