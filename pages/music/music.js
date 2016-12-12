//index.js
var app = getApp()
Page({
  onReady: function (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio');
  },
  data: {
    index: 0,
    nameArr: ['龙卷风', '特别的人', '雨一直下', '如果这就是爱情', '长大以后的世界', '一千个伤心的理由'],
    mucArr: [
      {
        name: '龙卷风',
        author: '邓紫棋',
        poster: '/music/1.jpg',
        src: 'http://dongfeng.guoxinad.com.cn/migu_review/music/bg.mp3',
      },
      {
        name: '特别的人',
        author: '方大同',
        poster: '/music/2.jpg',
        src: 'http://dongfeng.guoxinad.com.cn/migu_review/music/bg.mp3',
      },
      {
        name: '雨一直下',
        author: '张宇',
        poster: '/music/3.jpg',
        src: 'http://dongfeng.guoxinad.com.cn/migu_review/music/bg.mp3',
      },
      {
        name: '如果这就是爱情',
        author: '张靓颖',
        poster: '/music/4.jpg',
        src: 'http://dongfeng.guoxinad.com.cn/migu_review/music/bg.mp3',
      },
      {
        name: '长大以后的世界',
        author: '王源',
        poster: '/music/5.jpg',
        src: 'http://dongfeng.guoxinad.com.cn/migu_review/music/bg.mp3',
      },
      {
        name: '一千个伤心的理由',
        author: '张学友',
        poster: '/music/6.jpg',
        src: 'http://dongfeng.guoxinad.com.cn/migu_review/music/bg.mp3',
      }
    ]
  },
  bindPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  }, 
  audioPlay: function () {
    this.audioCtx.play()
  },
  audioPause: function () {
    this.audioCtx.pause()
  },
  audio2: function () {
    this.audioCtx.seek(2)
  },
  audioStart: function () {
    this.audioCtx.seek(0)
  },
  onLoad: function(){
    
  },
  onPullDownRefresh () {
    wx.stopPullDownRefresh()
  }
})
