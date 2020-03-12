const { GraphQLList, GraphQLID, GraphQLInt  } = require('graphql')
const ObjectID = require('mongodb').ObjectID
const ProductType = require('../types/product')

const COLLECTION_NAME = process.env.MONGO_COLLECTION

module.exports = {
  products: {
    type: GraphQLList(ProductType),
    description: 'Returns a collection of all products within the application.',
    resolve(parent, args, { db }) {
      return new Promise(async (resolve, reject) => {
        const data = await db.collection(COLLECTION_NAME).find().limit(5).toArray()
        const id = data.map(item => {
          return {
            id: item._id,
            ...item
          }
        })

        resolve(id)
      })
    }
  },
  product: {
    type: ProductType,
    description: 'Find a product by id',
    args: {
      id: {
        type: GraphQLID
      }
    },
    resolve(parent, { id }, { db }) {
      return new Promise(async (resolve, reject) => {
        const data = await db.collection(COLLECTION_NAME).findOne({ _id: ObjectID(id) })
        resolve({
          id: data._id,
          ...data
        })
      })
    }
  },
  productCount: {
    type: GraphQLInt,
    resolve(parent, args, { db }) {
      return db.collection(COLLECTION_NAME).countDocuments()
    }
  }
}