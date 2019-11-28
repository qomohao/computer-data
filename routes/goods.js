/**
 * create on 2019/11/28 16:35
 * @author   wanghao
 * @purpose
 */
let express = require('express');
let router = express.Router();
let goods = require('../controllers/goods');

//获取全部商品
router.get('/', goods.getAll);
//获取单个商品
router.get('/getone',goods.getOne);
//添加商品
router.post('/add', goods.add);
//删除商品
router.get('/delete/:id', goods.delete);
//更新商品
router.post('/update/:id', goods.update);


module.exports = router;
