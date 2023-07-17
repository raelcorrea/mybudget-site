# My Budget: Controle suas finanças com facilidade

O controle das finanças domésticas é essencial para equilibrar receitas e despesas no My Budget. Com este aplicativo, você pode acompanhar de perto seus gastos e fontes de renda, identificando áreas onde é possível economizar e estabelecendo metas financeiras realistas. Organizar seus gastos, criar um planejamento e manter registros detalhados no My Budget são práticas essenciais para alcançar estabilidade financeira e evitar dívidas. Com disciplina e uma abordagem proativa utilizando o My Budget, você pode manter suas finanças em ordem, garantindo segurança e tranquilidade para o futuro.

## Visão Geral

O My Budget é uma aplicação web ainda em fase inicial de desenvolvimento. Até o momento, foi desenvolvida a funcionalidade principal, que permite monitorar seus gastos. No futuro, planejamos adicionar recursos que permitirão ao usuário criar projeções, incluir gastos fixos e parcelados, além de exibir os gastos nos próximos 30 dias.

## Instalação

Para começar, faça um fork/clone deste projeto para um diretório de sua preferência em sua máquina. Em seguida, execute o seguinte comando:

`npm install`

### Executando

Após a instalação, você pode executar os seguintes comandos:

`npm run start`

Este comando irá executar a versão de build do projeto.

`npm run serve`

Este comando irá executar a versão de desenvolvimento/debug do projeto.

### Requisitos

Para executar este projeto, é necessário ter o Node.js instalado em sua máquina.

## Estrutura do projeto

Este projeto segue boas práticas de desenvolvimento e está estruturado da seguinte forma:

```
/ - Diretório raiz do projeto
/public - Diretório responsável por disponibilizar arquivos como imagens, CSS e JavaScript para a web.
/src - Diretório que contém o código fonte do nosso projeto.
/src/app - Neste diretório, são mantidas todas as regras de negócio.
/config - Responsável por armazenar configurações importantes do site, como banco de dados e servidor.
/helpers - Funcionalidades auxiliares.
/middleware - Funcionalidades estendidas que são executadas durante o startup da aplicação.
/partials - Funcionalidades de backend das partials do site.
/routes - Configurações das rotas.
/styles - Estilos em SASS da aplicação.
/views - Views do site.

```
