console.log('La app está corriendo correctamente 🚀');

document.getElementById('btnConectar').addEventListener('click', async () => {
  try {
    const respuesta = await fetch('/conexion-bd');
    const datos = await respuesta.json();
    document.getElementById('resultado').textContent = datos.message;
  } catch (error) {
    document.getElementById('resultado').textContent = 'Error al conectar a la base de datos ❌';
    console.error('Error:', error);
  }
});
