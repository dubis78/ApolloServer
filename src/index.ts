import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { readFileSync } from 'fs';

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const dataTdc = JSON.parse(readFileSync('./src/data/datatdc.json', { encoding: 'utf-8' }))
const typeDefs = await readFileSync('./src/gql/schema.graphql', { encoding: 'utf-8' })
const dataOfertas = JSON.parse(readFileSync('./src/data/dataofertas.json', { encoding: 'utf-8' }))

/*
`#graphql
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;
*/


const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    books: () => books,
    listaTdc: () => dataTdc,
    countTdc: () => dataTdc.length,
    findByfranquicia: (root, args) => {
      const { franquicia } = args
      let result = dataTdc.filter(el => el.franquicia === franquicia)
      return result
    },
    oferta: () => dataOfertas[0],
    listaOfertas: () => dataOfertas,
    countOfertas: () => dataOfertas.length,
    findByTitulo: (root, args) => {
      const { titulo } = args
      let result = dataTdc.filter(el => el.titulo === titulo)
      return result
    }
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);