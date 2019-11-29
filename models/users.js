/**
 * create on 2019/11/28 16:48
 * @author   wanghao
 * @purpose
 */
//引入数据库模块
let mongoose = require("mongoose");
let Schema = mongoose.Schema;
//自定义Schema
let usersSchema = new Schema({
    //用户名
    username: {
        type: String,
        default: ""
    },
    //用户密码
    password: {
        type: String,
        default: ""
    },
    //昵称
    nickname: {
        type: String,
        default: "没有设置昵称"
    },
     //头像
    avatar: {
        type: String,
        default: ""
    },
    //个性签名
    des: {
        type: String,
        default: "这个人很懒，没有设置签名"
    },
    // 手机号
    tel: {
        type: String,
        default: "这个人很懒，没有留下联系方式"
    },
    // 管理员
    admin: {
        type: Boolean,
        default: false
    },
    //  创建时间
    create_at: {
        type: Number,
        default: 0
    },
});
//创建model,并实现外部接口 作用的集合为node数据库里的users(自动加“s”)
let usersModel = mongoose.model("user", usersSchema);
module.exports = usersModel;
