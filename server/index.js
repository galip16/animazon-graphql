const { ApolloServer, gql } = require('apollo-server');
const { mainCards, animals, categories } = require("./db.js")


const typeDefs = gql`




  type MainCard {
    title : String!
    image : String!
  }

  type Animal{
    id: ID!
    image: String!
    title: String!
    rating: Float
    price:String!
    description:[String!]!
    slug: String!
    stock: Int!
    onSale:Boolean

  }

  type Category {
    id: ID!
    image: String!
    category: String!
    slug: String!
  }

 
  type Query {
   
    mainCards:[MainCard]
    animals: [Animal]
    animal(slug:String!): Animal
    categories: [Category!]!
    category(slug: String!) : Category
  }
`





const resolvers = {
  Query: {
    mainCards: () => mainCards,
    animals: () => animals,
    animal: (parent, args, context) => {
      let animal = animals.find((animal) => animal.slug === args.slug)
      return animal
    },
    categories: () => categories,
    category: (parent, args, context) => {
      let category = categories.find((category) => {
        return category.slug === args.slug
      });
      return category
    }

  },
};


const server = new ApolloServer({ typeDefs, resolvers });


server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});