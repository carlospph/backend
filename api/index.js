import express from "express";
import userRoutes from "./routes/users.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/usuarios", (req, res)=>{
  res.send("Bem vindo a api no render. Inicialmente sem dados");
});

app.listen(8805);

