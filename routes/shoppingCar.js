/**
 * create on 2019/11/28 16:36
 * @author   wanghao
 * @purpose
 */
let express = require('express');
let router = express.Router();
let shoppingCar = require('../controllers/shoppingCar');

//获取全部购物车清单
router.get('/', shoppingCar.getAll);
//添加购物车
router.post('/add', shoppingCar.add);
//删除购物车商品
router.get('/delete/:id', shoppingCar.delete);
//更新购物车商品
router.post('/update/:id', shoppingCar.update);

module.exports = router;

