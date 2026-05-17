var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/informacoesController");

// Musicas
router.get("/musicas", function (req, res) {
    dashboardController.listarMusicas(req, res);
});

// Fases
router.get("/fases", function (req, res) {
    dashboardController.listarFases(req, res);
});

// Clipes
router.get("/clipes", function (req, res) {
    dashboardController.listarClipes(req, res);
});

// Níveis de fã
router.get("/niveis", function (req, res) {
    dashboardController.listarNiveis(req, res);
});

// Perfil completo do usuário (com joins)
router.get("/perfil/:idUsuario", function (req, res) {
    dashboardController.listarPerfilUsuario(req, res);
});

// Quiz - listar resultados do usuário
router.get("/quiz/:idUsuario", function (req, res) {
    dashboardController.listarQuizPorUsuario(req, res);
});

// Quiz - salvar resultado
router.post("/quiz/salvar", function (req, res) {
    dashboardController.salvarQuiz(req, res);
});

module.exports = router;
