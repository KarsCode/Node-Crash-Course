//express app 

const express = require('express')

const app = express()

//listen for requests
app.listen(3000)

app.get('/', (req,res) => {

    //res.send('<p>Hello Kartik</p>')
    res.sendFile('./views/index.html', {root: __dirname})
})

app.get('/about', (req,res) => {

    //res.send('<p>About</p>')
    res.sendFile('./views/about.html', {root: __dirname})
})


//redirects
app.get('/about-us', (req,res) => {

    res.redirect('/about')
})


//404-page
app.use((req,res)=>{
    res.status(404).sendFile('./views/404.html', {root: __dirname})
}) //must go at the bottom as the callback fires for all request cases, hence position it at the bottom of the JS code