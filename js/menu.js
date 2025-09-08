const productos = [
  // camisa 

  {
    categoria: 'camisa',
    nombre: 'Camisa Negra Mujer',
    precio: 52000,
    descripcion: 'Camisa elegante de color negro para ocasiones especiales.',
    imagen: 'img/productos/camisa-beige.jpeg'
  },

  {
    categoria: 'camisa-lineas',
    nombre: 'Camisa Negra Mujer',
    precio: 52000,
    descripcion: 'Camisa elegante de color negro para ocasiones especiales.',
    imagen: 'img/productos/camisa-blanca-lineas-negras.jpeg'
  },
  
  {
    categoria: 'camisa',
    nombre: 'Camisa Negra Mujer',
    precio: 52000,
    descripcion: 'Camisa elegante de color negro para ocasiones especiales.',
    imagen: 'img/productos/camisa-blanca.jpeg'
  },

  {
    categoria: 'camisa-cuadros',
    nombre: 'Camisa Negra Mujer',
    precio: 52000,
    descripcion: 'Camisa elegante de color negro para ocasiones especiales.',
    imagen: 'img/productos/camisa-cafe.jpeg'
  },

  {
    categoria: 'camisa',
    nombre: 'Camisa Negra Mujer',
    precio: 52000,
    descripcion: 'Camisa elegante de color negro para ocasiones especiales.',
    imagen: 'img/productos/camisa-verde.jpeg'
  },

  // {
  //   categoria: 'camisa',
  //   nombre: 'Blusa Blanca Mujer',
  //   precio: 65000,
  //   descripcion: 'Blusa blanca ligera y elegante para cualquier ocasión.',
  //   imagen: 'img/lineas-negras-camisas.webp'
  // },

  // {
  //   categoria: 'chaqueta',
  //   nombre: 'Chaqueta de Cuero',
  //   precio: 120000,
  //   descripcion: 'Chaqueta clásica de cuero con estilo moderno.',
  //   imagen: 'img/chaqueta_cuero.webp'
  // },

  // {
  //   categoria: 'chaqueta',
  //   nombre: 'Chaqueta a Cuadros',
  //   precio: 98000,
  //   descripcion: 'Chaqueta a cuadros perfecta para un look urbano.',
  //   imagen: 'img/chaqueta_cuadros.webp'
  // },

  // {
  //   categoria: 'chaqueta',
  //   nombre: 'Chaqueta Verde Hombre',
  //   precio: 102000,
  //   descripcion: 'Chaqueta verde moderna y cómoda para uso diario.',
  //   imagen: 'img/verde_hombre.webp'
  // },
  
];


// =============================
// Productos
// =============================
let productosFiltrados = [...productos];

// Carrito: clave = índice del producto, valor = { cantidad, talla }
let carrito = {};

// =============================
// Formateador a pesos colombianos
// =============================
const formatoCOP = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
  minimumFractionDigits: 0
});

// =============================
// Restaurar datos guardados
// =============================
const carritoGuardado = sessionStorage.getItem('carrito');
if (carritoGuardado) {
  carrito = JSON.parse(carritoGuardado);
}

const pedidoGuardado = sessionStorage.getItem('pedido');
if (pedidoGuardado) {
  const pedido = JSON.parse(pedidoGuardado);
  pedido.resumen.forEach(item => {
    const index = productos.findIndex(p => p.nombre === item.nombre);
    if (index !== -1) {
      carrito[index] = { cantidad: item.cantidad, talla: item.talla || "M" };
    }
  });
}

