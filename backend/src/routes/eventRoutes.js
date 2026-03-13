const express = require("express");

const router = express.Router();

const eventos = [];

router.get("/", (req, res) => {
    res.render("index");
});

router.get("/eventos/novo", (req, res) => {
    res.render("new");
});

router.get("/eventos", (req, res) => {
    res.render("event", { eventos });
});

router.post("/eventos", (req, res) => {

    const nome = req.body.nome;
    const data = req.body.data;

    eventos.push({
        nome: nome,
        data: data
    });

    res.redirect("/eventos");

});

module.exports = router;