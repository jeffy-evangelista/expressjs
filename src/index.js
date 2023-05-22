const express = require('express');
const app = express();
const port = 5000;
//  use method allows you to add middleware to your application's 
//  request processing pipeline
app.use(express.json());
//  parses incoming requests with URL-encoded payloads
app.use(express.urlencoded())
app.use((req, res, next) => {
    console.log('This is the first middleware');
    next();
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

const groceries = [
    {
        id: 1,
        item: 'Milk',
    },
    {
        id: 2,
        item: 'Eggs',
    }
]


app.get('/groceries', (res, req, next) => {
    // this is begin called before the next function
    console.log('before handling the request');
    // await console.log('before handling the request');
    // if the next function is not called, the request will be left hanging
    // and the function below will not be processed
    next();

}, (req, res) => {
    //next function is used to call the next middleware
    res.send(groceries)
})

app.post('/groceries', (req, res) => {
    console.log(req.body);
    res.send(201)
})