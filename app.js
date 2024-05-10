
const dotenv = require('dotenv').config();
const Model = require('./models/model.js')
const routes = require('./routers/routes.js')

// Connected Database Mongo DB 
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://sharlyslgt:yPTPkKP7J3whl4Hs@taskmanagerapi.gvfoav9.mongodb.net/?retryWrites=true&w=majority&appName=TaskManagerAPI";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(" Let's go Mawen,you successfully connected to TaskManager Database!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


const express = require('express')
const app = express();
const PORT = process.env.PORT || 3001;

// Import the Mongoose Library 
const mongoose = require('mongoose')


// Get the Mongoose connection object 

const database = mongoose.connection; 

// Event handler for database connection errors
database.on('error', (error)=> {
    console.log(error)
})

// Event handler for succesful database connection 
database.once('connected', ()=> {
    console.log('Database connected')
})

// Middleware to parse incoming request with JSON payloads 
app.use(express.json())





app.use('./api',routes);


app.listen(PORT, () => {
    console.log(`Le serveur est en train de se lancer dans le port ${PORT}`)
})





