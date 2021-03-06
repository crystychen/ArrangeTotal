// pages/UI/index.js
const app =  getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    buttons: [{
      openType: 'getUserInfo',
      label: 'GetUserInfo',
      icon: "/images/order_icon.png",
  },
  {
      openType: 'share',
      label: 'Share',
      icon: "/images/we-chat.png",
  },
  {
      openType: 'contact',
      label: 'Contact',
      icon: "/images/contact_icon.png",
  },
  {
      label: 'View on Demo',
      icon: "/images/run_icon.png"      
  },
],
    position: 'topRight',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    app.loginGetUserInfo(function (uinfo) {
      
      that.setData({
        userInfo: uinfo
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

  },
  // 跳转小程序
  navigateToMini () {
    
    wx.navigateToMiniProgram({
      appId: 'wx9ddb22fc5fee2755',
      path: 'page/index/index',
      envVersion: 'release',
      success(res) {
        // 打开成功
        wx.showToast({
            title: "成功打开小程序",
            icon: "none"
        })
      }
    })
  },
  // 浮动按钮改变事件
  onChange (e) {
    console.log("onChange", e)
  },
  onClick (e) {
    console.log(e)
    if (e.detail.index === 3) {
      wx.switchTab({
          url: '/pages/index/index'
      })
  }
  }
})