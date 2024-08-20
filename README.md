
# API Node.JS

##Como funciona a API:
Usando as informaçoes abaixo para conectar a api e o banco de dados
DB_DATABASE=<nome_do_banco_de_dados>
DB_USER=<usuario_do_banco>
DB_PASSWORD=<senha_do_banco>
DB_HOST=<host_do_banco>
PORT=<porta_desejada>

## Cadastrando Aluno:
{
  "nome": "Nome do Aluno",
  "aluno_matricula": 123456,
  "turma": "Turma A",
  "genero": "M",
  "aluno_status": "efetivo"
}

## Resposta:
{
  "id": 1,
  "nome": "Nome do Aluno",
  "aluno_matricula": 123456,
  "turma": "Turma A",
  "genero": "M",
  "aluno_status": "efetivo"
}

## Listar alunos:
[
  {
    "id": 1,
    "nome": "Nome do Aluno",
    "aluno_matricula": 123456,
    "turma": "Turma A",
    "genero": "M",
    "aluno_status": "efetivo"
  },
  ...
]

## Possivel resposta:
{
  "message":"Login bem-sucedido." 
} 
  ou 
{
  "message": "Erro ao buscar alunos."
}





