import express from 'express';
import db from './db.js';
import { buscarTodosUsuarios } from './models/UsuarioModel.js'; 

const app = express();
app.use(express.json());

app.get('/usuarios', async (req, res) => {
  try {
    const usuarios = await buscarTodosUsuarios();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ mensagem: "Erro no banco", erro: error });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => console.log(`Rodando na porta ${PORT}`));
