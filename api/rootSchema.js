const { GraphQLSchema, GraphQLObjectType } = require('graphql')
const product = require('./schemas/product')

const query = new GraphQLObjectType({
  name: 'Root',
  fields: {
    ...product
  }
})

module.exports = new GraphQLSchema({
  query
})