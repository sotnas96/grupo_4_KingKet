
const mainController = {
    index : (req,res) => { 
        res.render('index')
    },
    login: (req,res) => {
        res.render('login')
    },
    register:(req,res) => {
        res.render('register')
    },
    // editProduct: (req , res) => {
    //     res.render('editProduct')
    // },
    productDetailNBA:(req, res) => {
        res.render('productDetailNBA')
    },
    productDetailRoland:(req, res) => {
        res.render('productDetailRoland')
    },
    productDetailMundial:(req, res) => {
        res.render('productDetailMundial')
    },
    productDetailLibertadores:(req, res) => {
        res.render('productDetailLibertadores')
    }
};

module.exports = mainController;