var dashboardModel = require("../models/informacoesModel");

function listarMusicas(req, res) {
    dashboardModel.listarMusicas()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhuma música encontrada!");
            }
        }).catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function listarFases(req, res) {
    dashboardModel.listarFases()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhuma fase encontrada!");
            }
        }).catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function listarClipes(req, res) {
    dashboardModel.listarClipes()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum clipe encontrado!");
            }
        }).catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function listarNiveis(req, res) {
    dashboardModel.listarNiveis()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum nível encontrado!");
            }
        }).catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function listarQuizPorUsuario(req, res) {
    var idUsuario = req.params.idUsuario;

    dashboardModel.listarQuizPorUsuario(idUsuario)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum quiz encontrado para este usuário!");
            }
        }).catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function salvarQuiz(req, res) {
    var pontuacao = req.body.pontuacao;
    var acertos = req.body.acertos;
    var erros = req.body.erros;
    var fkUsuario = req.body.fkUsuario;

    if (pontuacao == undefined) {
        res.status(400).send("A pontuação está undefined!");
    } else if (acertos == undefined) {
        res.status(400).send("Os acertos estão undefined!");
    } else if (erros == undefined) {
        res.status(400).send("Os erros estão undefined!");
    } else if (fkUsuario == undefined) {
        res.status(400).send("O usuário está undefined!");
    } else {
        dashboardModel.salvarQuiz(pontuacao, acertos, erros, fkUsuario)
            .then(function (resultado) {
                res.status(201).json(resultado);
            }).catch(function (erro) {
                console.log(erro);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

function listarPerfilUsuario(req, res) {
    var idUsuario = req.params.idUsuario;

    dashboardModel.listarPerfilUsuario(idUsuario)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Usuário não encontrado!");
            }
        }).catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    listarMusicas,
    listarFases,
    listarClipes,
    listarNiveis,
    listarQuizPorUsuario,
    salvarQuiz,
    listarPerfilUsuario
};
