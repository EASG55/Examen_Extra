import {startStandaloneServer} from "@apollo/server/standalone";
import {ApolloServer} from "@apollo/server";
import {typeDefs} from "./schema.ts";
import {Query} from "./Query.ts";


  const resolvers = {Query};

  const server = new ApolloServer({
    typeDefs,
    resolvers
  });

  const {url} = await startStandaloneServer(server, {
    listen: {
      port: 4000,
    }
  });

  console.log("Server ready for use");

