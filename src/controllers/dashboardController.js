var dashboardModel = require("../models/dashboardModel");

function kpiFaseMaisPopular(req, res) {
    dashboardModel.kpiFaseMaisPopular()
        .then(function (resultado) {
            res.status(200).json(resultado);
        }).catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function kpiTotalAcertos(req, res) {
    dashboardModel.kpiTotalAcertos()
        .then(function (resultado) {
            res.status(200).json(resultado);
        }).catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function kpiTotalErros(req, res) {
    dashboardModel.kpiTotalErros()
        .then(function (resultado) {
            res.status(200).json(resultado);
        }).catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function kpiPontuacaoMedia(req, res) {
    dashboardModel.kpiPontuacaoMedia()
        .then(function (resultado) {
            res.status(200).json(resultado);
        }).catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function graficoMusicas(req, res) {
    dashboardModel.graficoMusicas()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum dado encontrado!");
            }
        }).catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function graficoFases(req, res) {
    dashboardModel.graficoFases()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum dado encontrado!");
            }
        }).catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function graficoClipes(req, res) {
    dashboardModel.graficoClipes()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum dado encontrado!");
            }
        }).catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function graficoNiveis(req, res) {
    dashboardModel.graficoNiveis()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum dado encontrado!");
            }
        }).catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    kpiFaseMaisPopular,
    kpiTotalAcertos,
    kpiTotalErros,
    kpiPontuacaoMedia,
    graficoMusicas,
    graficoFases,
    graficoClipes,
    graficoNiveis
};
