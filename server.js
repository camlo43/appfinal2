const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Sirve la carpeta "public" como contenido estático
app.use(express.static('public'));

// Ruta principal (opcional, por si quieres redirigir)
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Arranca el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
