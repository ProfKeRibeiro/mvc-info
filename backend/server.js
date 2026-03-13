const express = require("express");
const path = require("path");

const eventRoutes = require("./src/routes/eventRoutes");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index");
});
app.use("/", eventRoutes);
app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});
