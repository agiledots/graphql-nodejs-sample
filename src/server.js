const express = require('express');
 
const graphqlHttp = require("express-graphql")
const {GraphQLSchema} = require("graphql")

const {queryType} = require("./query.js")

const port = 5000;
const app = express();

const schema = new GraphQLSchema({query: queryType})

app.use("/graphql", graphqlHttp({
    schema,
    graphiql: true
}))

app.get('/hello', (req,res) => {
    res.send("hello");
   }
);
 
app.listen(port);
console.log(`Server Running at localhost:${port}`);
