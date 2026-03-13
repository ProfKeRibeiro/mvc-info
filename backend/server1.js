const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views"));

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/eventos", (req, res)=>{
    res.send("Lista de Eventos")
})



app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});