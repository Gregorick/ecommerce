const express = require('express')
const router = express.Router()
const { create, productById, read, remove, update, list, listRelated, listCategories, listBySearch, listSearch, photo } = require('../controllers/product')
const { requireSignin, isAuth, isAdmin } = require('../controllers/auth.js')
const { userById } = require('../controllers/user.js')

router.get('/product/:productId', read)
router.post('/product/create/:userId', requireSignin, isAdmin, isAuth, create);
router.param('userId', userById)
router.param('productId', productById)
router.delete('/product/:productId/:userId', requireSignin, isAdmin, isAuth, remove)
router.put('/product/:productId/:userId', requireSignin, isAdmin, isAuth, update)
router.get('/products', list)
router.get('/products/related/:productId', listRelated)
router.get('/products/categories', listCategories)
router.get("/products/search", listSearch);
router.post("/products/by/search", listBySearch);
router.get('/product/photo/:productId', photo)
module.exports = router;