// =============================
// Renderizado del carrito
// =============================
function renderCarrito() {
  const contenedor = document.querySelector('.cart-items');
  contenedor.innerHTML = '';

  productosFiltrados.forEach((producto) => {
    const index = productos.indexOf(producto);
    const cantidad = carrito[index]?.cantidad || 0;
    const talla = carrito[index]?.talla || "M";

    const item = document.createElement('div');
    item.className = 'cart-item';
    item.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}" />
      <div class="info">
        <h3>${producto.nombre}</h3>
        <p>${producto.descripcion}</p>

        <!-- Selector de tallas -->
        <label class="label-talla" for="talla_${index}">Talla:</label>
        <select id="talla_${index}" class="talla-select" data-id="${index}">
          <option value="S" ${talla === "S" ? "selected" : ""}>S</option>
          <option value="M" ${talla === "M" ? "selected" : ""}>M</option>
          <option value="L" ${talla === "L" ? "selected" : ""}>L</option>
          <option value="XL" ${talla === "XL" ? "selected" : ""}>XL</option>
        </select>

        <div class="bottom">
          <span>${formatoCOP.format(producto.precio)}</span>
          <div class="qty">
            <button class="menos" data-id="${index}">−</button>
            <span id="cant_${index}">${cantidad}</span>
            <button class="mas" data-id="${index}">+</button>
          </div>
        </div>
      </div>
    `;
    contenedor.appendChild(item);
  });

  // Asignar eventos a los botones
  document.querySelectorAll('.mas').forEach(btn => {
    btn.addEventListener('click', () => cambiarCantidad(parseInt(btn.dataset.id), 1));
  });

  document.querySelectorAll('.menos').forEach(btn => {
    btn.addEventListener('click', () => cambiarCantidad(parseInt(btn.dataset.id), -1));
  });

  // Asignar eventos a los selects de talla
  document.querySelectorAll('.talla-select').forEach(select => {
    select.addEventListener('change', () => {
      const index = parseInt(select.dataset.id, 10);
      if (!carrito[index]) carrito[index] = { cantidad: 0, talla: "M" };
      carrito[index].talla = select.value;
      actualizarTotal();
    });
  });

  actualizarTotal();
}

// =============================
// Cambiar cantidad
// =============================
function cambiarCantidad(index, delta) {
  if (!carrito[index]) carrito[index] = { cantidad: 0, talla: "M" };

  carrito[index].cantidad = Math.max(0, (carrito[index].cantidad || 0) + delta);

  document.getElementById(`cant_${index}`).textContent = carrito[index].cantidad;

  actualizarTotal();
}

// =============================
// Calcular y actualizar total
// =============================
function actualizarTotal() {
  let total = 0;
  for (const i in carrito) {
    const index = parseInt(i, 10);
    const item = carrito[i];
    if (productos[index] && item.cantidad > 0) {
      total += productos[index].precio * item.cantidad;
    }
  }

  const totalTexto = document.getElementById('total-price');
  if (totalTexto) {
    totalTexto.textContent = formatoCOP.format(total);
  }

  // Guardar carrito en sessionStorage
  sessionStorage.setItem('carrito', JSON.stringify(carrito));
}

// =============================
// Filtro de categorías
// =============================
function filtrarBotonCategoria(boton, categoria) {
  document.querySelectorAll('.categoria-btn').forEach(btn => btn.classList.remove('active'));
  boton.classList.add('active');
  localStorage.setItem('categoriaSeleccionada', categoria);
  filtrarCategoria(categoria);
}

function filtrarCategoria(categoria) {
  productosFiltrados = productos.filter(producto => producto.categoria === categoria);
  renderCarrito();
}

// =============================
// Evento de Realizar Pedido
// =============================
document.querySelector('.pay').addEventListener('click', () => {
  const resumen = [];
  let total = 0;

  for (const i in carrito) {
    const index = parseInt(i, 10);
    const producto = productos[index];
    const item = carrito[i];

    if (producto && item.cantidad > 0) {
      const subtotal = producto.precio * item.cantidad;

      resumen.push({
        nombre: producto.nombre,
        cantidad: item.cantidad,
        talla: item.talla,   // 👈 ahora incluimos la talla
        subtotal
      });

      total += subtotal;
    }
  }

  const pedido = { resumen, total };

  // Guardar en localStorage y sessionStorage
  localStorage.setItem('pedido', JSON.stringify(pedido));
  sessionStorage.setItem('pedido', JSON.stringify(pedido));

  // No limpiamos el carrito para que siga al volver atrás
  window.location.href = 'customer.html';
});

// =============================
// Inicialización al cargar
// =============================
const categoriaGuardada = localStorage.getItem('categoriaSeleccionada');

if (categoriaGuardada) {
  const boton = [...document.querySelectorAll('.categoria-btn')]
    .find(btn => btn.getAttribute('onclick').includes(categoriaGuardada));

  if (boton) {
    boton.classList.add('active');
    filtrarCategoria(categoriaGuardada);
  } else {
    productosFiltrados = [...productos];
    renderCarrito();
  }
} else {
  productosFiltrados = [...productos];
  renderCarrito();
}
