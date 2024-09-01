# **Esportes dELAS**

## Descrição Geral
O projeto "***Esportes dELAS***" é um sistema que visa incentivar e empoderar meninas através da prática esportiva, oferecendo um ambiente seguro e inclusivo para que elas possam desenvolver suas habilidades, quebrar estereótipos de gênero e construir autoconfiança.

## Contexto
A participação feminina nas Olimpíadas de Paris 2024, onde as mulheres representaram 55% da delegação brasileira e conquistaram a maioria das medalhas, incluindo todos os ouros, evidencia o potencial e a importância do esporte para o empoderamento feminino. No entanto, muitas meninas ainda enfrentam barreiras para praticar esportes, como falta de acesso a espaços seguros, preconceito e estereótipos de gênero. O projeto "***Esportes dELAS***" busca solucionar esse problema, criando oportunidades para que meninas descubram o esporte e desenvolvam seu potencial.

## Público-alvo
O sistema é voltado para meninas e jovens de diferentes idades e níveis de habilidades esportivas que desejam praticar esportes em um ambiente seguro e encorajador. O projeto também se destina a treinadoras, ex-atletas e profissionais de saúde mental que desejam contribuir para o empoderamento feminino através do esporte.

# Escopo do Projeto

## Funcionalidades principais
+ **Cadastro de Usuárias**: Permitir que as meninas criem seus perfis no aplicativo, informando dados pessoais e interesses esportivos;
+ **Cadastro de Treinos**: Permitir que as meninas agendem seus treinos de acordo com suas preferências e disponibilidade;
+ **Alterar dados das usuárias**: Permitir que os dados cadastrados possam ser atualizados;
+ **Deletar usuárias**: Permitir que sejam feita a remoção de usuárias da base de dados;
+ **Alteração de Treinos**: Permitir que os treinos possam ser atualizados, como mudança de local, data e/ou hora;
+ **Exclusão de Treino**: Permitir que um treino seja removido do sistema;

# Requisitos

## Requisitos Funcionais
+ O sistema deve permitir o cadastro de usuárias, com as seguintes informações: nome completo, idade, endereço e interesses esportivos;
+ O sistema deve permitir que as usuárias agendem seus treinos;
+ O sistema deve permitir a visualização das atletas cadastradas;
+ O sistema deve permitir alterar os dados uma atleta;
+ O sistema deve permitir deletar uma atleta da base de dados;
+ O sistema deve permitir o cadastro de um treino com seus respectivos detalhes: modalidade, treinadora, local, data e quantidade de alunas;
+ O sistema deve permitir alterar as informações de um treino;
+ O sistema deve permitir deletar um treino;

## Requisitos Não Funcionais
+ O sistema deve ser intuitivo e fácil de usar, mesmo para pessoas com pouca experiência;

# Tecnologias utilizadas

| Ferramenta       | Descrição                                                                                                                          |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------- |        
| `javascript`     | Linguagem de programação                                                                                                           |
| `NestJS`         | Framework para construir aplicativos Node.js server-side eficientes e escaláveis
| `Node.js`         | Ambiente de execução do JavaScript                                                                                                 |
| `nodemon`        | Dependência que observa as atualizações realizadas nos documentos para rodar o servidor automaticamente                            |
| `npm`            | Gerenciador de pacotes                                                                                                             |
| `TypeScript`     | Linguagem de programação superset de JavaScript, que se integra naturalmente ao ecossistema do Node.js    
| `dotenv`         | Dependência para proteger dados sensíveis do  projeto                                                                              |
| `MongoDb`        | Banco de dado não relacional orietado a documentos                                                                                 |
| `Mongo Atlas`    | Interface gráfica para verificar se os dados foram persistidos                                                                     |
| `mongoose`       | Dependência que interage com o MongoDB para a conexão do database                                                                  |
| `Insomnia`       | Interface gráfica para realizar/visualizar as requisições                                                                               |
| `Render`         | Plataforma de deploy para implatação na nuvem                                                                                      |
| `Swagger`        | Framework para gerar a documentação do projeto, auxiliando na descrição, consumo e visualização dos endpoints de uma API           |

