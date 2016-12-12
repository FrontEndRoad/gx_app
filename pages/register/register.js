//index.js
var app = getApp()
Page({
  data: {
    userInfo: {}
  },
  formSubmit: function(e){
    console.log(e)
  },
  formReset: function(e){
    console.log(e)
  },
  onLoad: function(){
    
  },
  onPullDownRefresh () {
    wx.stopPullDownRefresh()
  }
})