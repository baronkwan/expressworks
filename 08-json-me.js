var express = require("express")
var fs = require("fs")
var path = require("path")

var app = express()

app.get('/books', function(req, res) {
    var data = fs.readFile(process.argv[3], function(err, data) {
        if (err) throw res.send(500)
        try {
            res.json(JSON.parse(data))
        } catch (err) {
            res.send(500)
        }
    })
})

app.listen(process.argv[2])