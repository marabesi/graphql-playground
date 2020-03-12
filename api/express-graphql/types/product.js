const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLFloat } = require('graphql')

const ProductType = new GraphQLObjectType({
  name: 'ProductType',
  description: 'Represents a product within the system (Product root type).',
  fields: {
    id: {
      type: GraphQLID,
      description: 'Product unique identifier'
    },
    title: {
      type: GraphQLString,
      description: 'Short title, usually between 50 and 100 characters'
    },
    category_name: {
      type: GraphQLString,
      description: 'Category description'
    },
    image_link: {
      type: GraphQLString,
      description: 'Product image, following the pattern: //{domain}/**/*.{png, jpeg, gif}'
    },
    price: {
      type: GraphQLFloat,
      description: 'Product raw price'
    }
  }
})

module.exports = ProductType