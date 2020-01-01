# GraphQL API

This API is based on the GraphQL for nodejs, exposing a HTTP interface (graphiql)
to interact with it.

The following section describes how to setup the project using Docker. For a
local environment setup without docker the recommended way is to use NPM and
follow the script `dev` and `start` in the `package.json` file.

# Docker setup

**Disclaimer: this section is exclusively used in the `api` folder of this project.**

For development docker can be used via the nodejs image from docker hub, executing
the dev script defined in the `composer.json` file.

```sh
docker run --name graph-api -d -it -p 4001:4001 -w /var/www/api -v $(pwd):/var/www/api node:10 yarn dev
```

This approach enables the posibility to try different node versions quickly,
as well as new docker configuration. For example, the following command serves
the API using node 8.

```sh
docker run --name graph-api -d -it -p 4001:4001 -w /var/www/api -v $(pwd):/var/www/api node:8 yarn dev
```

## Docker setup - development

The preferred approach though, is building the image first and then running it
afterwards. This way the image built is the same used in the docker-compose file
which is used to deploy the API in production.

```sh
docker build . -t node-graphql &&
docker run --name graph-api -d -it -p 4001:4001 -w /var/www/api -v $(pwd):/var/www/api node-graphql yarn dev
```

## Docker setup - deploy

**Requirements: docker compose should be [installed](https://docs.docker.com/compose/install)
as it doesn't come by default with docker.**

This project comes with a docker compose file to deploy the API in any server
running docker. The compose file uses a node js image (the same used for development)
and a nginx image to do a reverse proxy.

```sh
docker-compose up -d
```

Once the command has finished, the response should be something like the following:

```sh
Creating network "api_default" with the default driver
Creating api_webserver_1 ... done
Creating api_nodejs_1    ... done
```

# Environment variables

The API exposes a few variables to configure it to, and they are as follows:

| Key | Description |
|-----|-------------|
| NODE_PORT | Which port the API should run |
| MONGO_URI | Valid mongo URI string connection |
| MONGO_COLLECTION | MongoDb collection to use in the GraphQL server | 
