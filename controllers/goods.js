/**
 * create on 2019/11/28 16:41
 * @author   wanghao
 * @purpose
 */
let goodsModal = require("../models/goods");
let Goods = {
    /**
     * 获取全部数据
     */
    getAll: (req, res, next) => {
       res.json({
            title:'111',
            des:'1112'
        })
        return 1
    },
    /**
     * 获取单个数据
     */
    getOne: (req, res, next) => {

    },
    /**
     * 添加数据
     */
    add: (req, res, next) => {

    },
    /**
     * 删除数据
     */
    delete: (req, res, next) => {

    },
    /**
     * 更新数据
     */
    update: (req, res, next) => {

    },
}
module.exports = Goods
