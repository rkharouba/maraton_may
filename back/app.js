const express = require('express')
var cors = require('cors')
var fileupload = require('express-fileupload')

const app = express()
app.use(fileupload())
app.use(cors())

app.post('/upload_img', function (req, res) {
    console.log(req.body);
    res.send('Hello World 123');
})

console.log('running server111')
app.listen(5000)