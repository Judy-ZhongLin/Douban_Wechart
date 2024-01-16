// pages/index/index.js
Page({
// js页面在console检查，从上往下看，有一些问题是因为前面出错
// 基本数据类型：字符型“   ”，数值型123，未定义undefined, null
// 引用数据类型：数组
    /**
     * 页面的初始数据
     */
    data: {
        // 展示数据的地方尽量放在data里面
        //在里面表示变量
        
        str:"hello world",
        str2:"123",
        str3:undefined,
        // 在js里面长度没有限制
        arr:[1,2,3,4,5,6],
        //根据boo值显示值
        boo:true,
        //对象
        obj:{
            name:"小明",
            age:20,
            speak:function(){
                //特征行为
            }
        }
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})