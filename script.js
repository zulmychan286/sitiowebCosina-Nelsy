
const capturaInput = document.getElementById('captura');
const preview = document.getElementById('preview');

capturaInput.addEventListener('change', function () {
  const file = this.files[0];
  if (file && file.type.startsWith('image/')) {
    const reader = new FileReader();
    reader.onload = function (e) {
      preview.innerHTML = `<img src="${e.target.result}" alt="Captura de comprobante" />`;
    };
    reader.readAsDataURL(file);
  }
});

function enviarWhatsApp() {
  const nombre = document.getElementById('nombre').value.trim();
  const apellido = document.getElementById('apellido').value.trim();
  const direccion = document.getElementById('direccion').value.trim();
  const referencia = document.getElementById('referencia').value.trim();

  if (!nombre || !apellido || !direccion || !referencia) {
    alert("Por favor completa todos los campos.");
    return;
  }

  const mensaje = `Hola, soy ${nombre} ${apellido}%0A📍 Dirección: ${direccion}%0A🗺️ Referencia: ${referencia}%0A✅ He realizado un depósito a la cuenta 4027665843682825.`;

  const telefono = "9992236981";
  const url = `https://wa.me/52${telefono}?text=${encodeURIComponent(mensaje)}`;

  window.open(url, "_blank");
}
