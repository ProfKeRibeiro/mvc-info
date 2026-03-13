const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.render("index");
});

router.get("/eventos", (req, res) => {
    res.send("Lista de eventos");
});



module.exports = router;