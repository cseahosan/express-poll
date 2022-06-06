const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')

const app = express()

app.use(morgan('dev'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get('/', (req, res) => {
    res.json({
        message: 'I am root route'
    })
})

mongoose.connect('mongodb://localhost:27017/test')
.then(() => {
    app.listen(4545, () => {
        console.log('ready to serve at 4545 port')
    });
    console.log('connected');
})
.catch(e => {
    console.log(e)
})
