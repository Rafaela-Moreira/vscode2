var express = require("express");
var app = express();
var { usuario } = require("./models");

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}))

app.get("/", async function(req, res){
  var usuarios = await usuario.findAll();
  res.json(usuarios);
});

app.listen(3000, function() {
  console.log(
    "O servidor funciona");
});

app.post("/", async function(req, res){
var resultado = await usuario.create(req.body);
  res.json(resultado);
});

app.put("/:id", async function(req, res){
var resultado = await usuario.update(
  {
    nome: req.body.nome,
  },
  {
    where: {
      id: req.params.id,
    },
  }
);

res.json(resultado);
});

app.delete("/:id", async function(req, res){
var resultado = await usuario.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.json(resultado);
});












