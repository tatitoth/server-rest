require('./config/config');
const express = require("express");
const app = express();

const bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}));

// parse application/json
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/profile", function (req, res) {
  res.send("Você está vendo o profile");
});

app.get("/usuarios", function (req, res) {
  res.send("get usuários");
});

app.post("/usuarios", function (req, res) {
  let body = req.body;
  res.json({
    teste: body.banana
  });
});

app.post("/login", function (req, res) {
  let body = req.body;

  let email = body.email;
  let password = body.password;
  var message = "";

  if (email == "tatiane.toth@gmail.com" && password == "12345") {
    res.status(200).json({
      msg: "Usuário logado com sucesso"
    });
  } else {
    res.status(401).json({
      msg: "Sem acesso ao sistema"
    });
  }
});

app.put("/usuarios/:id", function (req, res) {
  let id = req.params.id;

  res.json({
    id
  });
});

app.delete("/usuarios", function (req, res) {
  res.send("delete usuários");
});

app.listen(process.env.PORT, () => {
  console.log(`escutando porta ${process.env.PORT}`);
});