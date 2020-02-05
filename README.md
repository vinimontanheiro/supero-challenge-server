
### Servidor NodeJS com MongoDB, Graphql e um exemplo de migrations Flyway usando SQL 


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

```
### Se por acaso quiserem rodar sem o Docker, as migrações estão em
```

```
- project-folder
  - docker
    - postgres
      - migrations
        - sql
```

## GRAPHQL Playground
```
- GET - http://127.0.0.1:9001/playground
```

### Para facilitar coloquei o server em produção, basta acessar o endereço:
### http://209.97.131.195:9001/playground
