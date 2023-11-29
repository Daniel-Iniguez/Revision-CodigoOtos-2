//Se cambiaron todas las declaraciones de var a let o const
const formulario = document.querySelector(".formulario") //la llamda estab mal ya que no era un id era una clase y con el nombre formulario

formulario.onsubmit = function (event) { //e se cambio por event ya que se hya otra variable e referente a la edad en la función

  event.preventDefault(); //(e.prevent();) la sitaxis estaba mal; Se cambio e -> event, prevent() -> preventDefault()

  let n = formulario.elements[0]
  let e = formulario.elements[1]
  let na = formulario.elements[2]

  let nombre = n.value
  let edad = e.value

  let i = na.selectedIndex
  let nacionalidad = na.options[i].value
  console.log(nombre, edad)
  console.log(nacionalidad)

  if (nombre.length === 0) {
    n.classList.add("error")
  }else{
    n.classList.add("correcto") //Se agreggo esta linea para que cuando este bien no se quede en rojo el input cuando hubo un error
  }
  if (edad < 18 || edad > 120) {
    e.classList.add("error")
  }else{
    e.classList.add("correcto") //Se agreggo esta linea para que cuando este bien se ponga verde y no se quede en rojo el input cuando hubo un error
  }

  if (nombre.length > 0
    && (edad > 18
      && edad < 120)) {
    agregarInvitado(nombre, edad, nacionalidad)
  }
}

//cambie la creacion de boton y la seccion donde se vaa  crear

// let botoon = document.querySelector(".boton");

// let botonBorrar = document.createElement("button");

// botonBorrar.textContent = "Eliminar invitado";
// botonBorrar.id = "boton-borrar"

// let corteLinea = document.createElement("br")
// botoon.appendChild(corteLinea)
// botoon.appendChild(botonBorrar);

// ME DI CUENTA QUE ESTO NO SIRVE YA QUE AL MOSTRAR LOS INIVITADOS CADA UNO TIENE SU BOTON DE ELIMINAR

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

  let lista = document.getElementById("lista-de-invitados")

  let elementoLista = document.createElement("div")
  elementoLista.classList.add("elemento-lista") //tenia .added y lo correcto es add.
  lista.appendChild(elementoLista)

  let spanNombre = document.createElement("span")
  let inputNombre = document.createElement("input")
  let espacio = document.createElement("br")
  spanNombre.textContent = "Nombre: "
  inputNombre.value = nombre
  elementoLista.appendChild(spanNombre)
  elementoLista.appendChild(inputNombre)
  elementoLista.appendChild(espacio)

  function crearElemento(descripcion, valor) {
    let spanNombre = document.createElement("span")
    let inputNombre = document.createElement("input")
    let espacio = document.createElement("br")
    spanNombre.textContent = descripcion + ": "
    inputNombre.value = valor
    elementoLista.appendChild(spanNombre)
    elementoLista.appendChild(inputNombre)
    elementoLista.appendChild(espacio)
  }

  crearElemento("Nombre", nombre)
  crearElemento("Edad", edad)
  crearElemento("Nacionalidad", nacionalidad)


  let botonBorrar = document.createElement("button")
  botonBorrar.textContent = "Eliminar invitado"
  botonBorrar.id = "boton-borrar"
  let corteLinea = document.createElement("br")
  elementoLista.appendChild(corteLinea)
  elementoLista.appendChild(botonBorrar);

  botonBorrar.onclick = function () {
    // this.parentNode.style.display = 'none';
    botonBorrar.parentNode.remove()
  }
}