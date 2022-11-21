const express = require('express')
const app = express()

const BollyWood1=require('./BollyWood1')

app.get('/Bollywood',(req,res)=>{
    res.json(BollyWood1).status(200)
    res.end();

})

app.listen(process.env.PORT||3000,()=>{
    console.log('connected to 3000')
})
