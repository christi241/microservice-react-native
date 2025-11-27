import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const typeDefs = `#graphql
  type Query {
    status: String
  }
`;

const resolvers = {
  Query: {
    status: () => 'MS3 GraphQL service is running!',
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

async function startServer() {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4001 },
  });
  console.log(`🚀 MS3 GraphQL Server ready at: ${url}`);
}

startServer();
