// pages/tv_index/tv_index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      domesticList: [],
      varietyShowList: [],
      americanTVList: [],
      loading: true
    },
  
    // 跳转至列表页面
    goDetail(event){
      let _id = event.currentTarget.dataset.id
      wx.navigateTo({
        url: '../tv?id='+_id,
      })
    },
    // 获取国产剧
    getDomestic() {
      return new Promise((resolve, reject) => {
        wx.request({
          url: 'https://m.douban.com/rexxar/api/v2/subject_collection/tv_domestic/items?start=0&count=8',
          success: (res) => {
            this.setData({
              domesticList: res.data
            })
            resolve(res)
          }
        })
      })
  
    },
    // 获取综艺列表
    getVarietyShow() {
      return new Promise((resolve, reject) => {
        wx.request({
          url: 'https://m.douban.com/rexxar/api/v2/subject_collection/tv_variety_show/items?start=0&count=8',
          success: (res) => {
            this.setData({
              varietyShowList: res.data
            })
            resolve(res)
          }
        })
      })
  
    },
    // 获取美剧列表
    getAmericanTV() {
      return new Promise((resolve, reject) => {
        wx.request({
          url: 'https://m.douban.com/rexxar/api/v2/subject_collection/tv_american/items?start=0&count=8',
          success: (res) => {
            this.setData({
              americanTVList: res.data
            })
            resolve(res)
          }
        })
      })
  
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      Promise.all([this.getDomestic(),this.getVarietyShow(),this.getAmericanTV()]).then((res)=>{
        this.setData({
          loading:false
        })
      })
      
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