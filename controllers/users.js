/**
 * create on 2019/11/28 16:42
 * @author   wanghao
 * @purpose
 */
let usersModal = require("../models/users");
let Users = {
    /**
     * 获取全部数据
     */
    getAll: (req, res, next) => {
        res.json({
            title:"我是标题",
            des:"我是描述"
        })
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
module.exports = Users
