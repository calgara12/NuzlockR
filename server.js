const express = require('express');
let app = express();


const port = 3000;


app.get('/', (req, res)=>{
    res.send('<h1>NuzlockR</h1>');
});

app.listen(3000,()=>{
   console.log('Listening on port:' + port);
});