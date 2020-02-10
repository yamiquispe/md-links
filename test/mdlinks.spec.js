const path = require('path');
const fs = require('fs');

const {
  pathConvertAbsolute, pathIsAbsolute, validateArchive, validateDirectory, validateTypeArchive,
} = require('../src/index.js');


describe('Valido el tipo de ruta recibido.', () => {
  it('Debería ser una función: pathIsAbsolute.', () => {
    expect(typeof pathIsAbsolute).toBe('function');
  });

  it('Debería detectar si la ruta recibida es absoluta.', () => {
    const newPath = '/md/newruta.js';
    expect(path.isAbsolute(pathIsAbsolute(newPath))).toBe(true);
  });

  it('Debería ser una función: pathConvertAbsolute.', () => {
    expect(typeof pathConvertAbsolute).toBe('function');
  });

  it('Debería convertir a absoluta, si la ruta recibida es relativa.', () => {
    const newPath = 'Markdown';
    if (pathIsAbsolute(newPath) === false) {
      expect(pathConvertAbsolute(newPath)).toBe(true);
    }
  });
});


describe('Valido si recibo un archivo.', () => {
  it('Debería ser una función.', () => {
    expect(typeof validateArchive).toBe('function');
  });

  it('Debería detectar si es un archivo.', () => {
    const newPath = '/home/administrador/Escritorio/HTML/0-doctype.html';
    expect(validateArchive(newPath)).toBe(true);
  });
});


describe('Valido si recibo un directorio.', () => {
  it('Debería ser una función.', () => {
    expect(typeof validateDirectory).toBe('function');
  });

  it('Debería detectar si es un directorio.', () => {
    const newPath = '/home/administrador/Escritorio/HTML';
    expect(validateDirectory(newPath)).toBe(true);
  });
});


describe('Valido el tipo de archivo recibido.', () => {
  it('Debería ser una función.', () => {
    expect(typeof validateTypeArchive).toBe('function');
  });

  it('Debería detectar si es un archivo md.', () => {
    const newPath = '/home/administrador/Escritorio/JsProject/LIM011-fe-md-links/README.md';
    expect(validateTypeArchive(newPath)).toBe('.md');
  });

  it('Debería detectar si es un archivo diferente al formato md.', () => {
    const newPath = '/home/administrador/Escritorio/HTML/7-abreviaturas.html';
    expect(validateTypeArchive(newPath)).toBe('.html');
  });
});

/* it('La ruta debería ser un String.', () => {
        const root = 'newruta';
        expect(path.isAbsolute()).toBe('String');
    }); */
