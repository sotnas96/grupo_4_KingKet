const fs = require('fs')
const path = require('path')
var products = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/productsData.json'), 'utf-8'))
const productsController = {
    productDetail: (req,res) => {
        let arregloTennis ;
        arregloTennis = products.filter(e => {
            return e.deporte == 'tennis';
        });
        let arregloFootball ;
        arregloFootball = products.filter(e => {
            return e.deporte == 'football'
        });
        let arregloBasketball;
        arregloBasketball = products.filter(e => {
            return e.deporte == 'basketball'
        });
        let arreglos = []
        arreglos.push(arregloBasketball,arregloFootball,arregloTennis);
        res.render('products/products', {deporte: arreglos})
    },
    carrito: (req,res) => {
        res.render('products/productCart')
    },
    editarView: (req,res) => {
        let id = req.params.id
        let productoDetalle = products.filter(e => {
            return e.id == id
        })
        res.render('products/editProducts', {productoDetalle: productoDetalle})
    },
    createView: (req,res) => {
        res.render('products/createProducts')
    },
    detailId: (req,res) => {
        let id = req.params.id
        let productoDetalle = products.filter(e => {
            return e.id == id
        })
        res.render('products/detailProduct', {productoDetalle: productoDetalle})
    },
    create: (req,res) => {
        let archivoJSON = fs.readFileSync(path.join(__dirname , '../data/productsData.json'), 'utf-8')
        let archivoProd;
        if (archivoJSON == ""){
            archivoProd = []
        } else{
            archivoProd = JSON.parse(archivoJSON);
        }
        let newProd = {
            id: (archivoProd.length + 1),
            organizador: req.body.organizador,
            competencia: req.body.competencia,
            oponentes: req.body.oponentes,
            location: req.body.location,
            date: req.body.date,
            descripcion: req.body.descripcion,
            image: req.file.filename,
            deporte: req.body.deporte,
            precio: req.body.precio,
            capacity: req.body.capacity 
            };
        archivoProd.push(newProd);
        let archivoFinal = JSON.stringify(archivoProd, null, ' ');
        fs.writeFileSync('./src/data/productsData.json', archivoFinal);
        res.redirect('/')
    },
    edit: (req,res) => {
        let id = req.params.id;
        products[id - 1].organizador = req.body.organizador,
        products[id - 1].competencia= req.body.competencia,
        products[id - 1].oponentes= req.body.oponentes,
        products[id - 1].location= req.body.location,
        products[id - 1].date= req.body.date,
        products[id - 1].precio= req.body.precio,
        products[id - 1].capacity= req.body.capacity;
        let productoJson = JSON.stringify(products, null, ' ');
        fs.writeFileSync(path.join(__dirname,'../data/productsData.json'), productoJson)
        res.redirect('/products/')
    },
    destroy: (req,res) => {
        let id= req.params.id
        let productosActualizados = products.filter( e => {
            return e.id != id;
        })
        if (id != products.length){    //chequeo que el producto eliminado no sea el ultimo
            for (i=(id-1); i<productosActualizados.length; i++){ //arranco a partir del producto eliminado
                productosActualizados[i].id = i+1;
            }
        };
        let productosJson = JSON.stringify(productosActualizados,null, ' ');
        fs.writeFileSync(path.join(__dirname,'../data/productsData.json'), productosJson)
        res.redirect('/')

    }
}

module.exports = productsController