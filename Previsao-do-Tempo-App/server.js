const express = require('express');
const app = express();
const port = 3000;

// Configurando o Express para servir arquivos estáticos na mesma pasta do servidor (ou seja, a pasta raiz do projeto)
app.use(express.static(__dirname));

// Rota padrão para servir o arquivo index.html
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Iniciando o servidor
app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});