## Organização

```
  📁 esportes-delas
  |
  |
  |-  📁 src
  |    |- 📁 controllers
  |         |- 📄 athlete.controller.ts
  |         |- 📄 training.controller.ts
  |    |- 📁 entities
  |         |- 📄 athlete.entity.ts
  |         |- 📄 training.entity.ts
  |    |- 📁 models
  |         |- 📄 athlete.module.ts
  |         |- 📄 training.module.ts
  |    |- 📁 services
  |         |- 📄 athlete.service.ts
  |         |- 📄 training.service.tss
  |    |- 📄 app.controller.ts
  |    |- 📄 app.module.ts
  |    |- 📄 app.service.ts
  |    |- 📄 main.ts
  |
  |-  📁 test
  |- 📄 .env
  |- 📄 .eslintrc.js
  |- 📄 .gitignore
  |- 📄 .prettierrc
  |- 📄 LICENSE
  |- 📄 nest-cli.json
  |- 📄 nodemon.json
  |- 📄 package-lock.json
  |- 📄 pakage.json
  |- 📄 README.md
  |- 📄 tsconfig.build.json
  |- 📄 tsconfig.json
```

## Rotas

- ## Athlete

- **GET**/athletes
  - lista todas as atletas cadastradas
- **PUT**/athletes/:id
  - atualiza uma atleta por id
- **DELETE**/athletes/:id
  - apaga uma atleta cadastrada
- **POST**/athletes
  - cadastra uma atleta na base de dados

- ## Trainings

- **GET**/trainings
  - lista todas os treinos cadastrados
- **GET**/trainings/:id
  - lista os detalhes de um treino passado por id
- **PUT**/trainings/:id
  - atualiza detalhes do treino passado por id
- **DELETE**/trainings/:id
  - apaga um treino cadastrado
- **POST**/trainings
  - cadastra um treino na base de dados

# Executando o Projeto

```bash
# Clone o repositório
$ git clone https://github.com/mellyssamnds/esportes-delas.git

# Entre na pasta do projeto
$ cd esportes-delas

# Instale as dependências
$ npm install

# Configure as variáveis de ambiente criando um arquivo .env seguindo o exemplo
MONGODB_USER=name_user
MONGODB_PASSWORD=password_database
MONGODB_DATABASE=name_database
MONGODB_HOST=nome_host

# Execute o servidor
$ npm run start:dev
```

## Documentação

[Swagger](https://esportes-delas-1.onrender.com/home)<p>
[Render](https://esportes-delas-1.onrender.com)

## Implementações futuras:
+ **Perfil das Treinadoras e Ex-Atletas**: Apresentar informações sobre as treinadoras e ex-atletas envolvidas no projeto, incluindo suas trajetórias e conquistas, para inspirar as meninas;
+ **Recursos Educacionais**: Oferecer acesso a vídeos, artigos e outros materiais educativos sobre esporte, saúde e empoderamento feminino;
+ **Comunidade Online**: Criar um espaço para que as meninas possam interagir, compartilhar experiências e se apoiar mutuamente;
+ **Eventos e Competições**: Divulgar eventos e competições esportivas, incentivando a participação das meninas e promovendo a integração entre projetos de diferentes bairros;
+ **Gamificação**: Implementar elementos de gamificação, como desafios e recompensas, para tornar a experiência mais divertida e motivadora;
+ **Autenticação**: Implementar autenticação visando a segurança na transmissão e armazenamento dos dados.

  <p align="center">Projeto Final desenvolvido durante a Imersão JavaScript da <a href="https://reprograma.com.br/">{reprograma}</a></p>
  <p align="center">Feito com 💜 by Mellyssa Stephanny</p>

