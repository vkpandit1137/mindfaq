const express = require('express');

let app = express.Router();

app.get('/', function (req, res) {
    res.send('Home');
});
// app.get('/:id', function (req, res) {
//     res.send('View Blogs' + req.params.id);
// });
module.exports = app