const {ApolloServer} = require('apollo-server');
const mongoose = require('mongoose');
const typeDefs = require('./schemas/taskSchema');
const resolvers = require('./resolvers/taskResolver');

const startServer = async () => {
    await mongoose.connect('mongodb+srv://alancuevas:12345@clustertasks.dlf6l.mongodb.net/?retryWrites=true&w=majority&appName=clusterTasks');
    const server = new ApolloServer({typeDefs, resolvers});

    server.listen().then(({url}) => {
        console.log(`Server corriendo en ${url}`);
    });
}

startServer();