
## Servidor NodeJS com MongoDB, Graphql e um exemplo de migrations Flyway usando SQL; o servidor também possui autenticação com JWT Token

## Dependências:

- [Yarn](https://yarnpkg.com/pt-BR/)
- [NodeJS](https://nodejs.org/en/)
- [Docker](https://www.docker.com/)
- [DockerCompose](https://docs.docker.com/compose)


### Development mode LINUX
```
$ cd project-folder
$ yarn
$ docker-compose up -d
$ yarn start 
```

### Development mode WINDOWS
```
$ cd project-folder
$ yarn
$ ./docker-startup.sh // From git bash terminal
$ yarn start-win
```

### Production mode LINUX
```
$ yarn
$ docker-compose up -d
$ yarn build && yarn prod 
```

### Production mode WINDOWS
```
$ yarn
$ ./docker-startup.sh // From git bash terminal
$ yarn build && yarn prod 
```

### Se por acaso quiserem rodar sem o Docker, as migrações estão em

```
- project-folder
  - docker
    - postgres
      - migrations
        - sql
```

### e basta alterar o arquivo

```
- project-folder
  - .env 
```

## GRAPHQL API
```
- GET - http://127.0.0.1:9001/playground
- GET - http://127.0.0.1:9001/graphql
```

### Para facilitar coloquei o server em produção, segue o link
  - [DockerCompose](http://209.97.131.195:9001/playground)


### Exemplo de Query e Mutation pelo playground:

### usuário e senha padrão de login:
  - e-mail : fulano@supero.com.br
  - password: supero

![Login](https://raw.githubusercontent.com/vmontanheiro/supero-challenge-server/master/account.png)

![Listar contas](https://raw.githubusercontent.com/vmontanheiro/supero-challenge-server/master/account.png)

![Listar livros](https://raw.githubusercontent.com/vmontanheiro/supero-challenge-server/master/book.png)


