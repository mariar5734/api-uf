const express = require('express');
const colecaoUf = require('./exemplo1.js/exemplo1.js');

const app = express();

app.get('/ufs', (req, res) => {
    res.json(colecaoUf.colecaoUf)
});

app.get('/ufs/:iduf', (req, res) => {
    const iduf = parseInt(req.params.iduf);
    let mensagemErro = '';
    let uf;

    if (!(isNaN(iduf))) {
        livros = colecaoUf.colecaoUf.find(u => u.id === iduf);
        if (!uf) {
            mensagemErro = 'UF não encontrado';
        }
    } else {
        mensagemErro = 'Requisição inválida';

    }

    if (uf) {
        res.json(uf);
    } else {
        res.status(404).json({ "erro": mensagemErro })
    }

 
});


app.listen(8080, () => {
    console.log('Servidor iniciado na porta 8080');
});