
const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const cors = require('cors'); // Importe o módulo CORS
require('dotenv').config();
// Conexão com o banco de dados
const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql'
});
// Definindo o modelo Aluno
const Aluno = sequelize.define('Aluno', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    aluno_matricula: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    turma: {
      type: DataTypes.STRING,
      allowNull: false
    },
    genero: {
      type: DataTypes.ENUM('M', 'F'),
      allowNull: false
    },
    aluno_status: {
      type: DataTypes.ENUM('efetivo', 'desligado'),
      allowNull: false
    }
  }, {
    timestamps: false // Ignora as colunas 'createdAt' e 'updatedAt'
  });
// Rotas
const app = express();
app.use(express.json());
app.use(cors());
// Rota para criar um novo aluno
app.post('/aluno', async (req, res) => {
  try {
    const aluno = await Aluno.create(req.body);
    res.status(201).json(aluno);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao criar aluno.' });
  }
});
// Rota para visualizar todos os alunos
app.get('/aluno', async (req, res) => {
    try {
      const alunos = await Aluno.findAll();
      res.json(alunos);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao buscar alunos.' });
    }
  });
// Inicializando o servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
// Sincronizando os modelos com o banco de dados
(async () => {
  try {
    await sequelize.sync({ force: true });
    console.log('Modelos sincronizados com o banco de dados.');
  } catch (error) {
    console.error('Erro ao sincronizar modelos com o banco de dados:', error);
  }
})();

