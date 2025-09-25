const productos = [
  // camisa jean
  {
    categoria: 'camisa jean',
    nombre: 'Camisa Jean Niño (1)',
    precio: 58000 ,
    precioMayorista: 30000, // 👈 agregado
    descripcion: 'Camisa de jean casual para niño, ideal para uso diario o eventos informales.',
    imagen: 'img/productos/camisa-jean/camisa-jean-1.webp'
  },

  {
    categoria: 'camisa jean (2)',
    nombre: 'Camisa Jean Niño',
    precio: 58000 ,
    precioMayorista: 30000, // 👈 agregado
    descripcion: 'Camisa de jean casual para niño, ideal para uso diario o eventos informales.',
    imagen: 'img/productos/camisa-jean/camisa-jean-2.webp'
  },

  {
    categoria: 'camisa jean (3)',
    nombre: 'Camisa Jean Niño',
    precio: 58000 ,
    precioMayorista: 30000, // 👈 agregado
    descripcion: 'Camisa de jean casual para niño, ideal para uso diario o eventos informales.',
    imagen: 'img/productos/camisa-jean/camisa-jean-3.webp'
  },

  {
    categoria: 'camisa jean (4)',
    nombre: 'Camisa Jean Niño',
    precio: 58000 ,
    precioMayorista: 30000, // 👈 agregado
    descripcion: 'Camisa de jean casual para niño, ideal para uso diario o eventos informales.',
    imagen: 'img/productos/camisa-jean/camisa-jean-4.webp'
  },

  //jeans

  {
    categoria: 'jean',
    nombre: 'Cargo para niño (1)',
    precio: 62000 ,
    precioMayorista: 40000, // 👈 agregado
    descripcion: 'Cargo casual para niño, ideal para uso diario o eventos informales.',
    imagen: 'img/productos/jeans/jean-1.webp'
  },

  {
    categoria: 'jean',
    nombre: 'Cargo para niño (2)',
    precio: 62000 ,
    precioMayorista: 40000, // 👈 agregado
    descripcion: 'Cargo casual para niño, ideal para uso diario o eventos informales.',
    imagen: 'img/productos/jeans/jean-2.webp'
  },

  {
    categoria: 'jean',
    nombre: 'Jean para niño (1)',
    precio: 55000 ,
    precioMayorista: 38000, // 👈 agregado
    descripcion: 'Jean casual para niño, ideal para uso diario o eventos informales.',
    imagen: 'img/productos/jeans/jean-3.webp'
  },

  {
    categoria: 'jean',
    nombre: 'Jean para niño (2)',
    precio: 55000 ,
    precioMayorista: 38000, // 👈 agregado
    descripcion: 'Jean casual para niño, ideal para uso diario o eventos informales.',
    imagen: 'img/productos/jeans/jean-4.webp'
  },

  {
    categoria: 'jean',
    nombre: 'Jean para niño (3)',
    precio: 55000 ,
    precioMayorista: 38000, // 👈 agregado
    descripcion: 'Jean casual para niño, ideal para uso diario o eventos informales.',
    imagen: 'img/productos/jeans/jean-5.webp'
  },

  {
    categoria: 'jean',
    nombre: 'Jean para niño (4)',
    precio: 55000 ,
    precioMayorista: 38000, // 👈 agregado
    descripcion: 'Jean casual para niño, ideal para uso diario o eventos informales.',
    imagen: 'img/productos/jeans/jean-6.webp'
  },

  {
    categoria: 'jean',
    nombre: 'Cargo para niño (3)',
    precio: 62000 ,
    precioMayorista: 40000, // 👈 agregado
    descripcion: 'Cargo casual para niño, ideal para uso diario o eventos informales.',
    imagen: 'img/productos/jeans/jean-7.webp'
  },
   
  //Leñador

  {
    categoria: 'leñador',
    nombre: 'Camisa leñador para niño (1)',
    precio: 55000,
    precioMayorista: 26000, // 👈 agregado
    descripcion: 'Camisa leñador para niño, ideal para uso diario o eventos informales.',
    imagen: 'img/productos/leñador/leñador-1.webp'
  },

  {
    categoria: 'leñador',
    nombre: 'Camisa leñador para niño (2)',
    precio: 55000,
    precioMayorista: 26000, // 👈 agregado
    descripcion: 'Camisa leñador para niño, ideal para uso diario o eventos informales.',
    imagen: 'img/productos/leñador/leñador-2.webp'
  },

  {
    categoria: 'leñador',
    nombre: 'Camisa leñador para niño (3)',
    precio: 55000,
    precioMayorista: 26000, // 👈 agregado
    descripcion: 'Camisa leñador para niño, ideal para uso diario o eventos informales.',
    imagen: 'img/productos/leñador/leñador-3.webp'
  },

  {
    categoria: 'leñador',
    nombre: 'Camisa leñador para niño (4)',
    precio: 55000,
    precioMayorista: 26000, // 👈 agregado
    descripcion: 'Camisa leñador para niño, ideal para uso diario o eventos informales.',
    imagen: 'img/productos/leñador/leñador-4.webp'
  },

  {
    categoria: 'leñador',
    nombre: 'Camisa leñador para niño (5)',
    precio: 55000,
    precioMayorista: 26000, // 👈 agregado
    descripcion: 'Camisa leñador para niño, ideal para uso diario o eventos informales.',
    imagen: 'img/productos/leñador/leñador-5.webp'
  },

  {
    categoria: 'leñador',
    nombre: 'Camisa leñador para niño (6)',
    precio: 55000,
    precioMayorista: 26000, // 👈 agregado
    descripcion: 'Camisa leñador para niño, ideal para uso diario o eventos informales.',
    imagen: 'img/productos/leñador/leñador-6.webp'
  },

  {
    categoria: 'leñador',
    nombre: 'Camisa leñador para niño (7)',
    precio: 55000,
    precioMayorista: 26000, // 👈 agregado
    descripcion: 'Camisa leñador para niño, ideal para uso diario o eventos informales.',
    imagen: 'img/productos/leñador/leñador-7.webp'
  },

  {
    categoria: 'leñador',
    nombre: 'Camisa leñador para niño (8)',
    precio: 55000,
    precioMayorista: 26000, // 👈 agregado
    descripcion: 'Camisa leñador para niño, ideal para uso diario o eventos informales.',
    imagen: 'img/productos/leñador/leñador-8.webp'
  },

  {
    categoria: 'leñador',
    nombre: 'Camisa leñador para niño (9)',
    precio: 55000,
    precioMayorista: 26000, // 👈 agregado
    descripcion: 'Camisa leñador para niño, ideal para uso diario o eventos informales.',
    imagen: 'img/productos/leñador/leñador-9.webp'
  },

  //Pana

  {
    categoria: 'pana',
    nombre: 'Camisa para niño (1)',
    precio: 58000,
    precioMayorista: 30000, // 👈 agregado
    descripcion: 'Camisa para niño, ideal para uso diario o eventos informales.',
    imagen: 'img/productos/pana/pana-1.webp'
  },

  {
    categoria: 'pana',
    nombre: 'Camisa para niño (2)',
    precio: 58000,
    precioMayorista: 30000, // 👈 agregado
    descripcion: 'Camisa para niño, ideal para uso diario o eventos informales.',
    imagen: 'img/productos/pana/pana-2.webp'
  },

  {
    categoria: 'pana',
    nombre: 'Camisa para niño (3)',
    precio: 58000,
    precioMayorista: 30000, // 👈 agregado
    descripcion: 'Camisa para niño, ideal para uso diario o eventos informales.',
    imagen: 'img/productos/pana/pana-3.webp'
  },

  {
    categoria: 'pana',
    nombre: 'Camisa para niño (4)',
    precio: 58000,
    precioMayorista: 30000, // 👈 agregado
    descripcion: 'Camisa para niño, ideal para uso diario o eventos informales.',
    imagen: 'img/productos/pana/pana-4.webp'
  },

  //unicolor

  {
    categoria: 'unicolor',
    nombre: 'Camisa unicolor para niño (1)',
    precio: 52000,
    precioMayorista: 25000, // 👈 agregado
    descripcion: 'Camisa unicolor para niño, ideal para uso diario o eventos informales.',
    imagen: 'img/productos/unicolor/unicolor-1.webp'
  },

  {
    categoria: 'unicolor',
    nombre: 'Camisa unicolor para niño (2)',
    precio: 52000,
    precioMayorista: 25000, // 👈 agregado
    descripcion: 'Camisa unicolor para niño, ideal para uso diario o eventos informales.',
    imagen: 'img/productos/unicolor/unicolor-2.webp'
  },

  {
    categoria: 'unicolor',
    nombre: 'Camisa unicolor para niño (3)',
    precio: 52000,
    precioMayorista: 25000, // 👈 agregado
    descripcion: 'Camisa unicolor para niño, ideal para uso diario o eventos informales.',
    imagen: 'img/productos/unicolor/unicolor-3.webp'
  },

  {
    categoria: 'unicolor',
    nombre: 'Camisa unicolor para niño (4)',
    precio: 52000,
    precioMayorista: 25000, // 👈 agregado
    descripcion: 'Camisa unicolor para niño, ideal para uso diario o eventos informales.',
    imagen: 'img/productos/unicolor/unicolor-4.webp'
  },

  //textura

  {
    categoria: 'textura',
    nombre: 'Camisa de textura para niño (1)',
    precio: 55000,
    precioMayorista: 25000, // 👈 agregado
    descripcion: 'Camisa de textura para niño, ideal para uso diario o eventos informales.',
    imagen: 'img/productos/textura/textura-1.webp'
  },

  {
    categoria: 'textura',
    nombre: 'Camisa de textura para niño (2)',
    precio: 55000,
    precioMayorista: 25000, // 👈 agregado
    descripcion: 'Camisa de textura para niño, ideal para uso diario o eventos informales.',
    imagen: 'img/productos/textura/textura-2.webp'
  },

  {
    categoria: 'textura',
    nombre: 'Camisa de textura para niño (3)',
    precio: 55000,
    precioMayorista: 25000, // 👈 agregado
    descripcion: 'Camisa de textura para niño, ideal para uso diario o eventos informales.',
    imagen: 'img/productos/textura/textura-3.webp'
  },

  {
    categoria: 'textura',
    nombre: 'Camisa de textura para niño (4)',
    precio: 55000,
    precioMayorista: 25000, // 👈 agregado
    descripcion: 'Camisa de textura para niño, ideal para uso diario o eventos informales.',
    imagen: 'img/productos/textura/textura-4.webp'
  },

  {
    categoria: 'textura',
    nombre: 'Camisa de textura para niño (5)',
    precio: 55000,
    precioMayorista: 25000, // 👈 agregado
    descripcion: 'Camisa de textura para niño, ideal para uso diario o eventos informales.',
    imagen: 'img/productos/textura/textura-5.webp'
  },

  {
    categoria: 'textura',
    nombre: 'Camisa de textura para niño (6)',
    precio: 55000,
    precioMayorista: 25000, // 👈 agregado
    descripcion: 'Camisa de textura para niño, ideal para uso diario o eventos informales.',
    imagen: 'img/productos/textura/textura-6.webp'
  },

  {
    categoria: 'textura',
    nombre: 'Camisa de textura para niño (7)',
    precio: 55000,
    precioMayorista: 25000, // 👈 agregado
    descripcion: 'Camisa de textura para niño, ideal para uso diario o eventos informales.',
    imagen: 'img/productos/textura/textura-7.webp'
  },

  {
    categoria: 'textura',
    nombre: 'Camisa de textura para niño (8)',
    precio: 55000,
    precioMayorista: 25000, // 👈 agregado
    descripcion: 'Camisa de textura para niño, ideal para uso diario o eventos informales.',
    imagen: 'img/productos/textura/textura-8.webp'
  },

  {
    categoria: 'textura',
    nombre: 'Camisa de textura para niño (9)',
    precio: 55000,
    precioMayorista: 25000, // 👈 agregado
    descripcion: 'Camisa de textura para niño, ideal para uso diario o eventos informales.',
    imagen: 'img/productos/textura/textura-9.webp'
  },

  {
    categoria: 'textura',
    nombre: 'Camisa de textura para niño (10)',
    precio: 55000,
    precioMayorista: 25000, // 👈 agregado
    descripcion: 'Camisa de textura para niño, ideal para uso diario o eventos informales.',
    imagen: 'img/productos/textura/textura-10.webp'
  },

  {
    categoria: 'textura',
    nombre: 'Camisa de textura para niño (11)',
    precio: 55000,
    precioMayorista: 25000, // 👈 agregado
    descripcion: 'Camisa de textura para niño, ideal para uso diario o eventos informales.',
    imagen: 'img/productos/textura/textura-11.webp'
  },

  {
    categoria: 'textura',
    nombre: 'Camisa de textura para niño (12)',
    precio: 55000,
    precioMayorista: 25000, // 👈 agregado
    descripcion: 'Camisa de textura para niño, ideal para uso diario o eventos informales.',
    imagen: 'img/productos/textura/textura-12.webp'
  },

  {
    categoria: 'textura',
    nombre: 'Camisa de textura para niño (13)',
    precio: 55000,
    precioMayorista: 25000, // 👈 agregado
    descripcion: 'Camisa de textura para niño, ideal para uso diario o eventos informales.',
    imagen: 'img/productos/textura/textura-13.webp'
  },

  {
    categoria: 'textura',
    nombre: 'Camisa de textura para niño (14)',
    precio: 55000,
    precioMayorista: 25000, // 👈 agregado
    descripcion: 'Camisa de textura para niño, ideal para uso diario o eventos informales.',
    imagen: 'img/productos/textura/textura-14.webp'
  },

  {
    categoria: 'textura',
    nombre: 'Camisa de textura para niño (15)',
    precio: 55000,
    precioMayorista: 25000, // 👈 agregado
    descripcion: 'Camisa de textura para niño, ideal para uso diario o eventos informales.',
    imagen: 'img/productos/textura/textura-15.webp'
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
// Validar si aplica mayorista por categoría
// =============================
function aplicaMayoristaPorCategoria(categoria) {
  let totalCategoria = 0;

  for (const i in carrito) {
    const index = parseInt(i, 10);
    const producto = productos[index];

    if (producto.categoria === categoria) {
      const tallas = carrito[i].tallas;
      totalCategoria += Object.values(tallas).reduce((a, b) => a + b, 0);
    }
  }

  return totalCategoria >= 6;
}

// =============================
// Renderizado del carrito
// =============================
function renderCarrito() {
  const contenedor = document.querySelector('.cart-items');
  contenedor.innerHTML = '';

  productosFiltrados.forEach((producto) => {
    const index = productos.indexOf(producto);

    const tallas = carrito[index]?.tallas || {};
    const totalCantidad = Object.values(tallas).reduce((a, b) => a + b, 0);

    // Mostrar tallas seleccionadas en texto
    const tallasTexto = Object.entries(tallas)
      .map(([t, c]) => `${c} ${t}`)
      .join(", ") || "Ninguna";

    // precio según condición
    const precioUnitario = aplicaMayoristaPorCategoria(producto.categoria) && producto.precioMayorista
      ? producto.precioMayorista
      : producto.precio;

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

  for (const i in carrito) {
    const index = parseInt(i, 10);
    const producto = productos[index];
    const tallas = carrito[i].tallas;

    const precioUnitario = aplicaMayoristaPorCategoria(producto.categoria) && producto.precioMayorista
      ? producto.precioMayorista
      : producto.precio;

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

  for (const i in carrito) {
    const index = parseInt(i, 10);
    const producto = productos[index];
    const tallas = carrito[i].tallas;

    const precioUnitario = aplicaMayoristaPorCategoria(producto.categoria) && producto.precioMayorista
      ? producto.precioMayorista
      : producto.precio;

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



