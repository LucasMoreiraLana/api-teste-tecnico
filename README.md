# 📦 API de Gerenciamento de Pedidos

Esta é uma API REST desenvolvida para um desafio técnico, focada no gerenciamento de pedidos. O projeto utiliza **Node.js** com **Express**, seguindo uma arquitetura em camadas (**Controllers, Services, Repositories**) e persistência de dados no **MongoDB** através do **Docker**.

---

## 🚀 Tecnologias Utilizadas

- **Runtime:** Node.js v24+
- **Framework:** Express
- **Banco de Dados:** MongoDB (NoSQL)
- **Containerização:** Docker & Docker Compose
- **ORM/ODM:** Mongoose
- **Variáveis de Ambiente:** Dotenv

- ## 🛠️ Como Executar o Projeto

### 1️⃣ Clonar o repositório e instalar dependências

bash:
git clone https://github.com/LucasMoreiraLana/api-teste-tecnico.git
cd api-teste-tecnico
npm install

### 2️⃣ Configurar o Banco de Dados (Docker)

Certifique-se de ter o Docker instalado e execute:
bash: docker compose up -d

### 3️⃣ Configurar Variáveis de Ambiente

Crie um arquivo .env na raiz do projeto.

Exemplo:

MONGO_URI=mongodb://admin:password123@localhost:27017/ordersdb?authSource=admin
PORT=3000

### 4️⃣ Iniciar a API
bash: npm start

A API estará disponível em:

http://localhost:3000

----------------------------------------------------------------------------------

📡 Endpoints da API
Método	Endpoint	Descrição
POST	/pedidos	Cria um novo pedido
GET	/pedidos	Lista todos os pedidos cadastrados
GET	/pedidos/numero/:numero	Busca um pedido pelo número
PUT	/pedidos/:id	Atualiza os dados de um pedido
DELETE	/pedidos/:id	Remove um pedido

----------------------------------------------------------------------------------

📝 Exemplo de Body (JSON) para Testes

Para requisições POST ou PUT:

{
  "numeroPedido": "v10089015vdb-01",
  "valorTotal": 10000,
  "dataCriacao": "2023-07-19T12:24:11.529Z",
  "items": [
    {
      "idItem": "2434",
      "quantidadeItem": 1,
      "valorItem": 1000
    }
  ]
}

----------------------------------------------------------------------------------

🏗️ Estrutura do Projeto
src
 ├── models
 ├── controllers
 ├── services
 ├── repositories
 └── routes

 ----------------------------------------------------------------------------------

models → Schema do MongoDB (Mongoose)

controllers → Recebe requisições e envia respostas

services → Lógica de negócio

repositories → Comunicação com o banco de dados

routes → Definição das rotas da API

----------------------------------------------------------------------------------

👨‍💻 Autor

Desenvolvido por Lucas Moreira Lana
