const express = require('express')
const app = express()
const port = 3025
const cors= require('cors')
const configureDB = require('./config/database')
const router = require('./config/routes')

configureDB()
app.use(express.json())
app.use(cors())

// Route Handlers || Request Handlers
app.get('/', (req,res) => {
    res.send('Welcome to the contact manager  app')
})


app.use('/',router)


app.listen(port, () => {
    console.log('listening to the port,',port)
})
