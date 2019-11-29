/**
 * create on 2019/11/28 16:48
 * @author   wanghao
 * @purpose
 */
//引入数据库模块
let mongoose = require("mongoose");
let Schema = mongoose.Schema;
//自定义Schema
let orderSchema = new Schema({
    //支付方式  -- 支付宝0、微信1
    payType: {
        type: Number,
        default: 0
    },
    //订单包含商品  --  用','隔开 拼接订单包含的商品ID
    orderGoods: {
        type: Schema.Types.ObjectId,
        ref: 'good'
    },
    //订单配送地址
    address: {
        type: String,
        default: "默认地址111"
    },
    //收件人
    username: {
        type: String,
        default: ""
    },
    // 收件人手机号
    tel: {
        type: String,
        default: ""
    },
    //  创建时间
    create_at: {
        type: Number,
        default: 0
    },
});
//创建model,并实现外部接口 作用的集合为node数据库里的orders(自动加“s”)
let orderModel = mongoose.model("order", orderSchema);
module.exports = orderModel;
