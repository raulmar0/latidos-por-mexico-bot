// question.content needs to be strictly unindented
// The first keyword needs to be stricly 'init'

const errorString = '*Favor de escribir la letra de la opción deseada. Ejemplo: a*'

const questions = [
  {
    keyword: 'init',
    content: `
*Hola, buen día, ¿en qué podemos ayudarle?*
*Favor de escribir la letra de la opción deseada. Ejemplo: a*

ℹ️ Información general
🅰️ Quiero donar
🅱️ Tengo dolor de pecho, ¿qué puedo hacer?
    `,
    options: [
      {i: 'informacion'},
      {a: 'quiero-donar'},
      {b: 'test'}
    ]
  },
  {
    keyword: 'informacion',
    content: `
*Visite nuestra página web*
*www.latidospormexico.org*

🅰️ Menu principal
    `,
    options: [
      {a: 'init'},
    ]
  },
  {
    keyword: 'quiero-donar',
    content: `
*En este apartado puede conocer más detalles sobre cómo apoyar a tratar las enfermedades cardiovasculares más oportunamente en México*
*www.latidospormexico.org/donate*

🅰️ Menu principal
    `,
    options: [
      {a: 'init'},
    ]
  },
  {
    keyword: 'test',
    content: `
*Inicio de test*
*¿Tiene dolor en el pecho de reciente comienzo?*

🅰️ Si
🅱️ No
    `,
    options: [
      {a: 'numero-sintomas-1'},
      {b: 'informacion'}
    ]
  },
  {
    keyword: 'numero-sintomas-1',
    content: `
*¿Siente dos o más de los siguientes síntomas?*
*- Dolor en brazo izquierdo*
*- Opresión en el pecho*
*- Sudoración*
*- Náuseas*
*- Dolor Abdomninal*
*- Sensación de desmayo*

🅰️ Si 
🅱️ No
    `,
    options: [
      {a: 'duracion'},
      {b: 'esfuerzo'}
    ]
  },
  {
    keyword: 'duracion',
    content: `
*¿Dura más de 10 minutos?*

🅰️ Si
🅱️ No
    `,
    options: [
      {a: 'numero-sintomas-2'},
      {b: 'esfuerzo'}
    ]
  },
  {
    keyword: 'esfuerzo',
    content: `
*¿Su dolor aparece con el esfuerzo físico? (Correr, caminar, cargar objetos)*

🅰️ Si
🅱️ No
    `,
    options: [
      {a: 'rango-edad'},
      {b: 'dolor-empeora'}
    ]
  },
  {
    keyword: 'numero-sintomas-2',
    content: `
*¿Siente dos o más de los siguientes síntomas?*
*- Dolor estomacal*
*- Dolor punzante en las costillas*
*- Falta de aire*
*- Palpitaciones en el pecho*
*- Sensación de desmayo*

🅰️ Si
🅱️ No
    `,
    options: [
      {a: 'rango-edad'},
      {b: 'esfuerzo'}
    ]
  },
  {
    keyword: 'rango-edad',
    content: `
*¿Cuál es su rango de edad?*

🅰️ Menor de 40 años
🅱️ Mayor de 40 años
    `,
    options: [
      {a: 'urgencia'},
      {b: 'alguna-enfermedad'},
    ]
  },
  {
    keyword: 'alguna-enfermedad',
    content: `
*¿Tiene alguna o más de las siguientes enfermedades?*
*- Diabetes mellitus*
*- Hipertensión*
*- Obesidad*
*- Ateroesclerosis*
*- Colesterol elevado*

🅰️ Si
🅱️ No
    `,
    options: [
      {a: 'urgencia-nivel-3'},
      {b: 'urgencia'},
    ]
  },
  {
    keyword: 'urgencia-nivel-3',
    content: `
*Diríjase al centro de salud más cercano, de ser posible a una unidad de tercer nivel o contacte a los servicios de emergencia de su ciudad (911). En calidad de urgencia.*

🅰️ Volver al inicio
    `,
    options: [
      {a: 'init'},
    ]
  },
  {
    keyword: 'urgencia',
    content: `
*Diríjase al centro de salud más cercano o contacte a los servicios de emergencia de su ciudad (911). En calidad de urgencia.*

🅰️ Volver al inicio
    `,
    options: [
      {a: 'init'},
    ]
  },
  {
    keyword: 'dolor-empeora',
    content: `
*¿Su dolor empeora con el movimiento? (Estiramientos, posturas)*

🅰️ Si
🅱️ No
    `,
    options: [
      {a: 'no-urgencia'},
      {b: 'eventos-estresantes'}
    ]
  },
  {
    keyword: 'eventos-estresantes',
    content: `
*¿Su dolor en pecho aparece después de eventos estresantes o situaciones extraordinarias?*

🅰️ Si
🅱️ No
    `,
    options: [
      {a: 'no-urgencia'},
      {b: 'sin-razon'}
    ]
  },
  {
    keyword: 'sin-razon',
    content: `
*¿Su dolor en pecho parece no tener razón aparente y se resuelve en menos de 5 minutos?*

🅰️ Si
🅱️ No
    `,
    options: [
      {a: 'no-urgencia'},
      {b: 'no-urgencia'}
    ]
  },
  {
    keyword: 'no-urgencia',
    content: `
*Probablemente su dolor no se relacione con eventos cardiovasculares. Le recomendamos acudir a su médico de confianza para una evaluación completa.*

🅰️ Volver al inicio
    `,
    options: [
      {a: 'init'},
    ]
  },
];

module.exports = { questions, errorString };
