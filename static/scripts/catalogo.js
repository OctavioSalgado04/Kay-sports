// Lista de productos
const productos = [
  { nombre: "Shorts de Yoga", precio: 480, imagen: "../photos/licras short.jpeg", tallas: ["S", "M", "L"] },
  { nombre: "Mono deportivo acanalado", precio: 320, imagen: "../photos/conjunto negro.jpeg", tallas: ["S", "M", "L"] },
  { nombre: "Sujetador Deportivo", precio: 250, imagen: "../photos/tops.jpeg", tallas: ["S", "M", "L"] },
  { nombre: "conjunto cafe", precio: 250, imagen: "../photos/conjunto cafe.jpeg", tallas: ["S", "M", "L"] },
  { nombre: "conjunto negro", precio: 250, imagen: "../photos/conjunto negro.jpeg", tallas: ["S", "M", "L"] },
  { nombre: "conjunto cafe apretado", precio: 300, imagen: "../photos/conjunto cafe1.jpeg", tallas: ["S", "M", "L"] },
  { nombre: "conjunto negro apretado", precio: 300, imagen: "../photos/conjunto negro1.jpeg", tallas: ["S", "M", "L"] },
  { nombre: "camisa para hombre", precio: 200, imagen: "../photos/camisas hombre.jpeg", tallas: ["S", "M", "L"] },

  // Agrega más productos aquí
];

// Mostrar productos en el catálogo
const contenedor = document.getElementById("catalogo-container");

productos.forEach((prod, i) => {
  const col = document.createElement("div");
  col.className = "col-md-4 mb-4";

  col.innerHTML = `
    <div class="card h-100">
      <img src="${prod.imagen}" class="card-img-top" alt="${prod.nombre}">
      <div class="card-body">
        <h5 class="card-title">${prod.nombre}</h5>
        <p class="card-text">Precio: C$${prod.precio}</p>
        <label for="talla-${i}">Talla:</label>
        <select id="talla-${i}" class="form-select mb-2">
          ${prod.tallas.map(t => `<option value="${t}">${t}</option>`).join("")}
        </select>
        <button class="btn btn-primary w-100" onclick="agregarAlCarrito('${prod.nombre}', ${prod.precio}, document.getElementById('talla-${i}').value)">Agregar al carrito</button>
      </div>
    </div>
  `;
  
  contenedor.appendChild(col);
});

// Función para agregar al carrito con localStorage
function agregarAlCarrito(nombre, precio, talla) {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  const index = carrito.findIndex(item => item.nombre === nombre && item.talla === talla);

  if (index !== -1) {
    carrito[index].cantidad += 1;
  } else {
    carrito.push({ nombre, precio, talla, cantidad: 1 });
  }

  localStorage.setItem("carrito", JSON.stringify(carrito));
  alert("Producto añadido al carrito");
}
