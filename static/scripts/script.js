let carrito = [];

function agregarAlCarrito(producto) {
  carrito.push(producto);
  mostrarCarrito();
}

function mostrarCarrito() {
  const lista = document.getElementById("lista-carrito");
  lista.innerHTML = "";
  carrito.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = item + " ";
    const btn = document.createElement("button");
    btn.textContent = "Eliminar";
    btn.onclick = () => eliminarDelCarrito(index);
    li.appendChild(btn);
    lista.appendChild(li);
  });
}

function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  mostrarCarrito();
}

function vaciarCarrito() {
  carrito = [];
  mostrarCarrito();
}
