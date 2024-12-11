const {ApolloServer} = require('apollo-server');
const mongoose = require('mongoose');
const typeDefs = require('./schemas/taskSchema');
const resolvers = require('./resolvers/taskResolver');

const startServer = async () => {
    await mongoose.connect('mongodb+srv://carrito_compras:1234@serviciosweb.9h9fw.mongodb.net/?retryWrites=true&w=majority&appName=ServiciosWeb');
    const server = new ApolloServer({typeDefs, resolvers});

    server.listen().then(({url}) => {
        console.log(`Server corriendo en ${url}`);
    });
}

startServer();
