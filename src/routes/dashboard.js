var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

// KPIs
router.get("/kpi/fase-popular",     function (req, res) { dashboardController.kpiFaseMaisPopular(req, res); });
router.get("/kpi/total-acertos",    function (req, res) { dashboardController.kpiTotalAcertos(req, res); });
router.get("/kpi/total-erros",      function (req, res) { dashboardController.kpiTotalErros(req, res); });
router.get("/kpi/pontuacao-media",  function (req, res) { dashboardController.kpiPontuacaoMedia(req, res); });

// Gráficos
router.get("/grafico/musicas",      function (req, res) { dashboardController.graficoMusicas(req, res); });
router.get("/grafico/fases",        function (req, res) { dashboardController.graficoFases(req, res); });
router.get("/grafico/clipes",       function (req, res) { dashboardController.graficoClipes(req, res); });
router.get("/grafico/niveis",       function (req, res) { dashboardController.graficoNiveis(req, res); });

module.exports = router;
