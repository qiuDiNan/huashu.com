// pages/home/home.js
import {
    index, //首页
    hotSearch,//热搜
  } from "../../utils/request.js"
Page({
    /**
     * 页面的初始数据
     */
    data: {
        brands:[],
        swipes:[
        ],
        hot_search:[
        ],
        recommond_categories:[
        ]
    },
    //获取首页基础数据
    getIndex(){
        index(this).then(res=>{
            this.setData({
                hot_search:res.hot_search,
                brands:res.brands,
                swipers:res.swipers,
                recommond_categories:res.recommond_categories,
            })
        });
    },
    //跳转情话详情
    navTo(event){
        var categoryid = event.currentTarget.dataset.categoryid;
        wx.navigateTo({
            url: '/pages/search/search',
        })
    },
    //换一批热搜
    switchHotSearch(event){
        hotSearch().then(res=>{
            console.log(res);
            this.setData({
                hot_search:res,
            })
        });
    },
    anvForward: async function(){
        
        wx.navigateTo({
            url: '/pages/search/search',
          })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.getIndex();
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