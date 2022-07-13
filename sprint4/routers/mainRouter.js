const express = require ('express');
const router = express.Router();
const mainController = require ('../controller/mainController')

router.get('/' , mainController.index);

router.get('/login' , mainController.login);

router.get('/register' , mainController.register);

router.get('/register' , mainController.register);

router.get('/productCart' , mainController.productCart);

router.get('/editProducts' , mainController.editProducts);

router.get('/createProducts' , mainController.createProducts);

router.get('/productDetailNBA' , mainController.productDetailNBA);

router.get('/productDetailRoland' , mainController.productDetailRoland);

router.get('/productDetailMundial' , mainController.productDetailMundial);

router.get('/productDetailLibertadores' , mainController.productDetailLibertadores);

router.get('/products' , mainController.products);

module.exports = router;