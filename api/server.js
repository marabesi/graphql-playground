require('dotenv').config()

const express = require('express');
const graphqlHTTP = require('express-graphql');
const MongoClient = require('mongodb').MongoClient

const root = require('./rootSchema')
const app = express();

const PORT = process.env.NODE_PORT || 4001
const MONGO_URI = process.env.MONGO_URI

const client = new MongoClient(MONGO_URI, { useNewUrlParser: true })

client.connect(err => {
  const db = client.db()

  app.use('/', graphqlHTTP({
    schema: root,
    graphiql: true,
    context: {
      db
    }
  }));
})

app.listen(PORT, () => {
  console.log(`Running a GraphQL API server at ${PORT}`);
});
