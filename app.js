const express = require('express');
const app = express();
const port = 8080;

const server = app.listen(8000, function(){
    console.log('Listening on port ' + port);
});

// GET
app.get("/biodata", (req, res) => {
    const nama = req.query.nama;
    const tempatLahir = req.query.tempatLahir;
    const tanggalLahir = req.query.tanggalLahir;
    const alamat = req.query.alamat;

    res.send({
        'nama': nama,
        'tempatLahir': tempatLahir,
        'tanggalLahir': tanggalLahir,
        'alamat': alamat
    });
});
  
// POST
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  
  app.post("/api/users", (req, res) => {
    const nama = req.body.nama;
    const tempatLahir = req.body.tempat;
    const tanggalLahir = req.body.tanggal;
    const alamat = req.body.alamat;
  
    res.send({
      'nama': nama,
      'tempat': tempatLahir,
      'tanggal': tanggalLahir,
      'alamat': alamat,
    });
  });