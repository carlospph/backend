import mysql from 'mysql2';

// -----------------------------------------------------
// Validação das variáveis obrigatórias
// -----------------------------------------------------
const required = ['DB_HOST', 'DB_USER', 'DB_PASSWORD', 'DB_PORT', 'DB_NAME'];

required.forEach((key) => {
  if (!process.env[key]) {
    console.warn(`[WARN] Variável de ambiente ausente: ${key}`);
  }
});

// Porta vem como string → convertemos para número
const port = Number(process.env.DB_PORT || 3306);

// -----------------------------------------------------
// Pool de conexões MySQL/TiDB com SSL (Render)
// -----------------------------------------------------
const pool = mysql.createPool({
  host: process.env.DB_HOST,        // ex: "mydb.render.com"
  user: process.env.DB_USER,        // usuário do banco
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,    // nome exato do banco
  port:'4000',

  ssl: {
    minVersion: 'TLSv1.2',
    rejectUnauthorized: true,       // TiDB exige conexões seguras
  },

  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// -----------------------------------------------------
// Teste de conexão (executa no deploy)
// -----------------------------------------------------
pool.query('SELECT 1', (err) => {
  if (err) {
    console.error('\n❌ Erro ao conectar ao MySQL/TiDB:');
    console.error(err.message);
  } else {
    console.log('\n✅ Conexão com MySQL/TiDB estabelecida com sucesso!');
  }
});

// Exporta o pool para usar em qualquer lugar da aplicação
export default pool;
``
