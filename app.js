// ==========> requerimos los módulos para trabajar
const path = require("path");
const express = require("express");
const fs = require("fs");
const app = express();

// ==========> creamos la ruta a los archivos estáticos
const ruta = path.join(__dirname, "public");
const staticFiles = express.static(ruta);

app.use(staticFiles);

app.get("/", (req, res) => {
  let ruta = path.join(__dirname, "./views/index.html");
  res.sendFile(ruta);
});

app.get("/register", (req, res) =>{
  res.sendFile(__dirname + "/views/register.html");
});

app.get("/login", (req, res) =>{
  res.sendFile(__dirname + "/views/login.html");
});


// ==========> creamos el servidor y le pasamos un mensaje para verificar su funcionalidad
app.listen(3000, () => {
  console.log("El servidor está funcionando");
});