// pages/enter/enter.js
const Common = require("../../utils/common.js")
import {
  login, //登录
} from "../../utils/request.js"
Page({
    /**
     * 页面的初始数据
     */
    data: {
        name:"0",
        account:'',
        password:'',
    },
    bindPasswordInput: function (e) {
      this.setData({
        password: e.detail.value
      })
    },
    bindAccountInput: function (e) {
      this.setData({
        account: e.detail.value
      })
    },
    submitFrom(){
      console.log(this.data.account);
      if(this.data.account==''||this.data.account==null){
        wx.showToast({
          title: '账号不能为空!',
          icon:"error",
          duration:1500,
        })
        return;
      }
      if(!Common.CheckPhoneNumberRule(this.data.account)){
        wx.showToast({
          title: '账号格式不正确!',
          icon:"error",
          duration:1500,
        })
        return;
      }
      if(this.data.password==''||this.data.password==null){
        wx.showToast({
          title: '密码不能为空!',
          icon:"error",
          duration:1500,
        })
        return;
      }
      login(this,this.data.account,this.data.password).then(res=>{
          wx.setStorageSync('userInfo', res);
            wx.reLaunch({
              url: '/pages/home/home'
            })
      });
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