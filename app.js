const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')

const pollController = require('./pollController')

const app = express()

app.set('view engine', 'ejs')
// app.set('views', 'templates') //default dir views

app.use(morgan('dev'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/create', pollController.createPollGetController)
app.post('/create', pollController.createPollPostController)
app.get('/polls', pollController.listPollController)
app.get('/polls/:id', pollController.singlePollController)

// app.post('/create', (req, res) => {
//     res.render('create');
// })

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
