var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucaoSql = `
        SELECT idUsuario, nome, email FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nome, email, senha, musica, fase, clipe, nivel, pontuacao, certas, erradas) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():"
        , nome, email, senha, musica, fase, clipe, nivel);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var sqlUsuario = `
        INSERT INTO usuario (nome, email, senha, fkMusica, fkFase, fkClipe, fkNivel) VALUES 
        ('${nome}', '${email}', '${senha}', ${musica}, ${fase}, ${clipe}, ${nivel});
    `;
    console.log("Executando a instrução SQL: \n" + sqlUsuario);

    return database.executar(sqlUsuario).then(function(resultado) {
        var idUsuarioCriado = resultado.insertId;

        var sqlQuiz = `
            INSERT INTO quiz (pontuacao, acertos, erros, fkUsuario) VALUES 
            ('${pontuacao}', '${certas}', '${erradas}', '${idUsuarioCriado}');
        `;
        console.log("Executando a instrução SQL: \n" + sqlQuiz);

        return database.executar(sqlQuiz);
    });
}

module.exports = {
    autenticar,
    cadastrar
};