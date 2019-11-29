/**
 * create on 2019/11/28 16:48
 * @author   wanghao
 * @purpose
 */
//引入数据库模块
let mongoose = require("mongoose");
let Schema = mongoose.Schema;
//自定义Schema
let newsSchema = new Schema({
    // 新闻标题
    title: {
        type: String,
        default: ""
    },
    //  新闻 图片内容
    img: {
        type: String,
        default: ""
    },
    // 新闻 文字内容
    content: {
        type: String,
        default: ""
    },
    // 作者
    author: {
        type: String,
        default: ""
    },
    // 阅读量
    views: {
        type: Number,
        default: 0
    },
    //  创建时间
    create_at: {
        type: Number,
        default: 0
    },

});
//创建model,并实现外部接口 作用的集合为node数据库里的goods(自动加“s”)
let newsModel = mongoose.model("new", newsSchema);
module.exports = newsModel;
