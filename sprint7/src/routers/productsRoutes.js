const express = require('express');
const router = express.Router();
const productController = require('../controller/productsController');
const productValidator = require('../validations/productsValidations')

const path = require('path');

const authMiddle = require('../middlewares/authMiddleware')
const multer = require('multer');
var storage = multer.diskStorage({
    destination: (req,res,cb) => {
        cb(null, path.join (__dirname , '../../public/images/uploads'));
    },
    filename: (req,file,cb) => {
        cb(null, Date.now() + '-' + file.originalname)
    }
})
var uploadFile = multer({storage : storage});

router.get('/' , productController.productList);
router.get('/search' , productController.productSearch);
router.get('/detail/:id' , productController.productDetail);


router.get('/productCart',authMiddle , productController.carrito);

//ruta creacion de producto
router.get('/createProducts',authMiddle , productController.createView);
router.post('/', uploadFile.single('image'),productValidator ,productController.createDataBase)

//ruta edicion de producto
router.get('/:id/edit',authMiddle , productController.editarView);
router.put('/:id/edit', productController.update)

//ruta eliminacion de producto
router.delete('/:id', productController.destroy)

module.exports = router