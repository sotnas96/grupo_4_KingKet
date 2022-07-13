const express = require ('express')
const app = express()
app.use('/static', express.static(__dirname + '/public'));
const mainRouter = require ('./routers/mainRouter')
const methodOverride = require ('method-override')
app.set('view engine' , 'ejs');
app.use(express.static('public'))
app.use(methodOverride('_method'))

app.get('/', mainRouter);
app.get('/login', mainRouter);
app.get('/register', mainRouter);
app.get('/productCart', mainRouter);
app.get('/editProducts', mainRouter);
app.get('/createProducts', mainRouter);
app.get('/productDetailNBA', mainRouter);
app.get('/productDetailRoland', mainRouter);
app.get('/productDetailMundial', mainRouter);
app.get('/productDetailLibertadores', mainRouter);
app.get('/products', mainRouter);
 
//falta levantar servidor//
app.listen(4000 , () => {
    console.log("servidor levantado en puerto 4000")
})

