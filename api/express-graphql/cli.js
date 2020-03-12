require('dotenv').config()
const MongoClient = require('mongodb').MongoClient
const { graphql } = require('graphql')
const readline = require('readline')
const MONGO_URI = process.env.MONGO_URI

const root = require('./rootSchema')

const client = new MongoClient(MONGO_URI, { useNewUrlParser: true })

client.connect(err => {
  const db = client.db()

  const rli = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  rli.question('graphQL query: \n', async input => {
    const response = await graphql(root, input, {}, { db })
    console.log(response)
    client.close()
    rli.close()
  })
});

process.on('SIGINT', () => client.close())