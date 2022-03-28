import express from 'express'
import items from './items'

const app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/items', function(req, res) {
    res.send(items);
});
