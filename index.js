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

// 1. SETUP EXPRESS
const express = require('express');

// 1a. create the app
const app = express();

// 2. CREATE ROUTES
app.get('/', function(req,res){
    res.json({
     "message":"Hello World!"
   });
})  

// 3. START SERVER (Don't put any routes after this line)
app.listen(3000, function(){
    console.log("Server has started");
})

