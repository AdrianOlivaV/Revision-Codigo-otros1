const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name');/*Correccion: para acceder al elemento name se hace mediante una clase, le hace falta el . */
const $b = document.querySelector('.blog'); /*Correccion: para acceder al elemento blog se hace mediante una clase, en lugar de # deber ser . */
const $l = document.querySelector('.location');

async function displayUser(username) { /* correcion: la funcion debe ser async para poder usar await */
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data = await response.json(); /* Correccion: se debe usar await para esperar la respuesta de la promesa y convertirla a json */
  console.log(data);/* La variable data no esta declarada */
  $n.textContent = `${data.name}`; /* Correccion: se tiene que usar template literals (comillas invertidas ``) */
  $b.textContent = `${data.blog}`; /* Correccion: se tiene que usar template literals (comillas invertidas ``) */
  $l.textContent = `${data.location}`; /* Correccion: se tiene que usar template literals (comillas invertidas ``) */
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`; /* Correccion: se debe usar $n en lugar de n para acceder al elemento */
}

displayUser('stolinski').catch(handleError);