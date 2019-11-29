/**
 * create on 2019/11/28 16:35
 * @author   wanghao
 * @purpose
 */
let express = require('express');
let router = express.Router();
let news = require('../controllers/news');

//获取全部新闻
router.get('/', news.getAll);
//获取单个新闻
router.get('/getone',news.getOne);
//添加新闻
router.post('/add', news.add);
//删除新闻
router.get('/delete/:id', news.delete);
//更新新闻
router.post('/update/:id', news.update);


module.exports = router;
