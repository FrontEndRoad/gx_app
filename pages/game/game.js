var app = getApp()
Page({
  data: {
    defaultSize: "mini",
    loading: false,
    plain: false,
    disabled: false,
    lists: []
  },
  page: 1,
  msg: [],
  flag: true,
  getData: function(page){
      var ths = this;
      if(ths.flag){
        ths.flag = false;
        wx.request({
          url: 'http://phptest.guoxinad.com.cn/insun_mediawap/index.php?ac=more', //仅为示例，并非真实的接口地址
          method: 'POST',
          data: {
            more: 3,
            page: page
          },
          header: {
              //'content-type': 'application/json'      适用于get请求，对于post无效
              'content-type': 'application/x-www-form-urlencoded'
          },
          success: function(res) {
            if(res.data.result){
              var msg = res.data.list;
              if(msg.length>0){

                for(var i=0; i<msg.length; i++){
                  ths.msg.push(msg[i]);
                }

                ths.setData({
                  lists: ths.msg
                })

                ths.flag = true;
              }else{
                console.log('没有数据了！');
                ths.flag = false;
              }
            }else{
              console.log('数据加载失败！');
            }
          },
          fail: function(){
            console.log('数据加载失败！');
          }
        })
        
      }
  },
  getMore: function(){
    var ths = this;
    ths.page++;
    ths.getData(ths.page);
  },
  onLoad: function(){
    this.getData(this.page);      
  }
})