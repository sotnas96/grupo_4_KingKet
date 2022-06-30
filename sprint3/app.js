const express = require ('express')
const app = express()
app.use('/static', express.static(__dirname + '/public'));
const mainRouter = require ('./routers/mainRouter')

const path = require('path');

app.get('/', mainRouter);
app.get('/login', mainRouter);
app.get('/register', mainRouter);
app.get('/productCart', mainRouter);
app.get('/productDetail', mainRouter);
 
//falta levantar servidor//
app.listen(4000 , () => {
    console.log("servidor levantado en puerto 4000")
})

