export const GetStartedService = {
    title: `Introducción`,
    content: `Usar web components en proyectos web es super sencillo.
    Lo puedes hacer de dos formas: A través del <strong>cdn</strong> o instarlo a través
    de <strong>npm</strong>`,
    integration: {
        plainjs: {
            title: `Componentes sin framework`,
            content: `Integrar cb ui components  a 
            un proyecto sin un framework de JavaScript es sencillo. Si 
            está utilizando una página HTML simple, puede agregarlos
            a través de un script en la etiqueta head. Por ejemplo:
            `,
            maincode: `<html>
    <head>
        <script src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic.js"></script>
    </head>
    <body>
        ...
    </body>
</html>`,
            alternativeContent: `De forma alternativa, si desea 
            aprovechar los módulos ES, puede incluir los componentes mediante una declaración de importación. 
            Debe tener en cuenta que type = "module" solo funciona en navegadores modernos (no disponible en IE11 o Edge 12-18).            `,
            alternativecode: `<html>
    <head>
    <script type="module">
        import { defineCustomElements } from 'https://cdn.jsdelivr.net/npm/@ionic/core/loader/index.es2017.mjs';
        defineCustomElements();
    </script>
    </head>
    <body>
       ...
    </body>
</html>`
        }
    }
}