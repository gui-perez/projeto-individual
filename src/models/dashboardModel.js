var database = require("../database/config");

// KPI: fase mais popular
function kpiFaseMaisPopular() {
    var instrucaoSql = `
        SELECT f.nome, COUNT(*) AS votos
        FROM usuario u
        JOIN fase f ON u.fkFase = f.idFase
        GROUP BY u.fkFase, f.nome
        ORDER BY votos DESC
        LIMIT 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// KPI: total de acertos (soma de todos os quiz)
function kpiTotalAcertos() {
    var instrucaoSql = `SELECT SUM(acertos) AS totalAcertos FROM quiz;`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// KPI: total de erros (soma de todos os quiz)
function kpiTotalErros() {
    var instrucaoSql = `SELECT SUM(erros) AS totalErros FROM quiz;`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// KPI: pontuação média (média de acertos * 10, resultado de 0 a 100)
function kpiPontuacaoMedia() {
    var instrucaoSql = `SELECT ROUND(AVG(acertos) * 10, 1) AS pontuacaoMedia FROM quiz;`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Gráfico: votos por música
function graficoMusicas() {
    var instrucaoSql = `
        SELECT m.nome, COUNT(*) AS votos
        FROM usuario u
        JOIN musica m ON u.fkMusica = m.idMusica
        GROUP BY u.fkMusica, m.nome
        ORDER BY votos DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Gráfico: votos por fase
function graficoFases() {
    var instrucaoSql = `
        SELECT f.nome, COUNT(*) AS votos
        FROM usuario u
        JOIN fase f ON u.fkFase = f.idFase
        GROUP BY u.fkFase, f.nome
        ORDER BY votos DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Gráfico: votos por clipe
function graficoClipes() {
    var instrucaoSql = `
        SELECT c.nome, COUNT(*) AS votos
        FROM usuario u
        JOIN clipe c ON u.fkClipe = c.idClipe
        GROUP BY u.fkClipe, c.nome
        ORDER BY votos DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Gráfico: distribuição por nível de fã
function graficoNiveis() {
    var instrucaoSql = `
        SELECT n.nome, COUNT(*) AS quantidade
        FROM usuario u
        JOIN nivel_fa n ON u.fkNivel = n.idNivel
        GROUP BY u.fkNivel, n.nome
        ORDER BY u.fkNivel ASC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
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
