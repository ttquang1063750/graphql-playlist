const express = require('express');
const cors = require('cors');
const pkg = require('express-graphql');
const {graphqlHTTP} = pkg;
const schema =  require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

// Allow cross-origin requests
app.use(cors());

mongoose.connect('mongodb+srv://1234567890:1234567890@singapore.gcv05.mongodb.net/graphql-playlist?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.once('open', () => {
console.log('connected to mongodb')
});

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}));

app.listen(4000, () => {
    console.log('http://localhost:4000');
});
