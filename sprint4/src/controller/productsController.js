const fs = require('fs')
const path = require('path')
const productsController = {
    productDetail: (req,res) => {
        res.render('products/products')
    },
    carrito: (req,res) => {
        res.render('products/productCart')
    },
    detailNba: (req,res) => {
        res.render('products/detailNBA')
    },
    detailMundial: (req,res) => {
        res.render('products/detailMundial')
    },
    detailTennis: (req,res) => {
        res.render('products/detailRoland')
    },
    detailLibertadores: (req,res) => {
        res.render('products/detailLibertadores')
    },
    editarView: (req,res) => {
        res.render('products/editProducts')
    },
    createView: (req,res) => {
        res.render('products/createProducts')
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
            descripcion: req.body.descripcion,
            image: req.file.filename,
            deporte: req.body.deporte,
            precio: req.body.precio
            };
        archivoProd.push(newProd);
        let archivoFinal = JSON.stringify(archivoProd);
        fs.writeFileSync('./src/data/productsData.json', archivoFinal);
        res.redirect('/')
    },
    edit: (req,res) => {
        res.send('viajo por put para edicion de producto')
    }
}

module.exports = productsController