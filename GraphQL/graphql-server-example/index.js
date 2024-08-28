import { ApolloServer } from "@apollo/server";
import {startStandaloneServer} from "@apollo/server/standalone"


//types
import {typeDefs} from './schema.js'

//server setup
const server = new ApolloServer({
    //This object expects 2 properties
    typedefs //definitons of types of data that we want to expose on graphs
    //resolvers

})

const {url} = await startStandaloneServer(server,{
    listen : {port: 4000}
})

console.log('Server ready at port',4000);
