function agregar0(){
    let objeto = JSON.parse(localStorage.getItem("productos"))
    let producto = objeto[0].precio
    let carrito = []
    if (JSON.parse(localStorage.getItem("carrito"))){
        carrito = JSON.parse(localStorage.getItem("carrito"))
    }
    carrito.push(JSON.stringify(producto))
    localStorage.setItem("carrito", JSON.stringify(carrito))
    let padre = document.getElementById("lista")
    let li = document.createElement("li")
    li.innerHTML = objeto[0].nombre
    padre.appendChild(li)
}

function agregar1(){
    let objeto = JSON.parse(localStorage.getItem("productos"))
    let producto = objeto[1].precio
    let carrito = []
    if (JSON.parse(localStorage.getItem("carrito"))){
        carrito = JSON.parse(localStorage.getItem("carrito"))
    }
    carrito.push(JSON.stringify(producto))
    localStorage.setItem("carrito", JSON.stringify(carrito))
    let padre = document.getElementById("lista")
    let li = document.createElement("li")
    li.innerHTML = objeto[1].nombre
    padre.appendChild(li)
}

function borrar(){
    let padre = document.getElementById("lista")
    padre.innerHTML = ""
    let mostrar = document.getElementById("mostrar")
    mostrar.innerHTML = ""
    localStorage.removeItem("carrito")
    localStorage.removeItem("total")
}

function precioFinal(){
    
    localStorage.setItem("total", total)
}

function mostrarTotal(){
    let carrito = JSON.parse(localStorage.getItem("carrito"))
    let precioFinal = 0
    for (let total of carrito) {
        
        precioFinal += parseInt(total)
    }
    let h2 = document.createElement("h2")
    h2.innerHTML = precioFinal
    let padre = document.getElementById("mostrar")
    padre.appendChild(h2)
    localStorage.setItem("total", precioFinal)
}



let objeto = [
                {nombre: "Alaska", id: 0, precio: 2000},
                {nombre: "Tokyo", id: 1, precio: 3500}]

localStorage.setItem("productos", JSON.stringify(objeto))


let alaska = document.getElementById("alaska")
let tokyo = document.getElementById("tokyo")
let calcular = document.getElementById("precio")
let limpiar = document.getElementById("limpiar")

alaska.addEventListener("click", agregar0)
tokyo.addEventListener("click", agregar1)
limpiar.addEventListener("click", borrar)


calcular.addEventListener("click", mostrarTotal)

// Utilizamos una API para generar chistes aleatorios

function pedirChiste() {
    fetch(`https://v2.jokeapi.dev/joke/Programming`)
        .then((resp) => resp.json())
        .then((data) => {
            if (data.type == "twopart") {
                Toastify({
                    text: `${data.setup}
                        ${data.delivery}`,
                    gravity: "bottom",
                    position: "center",
                    duration: 5000
                }).showToast()
            } else {
                Toastify({
                    text: `${data.joke}`,
                    gravity: "bottom",
                    position: "center",
                    duration: 7000
                }).showToast()
            }
        })
        .catch(() => {
            Toastify({
                text: `Ocurrio un error`,
                gravity: "bottom",
                position: "center",
                duration: 2000
            }).showToast()
        })
        .finally(() => {
            Toastify({
                text: `Chistes en Inglés!`,
                gravity: "bottom",
                position: "center",
                duration: 2000,
                style: {
                    background: `#1f2029`
                }
                
            }).showToast()
        })
}