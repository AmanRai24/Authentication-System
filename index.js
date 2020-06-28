const express = require('express');
const app = express();
const port = 8000;






app.listen(port,function(err){
    if(err)
        console.log("Error Starting the server");
    
    console.log('Server has been started');
});
