// offers.js (mínimo)

// Número de WhatsApp con indicativo de Colombia (+57)
const WHATSAPP_NUMBER = '573001706295';

function abrirWhatsApp(mensaje) {
  const url = new URL('https://api.whatsapp.com/send');
  url.searchParams.set('phone', WHATSAPP_NUMBER);
  url.searchParams.set('text', mensaje);
  window.location.href = url.toString();
}

// Delegación: cualquier botón con .more-info dispara el WhatsApp
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.more-info');
  if (!btn) return;

  const card = btn.closest('.offer-card');
  const nombre =
    btn.dataset.nombre ||
    card?.querySelector('h3')?.textContent?.trim() ||
    'la promoción';

  const mensaje = `Hola 👋, quiero saber más información sobre el descuento "${nombre}" (2x1 en camisas).`;
  abrirWhatsApp(mensaje);
});
