import mysql from 'mysql';

// Cria uma conexão com o banco de dados
export const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'usuariosstoretech'
});

// Conecta ao banco de dados
db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados: ' + err.stack);
        return;
    }
    console.log('Conectado ao banco de dados com sucesso!');
});
