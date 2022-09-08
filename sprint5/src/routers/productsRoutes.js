const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const productController = require('../controller/productsController');
const authMiddle = require('../middlewares/authMiddleware')
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


router.get('/productCart',authMiddle , productController.carrito);

//ruta creacion de producto
router.get('/createProducts',authMiddle , productController.createView);
router.post('/', uploadFile.single('image') ,productController.create)

//ruta edicion de producto
router.get('/:id/edit',authMiddle , productController.editarView);
router.put('/:id/edit', productController.edit)

//ruta eliminacion de producto
router.delete('/:id', productController.destroy)

module.exports = router