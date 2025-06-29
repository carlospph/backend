import { db } from '../db.js';

export const getUsers = (_, res) => {
    const q = "SELECT * FROM usuarios";

    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};

export const addUser = (req, res) => {
    const sql = "INSERT INTO usuarios (`nome`, `email`, `senha`) VALUES (?)";
    const values = [
        req.body.nome,
        req.body.email,
        req.body.senha
    ];

    db.query(sql, [values], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuário cadastrado com sucesso");
    });
};

export const updateUser = (req, res) => {
    const sql = "UPDATE usuarios SET `nome`=?, `email`=?, `senha`=? WHERE id=?";
    const values = [
        req.body.nome,
        req.body.email,
        req.body.senha
    ];

    db.query(sql, [...values, req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Atualizado com sucesso");
    });
};

export const deleteUser = (req, res) => {
    const sql = "DELETE FROM usuarios WHERE id = ?";

    db.query(sql, [req.params.id], (err) => {
        if (err) {
            return res.json(err);
        }
        return res.status(200).json("Usuário deletado com sucesso");
    });
};
