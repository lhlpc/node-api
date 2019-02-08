const express = require("express");

const app = express();

app.get('/', (request, response) => {
    response.send('Hello, yo!');
    console.log(request, response);
});

app.listen(3001);

