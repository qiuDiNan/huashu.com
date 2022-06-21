// pages/complain/complain.js
import{storeFeedback} from "../../utils/request";
const Common = require("../../utils/common.js")
Page({

    /**
     * 页面的初始数据
     */
    data: {
        reason:'',
        phone:'',
    },
    submitFrom(){
        if(this.data.phone==''||this.data.phone==null){
          wx.showToast({
            title: '联系方式不能为空!',
            icon:"none",
            duration:1500,
          });
          return;
        }
        if(!Common.CheckPhoneNumberRule(this.data.phone)){
          wx.showToast({
            title: '联系方式格式不正确!',
            icon:"none",
            duration:1500,
          })
          return;
        }
        if(this.data.reason==''||this.data.reason==null){
          wx.showToast({
            title: '反馈内容不能为空!',
            icon:"error",
            duration:1500,
          })
          return;
        }
        storeFeedback(this,this.data.phone,this.data.reason).then(res=>{
            wx.showToast({
              title: '反馈成功',
              icon:"success",
              duration:1500,
            });
            setTimeout(() => {
                wx.reLaunch({
                url: '/pages/mine/mine'
                })
            }, 1500);
        });
      },
      bindPhoneInput: function (e) {
        this.setData({
              phone: e.detail.value
        });
      },
      bindReasonInput: function (e) {
        this.setData({
          reason: e.detail.value
        })
      },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        
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