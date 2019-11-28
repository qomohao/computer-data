/**
 * create on 2019/11/28 16:36
 * @author   wanghao
 * @purpose
 */
let express = require('express');
let router = express.Router();
let order = require('../controllers/order');

//获取全部订单
router.get('/', order.getAll);
//获取单个订单
router.get('/getone',order.getOne);
//添加订单
router.post('/add', order.add);
//删除订单
router.get('/delete/:id', order.delete);
//更新订单
router.post('/update/:id', order.update);

module.exports = router;

