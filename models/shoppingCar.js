/**
 * create on 2019/11/28 16:48
 * @author   wanghao
 * @purpose
 */
//引入数据库模块
let mongoose = require("mongoose");
let Schema = mongoose.Schema;
//自定义Schema
let shoppingCarSchema = new Schema({
    //购物车商品
    shopGoods: {
        type: Schema.Types.ObjectId,
        ref: 'good'
    },
    // 商品数量
    count:{
        type:Number,
        default: 0
    },
    //  创建时间
    create_at: {
        type: Number,
        default: 0
    },
});
//创建model,并实现外部接口 作用的集合为node数据库里的shoppingCars(自动加“s”)
let shoppingCarModel = mongoose.model("shoppingCar", shoppingCarSchema);
module.exports = shoppingCarModel;
