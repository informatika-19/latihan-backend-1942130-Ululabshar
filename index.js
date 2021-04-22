const { Console } = require('console')
const express = require('express')
const app = express()
const bodypaser = require('body-parser')

app.use(bodypaser.json({
    extend : true,
    limit : '20mb'

}))

app.use(bodypaser.urlencoded({
    extend : true,
    limit : '20mb'

}))

app.get('/',(req, res)=>{
    res.send('hello word')
})

app.get('/profile/:username/:id',(req, res)=>{
    console.log(req.params)
    res.send('username ='+ req.params.username)
})

app.get('/daerah/:daerah',(req, res)=>{
    console.log(req.params)
    res.send('daerah ='+ req.params.daerah)
})

app.post('/register',(req, res) =>{
    console.log((req,body))
})

app.listen(3000, () => {
    console.log('server started')
})