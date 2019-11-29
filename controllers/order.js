/**
 * create on 2019/11/28 16:41
 * @author   wanghao
 * @purpose
 */
let orderModal = require("../models/order");
let Order = {
    /**
     * 获取全部数据
     */
    getAll: (req, res, next) => {
        orderModal.find().then(data => {
            res.json({
                status: 1,
                msg: '全部订单查找成功！',
                data:data
            })
        }).catch(err => {
            res.json({
                status: 0,
                msg: '查找失败！'
            })
        })
    },
    /**
     * 获取单个数据
     */
    getOne: (req, res, next) => {
        let id = req.params.id;
        orderModal.findOne({
            _id:id
        }).then(data => {
            res.json({
                status: 1,
                msg: '单个订单查找成功！',
                data:data
            })
        }).catch(err => {
            res.json({
                status: 0,
                msg: '查找失败！'
            })
        })
    },
    /**
     * 添加数据
     */
    add: (req, res, next) => {
        let modal = new orderModal({
            username: req.body.username,
            password: req.body.password,
            create_at: new Date().getTime()
        });
        modal.save().then(data => {
            res.json({
                status: 1,
                msg: '注册成功！'
            })
        }).catch(err => {
            res.json({
                status: 0,
                msg: '注册失败！'
            })
        })
    },
    /**
     * 删除单个数据
     */
    delete: (req, res, next) => {
        let id = req.params.id;
        orderModal.remove({
            _id: id
        }).then(data => {
            res.json({
                status: 1,
                msg: '删除成功！'
            })
        }).catch(err => {
            res.json({
                status: 0,
                msg: '删除失败！'
            })
        })
    },
    /**
     * 更新数据
     */
    update: (req, res, next) => {
        let id = req.params.id;
        orderModal.update({_id: id}, {
                nickname: req.body.nickname,
                // avatar未处理
                avatar: "",
                des: req.body.des,
                admin: req.body.admin,
                tel: req.body.tel,
            }
        ).then(data => {
            orderModal.findOne({_id: id}).then(data => {
                res.json({
                    status: 1,
                    msg: '更新成功！'
                })
            })
        }).catch(err => {
            res.json({
                status: 0,
                msg: '更新失败！'
            })
        })
    },
}
module.exports = Order
