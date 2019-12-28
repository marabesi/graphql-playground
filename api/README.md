# GraphQL API

This project uses nodejs, graphql and reactjs to build a product catalog. Users
can query the api through the reactjs app and interact with the products available.

Docker is used as the development platform as well as the production solution.

# Docker setup

For development docker can be used via the nodejs image from docker hub, executing
the dev script defined in the `composer.json` file.

```sh
docker run --name graph-api -d -it -p 4001:4001 -w /var/www/api -v $(pwd):/var/www/api node:10 yarn dev
```

The preferred approach though, is building the image first and then running it
afterwards. This way the image built is the same used in the docker-compose file
which is used to deploy the API in production.

```sh
docker build . -t node-graphql &&
docker run --name graph-api -d -it -p 4001:4001 -w /var/www/api -v $(pwd):/var/www/api node-graphql yarn dev
```

# Environment variables

The API exposes a few variables to configure it to, and they are as follows:

| Key | Description |
| NODE_PORT | Which port the API should run |
| MONGO_URI | Valid mongo URI string connection |
| MONGO_COLLECTION | MongoDb collection to use in the GraphQL server | 