const express=require('express')
const app=express()
const shelterRout=require('./routes/shelters');
const dogsRout=require('./routes/dogs');
     
app.use('/shelter',shelterRout);
app.use('/dogs',dogsRout);



app.listen(3000,()=>{
console.log("serving")
})