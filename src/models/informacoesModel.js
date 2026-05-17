var database = require("../database/config");

function listarMusicas() {
    var instrucaoSql = `SELECT idMusica, nome FROM musica;`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarFases() {
    var instrucaoSql = `SELECT idFase, nome FROM fase;`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarClipes() {
    var instrucaoSql = `SELECT idClipe, nome FROM clipe;`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarNiveis() {
    var instrucaoSql = `SELECT idNivel, nome FROM nivel_fa;`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarQuizPorUsuario(idUsuario) {
    var instrucaoSql = `
        SELECT 
            idQuiz,
            pontuacao,
            acertos,
            erros,
            DATE_FORMAT(dataQuiz, '%d/%m/%Y %H:%i') AS dataQuiz
        FROM quiz
        WHERE fkUsuario = ${idUsuario}
        ORDER BY dataQuiz DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function salvarQuiz(pontuacao, acertos, erros, fkUsuario) {
    var instrucaoSql = `
        INSERT INTO quiz (pontuacao, acertos, erros, fkUsuario) 
        VALUES (${pontuacao}, ${acertos}, ${erros}, ${fkUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarPerfilUsuario(idUsuario) {
    var instrucaoSql = `
        SELECT 
            u.idUsuario,
            u.nome,
            u.email,
            m.nome AS musicaFavorita,
            f.nome AS fasefavorita,
            c.nome AS clipeFavorito,
            n.nome AS nivelFa
        FROM usuario u
            LEFT JOIN musica m ON u.fkMusica = m.idMusica
            LEFT JOIN fase f ON u.fkFase = f.idFase
            LEFT JOIN clipe c ON u.fkClipe = c.idClipe
            LEFT JOIN nivel_fa n ON u.fkNivel = n.idNivel
        WHERE u.idUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
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
