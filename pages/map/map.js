// pages/map/map.js
Page({
  data:{
    markers: [{
      longitude: 114.417186,
      latitude: 30.458722,   
      name: '武汉大学科技园',
      desc: '武汉市江夏区武大园二路武大航域'   
    },{
      longitude: 114.413677,
      latitude: 30.462691,      
      name: '万科城市花园',
      desc: '武汉市江夏区武大园路万科城市花园'
    }],
    covers: [
      {
        longitude: 114.417186,
        latitude: 30.458722,     
        iconPath: '/images/ico1.png',
        rotate: 10
      }, 
      {
        longitude: 114.413677,
        latitude: 30.462691,   
        iconPath: '/images/ico2.png',
        rotate: 90
      }
    ]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})