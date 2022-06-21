// pages/mine/mine.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      user:null,
       Listag:[
           {
            id:1,
            imgersssd:"../../images/mine/leftImag.png",
            conten:"朋友圈收藏",
            imgersssd2:"../../images/mine/rigIcon.png",
           },
           {
            id:2,
            imgersssd:"../../images/mine/leftImag2.png",
            conten:"话术收藏",
            imgersssd2:"../../images/mine/rigIcon.png",
           },
           {
            id:3,
            imgersssd:"../../images/mine/leftImag3.png",
            conten:"在线客服",
            imgersssd2:"../../images/mine/rigIcon.png",
           },
           {
            id:4,
            imgersssd:"../../images/mine/leftImag4.png",
            conten:"投诉建议",
            imgersssd2:"../../images/mine/rigIcon.png",
           },
       ]
    },
    navTo: async function(e){
       let index = e.currentTarget.dataset.index
       switch(index){
        case 1:
            wx.navigateTo({
              url: '/pages/talkcollect/talkcollect',
            })
             break;
        case 3:
           wx.navigateTo({
             url: '/pages/feedback/feedback',
           })
            break;
       }
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
      var user = wx.getStorageSync('userInfo');
      this.setData({
        user:user
      });
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})