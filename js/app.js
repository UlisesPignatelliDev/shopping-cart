//Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

cargarEventListeners();
function cargarEventListeners(){
    // cuando agregas un curso presionando "agregar al carrito"
    listaCursos.addEventListener('click', agregarCurso);
}

function agregarCurso(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
}

//Lee el contenido del html al que le dimos click y extrea la informacion del curso
function leerDatosCurso(curso){
    //crear un objeto con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent, // extrae el texto 
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }
    // agrega elementos al arreglo del Carrito
    articulosCarrito = [...articulosCarrito, infoCurso];
    console.log(articulosCarrito);
    carritoHTML();
}

// Muestra el carrito de compras en HTML
function carritoHTML(){

    //limpiar el html 
    limpiarHTML();

    //recorre el carrito y genera el html
    articulosCarrito.forEach( curso => {
        const { imagen, titulo, precio, id} = curso;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img  src="${imagen}" width=100></td>
            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${id} </td>
            <td>
            <a href="#" class="borrar-curso" data-od="${id}"> X </a>
            </td>
           
        `;

        //agrega el html del carrito en el tbody
        contenedorCarrito.appendChild(row);
    })
}

//eliminar los cursos del tbody
function limpiarHTML() {
    /* Forma lenta de limpiar
    contenedorCarrito.innerHTML = ''; */

    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}