//importamos mongo en nuestro projecto
var mongo = require('mongodb');
var Cliente = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/"

// Cliente.connect(url, (err, db) => {
//   if(err) throw err
//   console.log("Base de datos creada")
//   db.close()
// })

Cliente.connect(url, (err, db) => {
  if(err) throw err
  var dbo = db.db('mydb')
  dbo.createCollection('clientes', (err, res) => {
    if(err) throw err
    console.log("Coleccion creada")
    db.close()
  })
})

Cliente.connect(url, (err, db) => {
  if(err) throw err
  var dbo = db.db('mydb')
  dbo.createCollection('clientes', (err, res) => {
    if(err) throw err
    console.log("Coleccion creada")
    db.close()
  })
})


