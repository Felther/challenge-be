# Desafio Coopercarga
## Requisitos
  - Node.js versão 20 ou superior
## Instruções de instalação back-end
1. Instalar dependências do Node.js
    - Abrir uma linha de comando na raiz do projeto e executar o comando `npm i`
2. Configurar as variáveis de ambiente
    - Criar um arquivo `.env` na raiz do projeto
    - Copiar todo o conteúdo do arquivo `.env.exemple` para o arquivo `.env` criado no passo anterior
    - Na linha de comando executar o comando `node ace generate:key`
3. Configurar o banco de dados
    - Na linha de comando executar o comando `node ace configure @adonisjs/lucid --db=sqlite`
        - Não é necessário instalar os pacotes adicionais necessários pelo Lucid
    - Na linha de comando executar o comando `node ace migration:run` para criar as tabelas
    - Na linha de comando executar o comando `node ace db:seed` para popular a tabela
4. Iniciar o servidor
    - Na linha de comando executar o comando `node ace serve`
    - O servidor será iniciado no endereço indicado na mensagem exibida na tela