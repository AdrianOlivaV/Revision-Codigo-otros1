// Tenemos un li de productos
const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]
//Cambiado el metodo para obtener los elementos html
const listaDeProductos = document.getElementById("lista-de-productos") //cambiado el nombre de la variable de  li a listaDeProcuctos
const botonDeFiltro = document.getElementById("botonFiltrar");
const SelectFilter=document.getElementById("items"); //Hacemos referencia a el elemento selector donde se elile el filtro

// se creo una funcion para generar el elemento div que contendra la informacion de cada producto
const createItemCard =()=>{
  let card=document.createElement("div")
  card.classList.add("producto");
  return card
};
//Se creo una funcion para generar el elemento P donde se almacena el nombre del producto
const createCardContent=(arreglo, indice="i")=>{
    let titulo = document.createElement("p");
    titulo.classList.add("titulo");
    titulo.textContent = arreglo[indice].nombre;

    return titulo;
};
// se creo una funcion para generar el elemento img donde se almacena la imagen del producto
const createContentImage=(arreglo, indice="i")=>{
    let imagen = document.createElement("img");
    imagen.setAttribute('src', arreglo[indice].img);
    return imagen
}

//Se creo la funcion displayProductos para poder ejecutar el bloque de codigo que iteraba sobre el arreglo de productos y mostrar cada producto en una tarjeta por separado
const displayProductos=(arregloProductos)=>{
  
  for (let i = 0; i < arregloProductos.length; i++) {
    //Se asigna la funcio createItemCard a una variable para poder acceder a el elemento html retornado por la funcion
    let card=createItemCard() 
    //Se usa el metodo appendChild sobre la variable card para ingresar el contenido de cada producto retornado por la funcion createCardContent
    card.appendChild(createCardContent(arregloProductos,i))  
   //Se usa el metodo appendChild sobre la variable card para ingresar el contenido de cada producto retornado por la funcion createContenImgae
    card.appendChild(createContentImage(arregloProductos,i))
    
    listaDeProductos.appendChild(card) //Se añade el contenido de la variable card a el elemento html referenciado por la variable listaDeProductos
  }
};
displayProductos(productos) //Se ejecuta la funcion displayProductos pasando como parametro el array de productos para mostar todos los items antes del filtrado


botonDeFiltro.onclick = function() {
  while (listaDeProductos.firstChild) { //corregido el nombre de la variable listaDeProductos
    listaDeProductos.removeChild(listaDeProductos.firstChild); //corregido el nombre de la variable listaDeProductos
  }

  const palabraFiltro = SelectFilter.value; //cambió el nombre de la variable texto por palabraFiltro
  const productosFiltrados = filtrado(productos, palabraFiltro );
  displayProductos(productosFiltrados); //aplicamos la funcion displayProductos pasando como parametro el array de productos filtrados

};

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
};  







