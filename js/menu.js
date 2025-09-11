const productos = [
  // camisa 
  {
    categoria: 'camisa',
    nombre: 'Camisa Beige Niño',
    precio: 52000,
    precioMayorista: 40000, // 👈 agregado
    descripcion: 'Camisa casual de color beige para niño, ideal para uso diario o eventos informales.',
    imagen: 'img/productos/camisa-beige.jpeg'
  },

  {
    categoria: 'camisa-lineas',
    nombre: 'Camisa Blanca con Líneas Negras Niño',
    precio: 52000,
    precioMayorista: 40000, // 👈 agregado
    descripcion: 'Camisa blanca con estampado de líneas negras para niño.',
    imagen: 'img/productos/camisa-blanca-lineas-negras.jpeg'
  },

  {
    categoria: 'camisa',
    nombre: 'Camisa Blanca Niño',
    precio: 52000,
    precioMayorista: 40000, // 👈 agregado
    descripcion: 'Camisa elegante de color blanco para niño, ideal para ocasiones casuales.',
    imagen: 'img/productos/camisa-blanca.jpeg'
  },

  {
    categoria: 'camisa-cuadros',
    nombre: 'Camisa Café a Cuadros Niño',
    precio: 52000,
    precioMayorista: 40000, // 👈 agregado
    descripcion: 'Camisa a cuadros en tonos café para niño, perfecta para un look relajado.',
    imagen: 'img/productos/camisa-cafe.jpeg'
  },

  {
    categoria: 'camisa-cuadros',
    nombre: 'Camisa Verde Niño',
    precio: 52000,
    precioMayorista: 40000, // 👈 agregado
    descripcion: 'Camisa de color verde para niño, cómoda y versátil para cualquier ocasión.',
    imagen: 'img/productos/camisa-verde.jpeg'
  },

  {
    categoria: 'camisa',
    nombre: 'Camisa Verde Niño',
    precio: 52000,
    precioMayorista: 40000, // 👈 agregado
    descripcion: 'Camisa de color verde para niño, cómoda y versátil para cualquier ocasión.',
    imagen: 'img/productos/camisa-verde.jpeg'
  }


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

// Carrito: clave = índice del producto, valor = { tallas: { "M": 5, "L": 2, ... } }
let carrito = {};
let productoSeleccionado = null; // índice del producto actual al abrir modal

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

// =============================
// Validar si aplica mayorista
// =============================
function aplicaMayorista() {
  let totalProductos = 0;
  for (const i in carrito) {
    const tallas = carrito[i]?.tallas || {};
    totalProductos += Object.values(tallas).reduce((a, b) => a + b, 0);
  }
  return totalProductos >= 5;
}

// =============================
// Renderizado del carrito
// =============================
function renderCarrito() {
  const contenedor = document.querySelector('.cart-items');
  contenedor.innerHTML = '';

  const esMayorista = aplicaMayorista();

  productosFiltrados.forEach((producto) => {
    const index = productos.indexOf(producto);

    const tallas = carrito[index]?.tallas || {};
    const totalCantidad = Object.values(tallas).reduce((a, b) => a + b, 0);

    // Mostrar tallas seleccionadas en texto
    const tallasTexto = Object.entries(tallas)
      .map(([t, c]) => `${c} ${t}`)
      .join(", ") || "Ninguna";

    // precio según condición
    const precioUnitario = esMayorista && producto.precioMayorista ? producto.precioMayorista : producto.precio;

    const item = document.createElement('div');
    item.className = 'cart-item';
    item.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}" />
      <div class="info">
        <h3>${producto.nombre}</h3>
        <p>${producto.descripcion}</p>

        <button class="btn-talla" data-id="${index}">Escoger tallas</button>
        <p class="talla-seleccionada">Tallas: ${tallasTexto}</p>

        <div class="bottom">
          <span>${formatoCOP.format(precioUnitario)}</span>
          <div class="qty">
            <span>Total: ${totalCantidad}</span>
          </div>
        </div>
      </div>
    `;
    contenedor.appendChild(item);
  });

  // Evento para abrir modal
  document.querySelectorAll('.btn-talla').forEach(btn => {
    btn.addEventListener('click', () => {
      const index = parseInt(btn.dataset.id, 10);
      cargarTallasEnModal(index);
      modalOverlay.style.display = 'flex';
    });
  });

  actualizarTotal();
}

// =============================
// Calcular y actualizar total
// =============================
function actualizarTotal() {
  let total = 0;
  const esMayorista = aplicaMayorista();

  for (const i in carrito) {
    const index = parseInt(i, 10);
    const producto = productos[index];
    const tallas = carrito[i].tallas;

    const precioUnitario = esMayorista && producto.precioMayorista ? producto.precioMayorista : producto.precio;

    for (const t in tallas) {
      const cantidad = tallas[t];
      total += precioUnitario * cantidad;
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
// Modal de Tallas (único, compartido)
// =============================
const modalOverlay = document.getElementById('modalOverlay');
const closeModal = document.getElementById('closeModal');

closeModal.addEventListener('click', () => {
  modalOverlay.style.display = 'none';
});
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) {
    modalOverlay.style.display = 'none';
  }
});

// Cargar tallas en modal (rellenar cantidades guardadas y asignar eventos)
function cargarTallasEnModal(index) {
  productoSeleccionado = index; // guardamos el producto activo
  if (!carrito[index]) carrito[index] = { tallas: {} };

  document.querySelectorAll('.talla-control').forEach(control => {
    const talla = control.dataset.talla;
    const cantidad = carrito[index].tallas[talla] || 0;
    control.querySelector('.cantidad-talla').textContent = cantidad;

    const btnMas = control.querySelector('.mas-talla');
    const btnMenos = control.querySelector('.menos-talla');

    // reasignar cada vez que se abre el modal
    btnMas.onclick = () => {
      carrito[index].tallas[talla] = (carrito[index].tallas[talla] || 0) + 1;
      control.querySelector('.cantidad-talla').textContent = carrito[index].tallas[talla];
      actualizarTotal();
      renderCarrito();
    };

    btnMenos.onclick = () => {
      carrito[index].tallas[talla] = Math.max(0, (carrito[index].tallas[talla] || 0) - 1);
      control.querySelector('.cantidad-talla').textContent = carrito[index].tallas[talla];
      actualizarTotal();
      renderCarrito();
    };
  });
}

// =============================
// Evento de Realizar Pedido
// =============================
document.querySelector('.pay').addEventListener('click', () => {
  const resumen = [];
  let total = 0;
  const esMayorista = aplicaMayorista();

  for (const i in carrito) {
    const index = parseInt(i, 10);
    const producto = productos[index];
    const tallas = carrito[i].tallas;

    const precioUnitario = esMayorista && producto.precioMayorista ? producto.precioMayorista : producto.precio;

    for (const t in tallas) {
      const cantidad = tallas[t];
      if (cantidad > 0) {
        const subtotal = precioUnitario * cantidad;
        resumen.push({
          nombre: producto.nombre,
          talla: t,
          cantidad,
          subtotal
        });
        total += subtotal;
      }
    }
  }

  const pedido = { resumen, total };

  localStorage.setItem('pedido', JSON.stringify(pedido));
  sessionStorage.setItem('pedido', JSON.stringify(pedido));

  window.location.href = 'customer.html';
});

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


