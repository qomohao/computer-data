/**
 * create on 2019/11/28 16:48
 * @author   wanghao
 * @purpose
 */
//引入数据库模块
let mongoose = require("mongoose");
let Schema = mongoose.Schema;
//自定义Schema
let goodsSchema = new Schema({
    // 商品标题
    title: {
        type: String,
        default: ""
    },
    // 商品图片   逗号隔开
    img: {
        type: String,
        default: ""
    },
    // 商品描述
    des: {
        type: String,
        default: ""
    },
    // 价格
    price: {
        type: Number,
        default: 0
    },
    // 产地
    address: {
        type: String,
        default: "默认产地"
    },
    //  创建时间
    create_at: {
        type: Number,
        default: 0
    },

});
//创建model,并实现外部接口 作用的集合为node数据库里的goods(自动加“s”)
let goodsModel = mongoose.model("good", goodsSchema);
module.exports = goodsModel;
