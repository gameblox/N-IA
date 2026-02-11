const express = require("express");
const app = express();
app.use(express.json());

app.post("/ia", (req, res) => {
  const mensaje = req.body.mensaje?.toLowerCase() || "";
  let respuesta = "No entiendo.";

  if (mensaje.includes("hola")) {
    respuesta = "Hola Josué 😎";
  }

  if (mensaje.includes("quien eres")) {
    respuesta = "Soy tu mega IA 🔥";
  }

  res.json({ respuesta });
});

app.get("/", (req, res) => {
  res.send("Servidor IA activo 🚀");
});

app.listen(3000, () => {
  console.log("Servidor funcionando");
});
