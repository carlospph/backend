import mysql from 'mysql2';

// O pool de conexões usa as variáveis que você salvou no Render
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: 'test', // Certifique-se de que o nome do banco existe no TiDB
  port: process.env.DB_PORT || 4000,
  ssl: {
    minVersion: 'TLSv1.2',
    rejectUnauthorized: true // O TiDB exige conexão segura
  }
});

// Teste para ver se conecta ao subir
pool.query('SELECT 1', (err) => {
  if (err) {
    console.error('Erro ao conectar ao TiDB:', err.message);
  } else {
    console.log('Conexão com TiDB estabelecida com sucesso!');
  }
});
