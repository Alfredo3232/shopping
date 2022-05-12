const express = require('express')
var bodyParser = require('body-parser')
const app = express()
const port = 3000

const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: "password",
  database: 'data'
});
connection.connect()
console.log( "=================================================>",connection)

// // simple query
// connection.query(
//   'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45',
//   function(err, results, fields) {
//     console.log(results); // results contains rows returned by server
//     console.log(fields); // fields contains extra meta data about results, if available
//   }
// );

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', express.static('./client'))

app.get('/insert ', (req, res)=> {
  db.query('INSERT',  [variable], (err, result) => {
    
  })
})
app.get('/F2', (req, res) => {
  res.sendFile('./client/F2/F2.html')
})
app.post('/datas', (req, res) => {
  res.send('Post Request Successful')
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})