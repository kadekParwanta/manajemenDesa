module.exports = function (app)
{
  var Bidang = app.models.Bidang;
  var WaktuPelaksanaan = app.models.WaktuPelaksanaan;
  var PolaPelaksanaan = app.models.PolaPelaksanaan;

  Bidang.find(function(err,bidang){
      if(bidang.length == 0) {
          Bidang.create([
              {No:1, Nama:'Penyelenggaraan Pemerintahan Desa'},
              {No:2, Nama:'Pembangunan Desa'},
              {No:3, Nama:'Pembinaan Kemasyarakatan'},
              {No:4, Nama:'Pemberdayaan Masyarakat'},
          ])
      }
  })

  WaktuPelaksanaan.find(function(err, waktuPelaksanaan){
      if(waktuPelaksanaan.length == 0) {
          WaktuPelaksanaan.create([
              {Nama:'Tahun 1'},
              {Nama:'Tahun 2'},
              {Nama:'Tahun 3'},
              {Nama:'Tahun 4'},
          ])
      }
  })

  PolaPelaksanaan.find(function(err, polaPelaksanaan){
      if(polaPelaksanaan.length == 0) {
          PolaPelaksanaan.create([
              {Nama:'Swakelola'},
              {Nama:'Kerjasama Antar Desa'},
              {Nama:'Kerjasama Pihak Ketiga'}
          ])
      }
  })
};
