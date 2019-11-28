/**
 * create on 2019/11/28 16:36
 * @author   wanghao
 * @purpose
 */
let express = require('express');
let router = express.Router();
let users = require('../controllers/users');

//获取全部用户
router.get('/', users.getAll);
//获取单个用户
router.get('/getone',users.getOne);
//添加用户
router.post('/add', users.add);
//删除用户
router.get('/delete/:id', users.delete);
//更新用户
router.post('/update/:id', users.update);

module.exports = router;
