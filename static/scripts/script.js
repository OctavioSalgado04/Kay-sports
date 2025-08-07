let carrito= []
function agregarAlCarrito(nombre, precio, talla) {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  // Buscar si ya existe el producto con misma talla
  const index = carrito.findIndex(item => item.nombre === nombre && item.talla === talla);

  if (index !== -1) {
    carrito[index].cantidad += 1;
  } else {
    carrito.push({ nombre, precio, talla, cantidad: 1 });
  }

  localStorage.setItem("carrito", JSON.stringify(carrito));
  alert("Producto añadido al carrito");
}
