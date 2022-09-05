const questions = [
  {
    keyword: 'init',
    content: `
    Bienvenida
    a. Para iniciar
    b. Para información
    `,
    a: 'inicio',
    b: 'informacion',
  },
  {
    keyword: 'inicio',
    content: `
    Inicio
    a. Paso 2.a
    b. Paso 2.b
    `,
    a: 'paso-2-a',
    b: 'paso-2-b',
  },
  {
    keyword: 'informacion',
    content: `
    Información
    a. Info 2.a
    b. Info 2.b
    `,
    a: 'info-2-a',
    b: 'info-2-b',
  },
  {
    keyword: 'paso-2-a',
    content: `
    Paso 2.a
    a. 
    b.
    `,
    a: 'init',
    b: 'init',
  },
  {
    keyword: 'paso-2-b',
    content: `
    Paso 2.b
    a. 
    b. 
    `,
    a: 'init',
    b: 'init',
  },
  {
    keyword: 'info-2-a',
    content: `
    Info 2.a
    a. 
    b. 
    `,
    a: 'init',
    b: 'init',
  },
  {
    keyword: 'info-2-b',
    content: `
    Info 2.b
    a. 
    b. 
    `,
    a: 'init',
    b: 'init',
  },
  
];

module.exports = { questions };
