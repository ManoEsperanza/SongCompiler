// const express = require('express');
// const cors = require('cors');

// let app = express();
// app.use(cors());

// app.get('/', function(req,res){
//     res.json({
//        "message":"hello world"
//     });
// })


// app.get('/hello/:name', (req,res)=>{
//     let name = req.params.name;
//     res.send("Hi, " + name);
//   })

//   app.get('/echo', (req, res) => {
//     // Get all query parameters
//     const queryParams = req.query;

//     // Create a response object
//     const response = {
//         message: "Here are the query parameters you sent:",
//         firstName: queryParams.firstName,
//         lastName: queryParams.lastName
//     };

//     // Send the response as JSON
//     res.json(response);
// });


// app.listen(3000, ()=>{
//     console.log("Server started")
// })

// // 1. SETUP EXPRESS
// const express = require('express');
// const cors = require("cors");
// require('dotenv').config()
// const mongoUri = process.env.MONGO_URI;const dbname = "Song-Compiler";

//  // CHANGE THIS TO YOUR ACTUAL DATABASE NAME

// async function connect(uri, dbname) {
//     let client = await MongoClient.connect(uri, {
//         useUnifiedTopology: true
//     })
//     let db = client.db(dbname);
//     return _db;
// }



// // 1a. create the app
// const app = express();

// // 2. CREATE ROUTES
// app.get('/', function(req,res){
//     res.json({
//      "message":"Hello World!"
//    });
// })  

// // 3. START SERVER (Don't put any routes after this line)
// app.listen(3000, function(){
//     console.log("Server has started");
// })

// SETUP BEGINS
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const MongoClient = require("mongodb").MongoClient;
const dbname = "Song-Compiler";

const mongoUri = process.env.MONGO_URI;

let app = express();

// !! Enable processing JSON data
app.use(express.json());

// !! Enable CORS
app.use(cors());

async function connect(uri, dbname) {
    let client = await MongoClient.connect(uri, {
        useUnifiedTopology: true
    })
    _db = client.db(dbname);
    return _db;
}

// SETUP END
async function main() {

  let db = await connect(mongoUri, dbname);

  // Routes
  app.get('/', function(req,res){
    res.json({
     "message":"Hello World!"
   });

   app.get("/details", async (req, res) => {
    try {
        const details = await db.collection("details").find().project({
            genre: 1,
            song: 1,
            trackTime: 1,
            verses: 1,
            chorus:1,
            lyrics:1,

        }).toArray();
        
        res.json({ details });
    } catch (error) {
        console.error("Error fetching recipes:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

})

}

main();

// START SERVER
app.listen(3000, () => {
  console.log("Server has started");
});



