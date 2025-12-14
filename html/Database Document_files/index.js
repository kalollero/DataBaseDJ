const app = document.querySelector('#app')
const md = fetch("/Documentos/DataBase.md").then((response) => response.text()).then(text => {
    const converter = new showdown.Converter({ tables: true });
    const html = converter.makeHtml(text);
    app.innerHTML = html
})
