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

router.get('/detail/:id' , productController.detailId);


router.get('/productCart' , productController.carrito);

//ruta creacion de producto
router.get('/createProducts' , productController.createView);
router.post('/', uploadFile.single('image') ,productController.create)

//ruta edicion de producto
router.get('/:id/edit' , productController.editarView);
router.put('/:id/edit', productController.edit)

//ruta eliminacion de producto
router.delete('/:id', productController.destroy)

module.exports = router