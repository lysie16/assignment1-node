//requiring express
const express = require('express');

//initializing the express app
const app = express();

//specifying a port  to listen on localhost:9000
const port = 9000;

//API / urls
app.get('/', (req, res)=> {
    res.send("Hi from the express server!");
});

//penguin api 
app.get('/api/penguins', (req, res)=> {

    // call to db

    // return dummy data
    const penguins = ["African", "Northern rockhopper", "King", "Adelie", 
    "Fairy", "Yellow-eyed", "Chinstrap", "Magellanic", "Southern rockhopper"];
    
    //sending a response should be in JSON
    res.send(JSON.stringify(penguins));
});

// bear api
app.get('/api/bears', (req, res) => {
    
    // return dummy data
    const bears = ["American Black", "Brown", "Polar", "Asian Black", "Sun Bear", 
    "Giant Panda", "Sloth Bear", "Kodiak Bear", "Eurasian", "Cinnamon"];

    // sending a respone should be in JSON 
    res.send(JSON.stringify(bears));
});

// running the express http server on the port
app.listen(port, () => {
    console.log ("Listening on port", port);
});