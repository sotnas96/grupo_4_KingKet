const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const productController = require('../controller/productsController');

var storage = multer.diskStorage({
    destination: (req,res,cb) => {
        cb(null, path.join (__dirname , '../../public/images/uploads'));
    },
    filename: (req,file,cb) => {
        cb(null, Date.now() + '-' + file.originalname)
    }
})
var uploadFile = multer({storage : storage});

router.get('/' , productController.productDetail);

router.get('/nba' , productController.detailNba);
router.get('/mundial' , productController.detailMundial);
router.get('/libertadores' , productController.detailLibertadores);
router.get('/tennis' , productController.detailTennis);


router.get('/productCart' , productController.carrito);

//ruta edicion de producto
router.get('/editProduct' , productController.editarView);
router.put('/editProduct', productController.edit)

//ruta creacion de producto
router.get('/createProducts' , productController.createView);
router.post('/', uploadFile.single('image') ,productController.create)

module.exports = router