var express = require("express")
var path = require("path")

var app = express()
app.use(require('stylus').middleware(process.argv[3]))
app.use(express.static(process.argv[3] || path.join(__dirname, 'public')))

app.get('/', function(req, res) {
    console.log(process.argv[3])
})

app.listen(process.argv[2])