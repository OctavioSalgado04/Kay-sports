  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  const lista = document.getElementById("lista-carrito");
  const mensajeVacio = document.getElementById("mensaje-vacio");

  function renderizarCarrito() {
    lista.innerHTML = "";

    if (carrito.length === 0) {
      mensajeVacio.style.display = "block";
      document.getElementById("btn-vaciar")?.remove();
      return;
    }

    mensajeVacio.style.display = "none";

    carrito.forEach((item, index) => {
      const li = document.createElement("li");
      li.className = "list-group-item d-flex justify-content-between align-items-center";

      const total = item.precio * item.cantidad;

      li.innerHTML = `
        <div>
          <strong>${item.nombre}</strong><br>
          Talla: ${item.talla}<br>
          Cantidad: ${item.cantidad}<br>
          Total: C$${total}
        </div>
      `;

      const btn = document.createElement("button");
      btn.textContent = "Eliminar";
      btn.className = "btn btn-sm btn-danger";
      btn.onclick = () => {
        carrito.splice(index, 1);
        localStorage.setItem("carrito", JSON.stringify(carrito));
        renderizarCarrito();
      };

      li.appendChild(btn);
      lista.appendChild(li);
    });

    // Botón para vaciar carrito
    if (!document.getElementById("btn-vaciar")) {
      const btnVaciar = document.createElement("button");
      btnVaciar.id = "btn-vaciar";
      btnVaciar.textContent = "Vaciar carrito";
      btnVaciar.className = "btn btn-warning mt-3";
      btnVaciar.onclick = () => {
        localStorage.removeItem("carrito");
        location.reload();
      };
      lista.parentNode.appendChild(btnVaciar);
    }
  }

  renderizarCarrito();
