/* eslint-disable no-console */

const mdLinks = require('../lib/api/index');


mdLinks('/home/administrador/Escritorio/JsProject/markdown-links/MarkdownForTest/TestMarkdown', { validate: '' })
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
