var PORT = 3000

var path = require('path')
var express = require('express')

var app = express()

var staticPath = path.join(__dirname, '/')
app.use(express.static(staticPath))

app.listen(PORT, function () {
    console.log('Listening on port ' + PORT)
})
