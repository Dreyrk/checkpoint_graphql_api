import "reflect-metadata";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { buildSchema } from "type-graphql";
import FlagsResolver from "./resolvers/flag";
import database from "./database";

const port = Number(process.env.PORT) || 4000;

async function main() {
  try {
    const schema = await buildSchema({
      resolvers: [FlagsResolver],
    });
    await database.initialize();
    const server = new ApolloServer({ schema });
    const { url } = await startStandaloneServer(server, { listen: { port } });
    console.log(`graphql server listening on ${url}`);
  } catch (e: any) {
    console.error((e as Error).message);
  }
}

main();
