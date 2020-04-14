const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./scheme/scheme');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb://localhost/graphql-playlist',
    {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.once('open',() => {
    console.log('connected to database');
});

app.use(cors());

app.use('/graphql', graphqlHTTP({schema: schema,graphiql:true}));

app.listen(4000, () => {
    console.log("server starts and listen at 4000");
});