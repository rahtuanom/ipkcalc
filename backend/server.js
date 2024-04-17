// backend/server.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import modul cors
const mahasiswaRoutes = require('./routes/mahasiswa');

const app = express();
const PORT = MYSQLPORT || 51651;

// app.use(cors()); 
app.use(cors({
  origin: 'https://putrinita.github.io/be-ipkcalc/' // Atur domain atau port yang diizinkan
}));
app.use(bodyParser.json());
app.use('/mahasiswa', mahasiswaRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
