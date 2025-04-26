const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Sirve la carpeta "public" como contenido estático
app.use(express.static('public'));

// Ruta principal
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Nueva ruta para simular conexión a la base de datos
app.get('/conexion-bd', (req, res) => {
  // Aquí normalmente iría la lógica real de conexión.
  res.json({ message: "Conexión exitosa a la base de datos ✅" });
});

// Arranca el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
