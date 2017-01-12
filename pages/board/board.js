/**
 * @description 登录页
 * @author 黄腾
 * @time 2017-1-10
 */

//引入全局APP对象对象
const app = getApp()

Page({
  data:{
    //轮播引导页图片
    imgUrls:[
      '../../imgs/6.jpg',
      '../../imgs/5.png',
      '../../imgs/5.jpg'
    ],
    go_url:"../go/gohai"
  },
  startAPP:function(){
    app.wechat.switchTab(this.data.go_url).then(res => {
        res.data
      }).catch(err => {
        console.error(err)
      })
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