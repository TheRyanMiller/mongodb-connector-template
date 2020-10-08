const { MongoClient } = require("mongodb");
let count = 0;
require('dotenv').config();

/****
 * 
 * USE THE SCRIPT BELOW TO RUN A SIMPLE FIND QUERY
 * LIMITED TO 20 RESULTS
 * 
 *****/

//SET SOME EXAMPLE VARS
let mongoURI = process.env.MONGO_URI;
let dbName = "mydatabase";
let collectionName = "mycollection";

const client = new MongoClient(mongoURI);
async function run() {
    try {
      await client.connect();
      const db = client.db(dbName);
      const collection = db.collection(collectionName);
  
      // Query for a movie that has the title 'Back to the Future'
      const query = {};
      await collection.find(query).limit(20).toArray((err,documents)=>{
        console.log(documents);
      });
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
}
run().catch(console.dir);