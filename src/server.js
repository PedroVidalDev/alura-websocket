import express from "express";
import url from "url";
import path from "path"
import http from "http";
import {Server} from "socket.io";
import "./db/dbConnect.js";

const app = express();
const port = process.env.port || 3000;

const caminhoAtual = url.fileURLToPath(import.meta.url);
const diretorioPublico = path.join(caminhoAtual, "../..", "public");

app.use(express.static(diretorioPublico));

const servidorHttp = http.createServer(app);

servidorHttp.listen(port, () => {
    console.log("Servidor on.");
})

const io = new Server(servidorHttp);

export default io;