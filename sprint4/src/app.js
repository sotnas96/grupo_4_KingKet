const express = require ('express')
const app = express();
const path = require('path');
const methodOverride = require ('method-override');

app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, './public')));
app.set('views', path.join(__dirname, '/views'));
app.set('view engine' , 'ejs');

const mainRouter = require ('./routers/mainRouter');
const productoRoutes = require('./routers/productsRoutes');
const usersRoutes = require('./routers/usersRoutes');

app.use('/', mainRouter);
app.use('/products', productoRoutes);
app.use('/users', usersRoutes);

//falta levantar servidor//
const puerto = process.env.PORT || 3000 ;
require('dotenv').config()
app.listen(puerto , () => {
    console.log("servidor levantado en puerto: "+ puerto )
})

