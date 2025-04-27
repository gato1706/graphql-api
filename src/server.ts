import { ApolloServer } from 'apollo-server'
import 'reflect-metadata'
import path from 'node:path'
import { buildSchema } from 'type-graphql';
import { AppointmentResolver } from './resolvers/Appointments-resolver';

async function bootstrap() {

    const schema = await buildSchema({
        resolvers: [
            AppointmentResolver,
        ],
        emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
    })

    const server = new ApolloServer({
        schema,
    })

    const { url } = await server.listen();

    console.log(`server is running on ${url}`);
}

bootstrap()