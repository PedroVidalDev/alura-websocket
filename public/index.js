import "./socket-front-index.js";
import { emitirAdicionarDocumento } from "./socket-front-index.js";
import { obterStorage, removerStorage } from "./utils/storage.js";

const tokenJwt = obterStorage("tokenJwt");

console.log(tokenJwt)

const listaDocs = document.getElementById("lista-documentos");
const form = document.getElementById("form-adiciona-documento");
const inputDocumento = document.getElementById("input-documento");

const botaoLogout = document.querySelector("#botao-logout")

botaoLogout.addEventListener("click", () => {
    removerStorage("tokenJwt");
    alert("Usuario deslogado com sucesso.");
    window.location.href = "/login/index.html";
})

form.addEventListener("submit", (event) => {
    event.preventDefault()

    emitirAdicionarDocumento(inputDocumento.value);
})

function inserirLinkDoc(nome){
    listaDocs.innerHTML += `
    <a href="/documento/index.html?nome=${nome}" id="documento-${nome}" class="list-group-item list-group-item-action">
        ${nome}
    </a>
    `
}

function removerLinkDoc(nome){
    const documento = document.getElementById("documento-" + nome);

    listaDocs.removeChild(documento);
}

export {inserirLinkDoc, removerLinkDoc};