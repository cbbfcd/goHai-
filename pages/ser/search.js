/**
 * @description 扫描二维码
 * @author 黄腾
 * @time 2017-1-15
 */
const app = getApp()

Page({
  data:{
    imgSrc:'/imgs/15.png'
  },
  onLoad:function(options){
   
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
  },
  scanCode:function(){
    app.wechat.scanCode().then(res=>{
      console.log(res)
      wx.showToast({
        title:res.result
      })
    }).catch(err =>{
      console.log(err)
      wx.showToast({
        title:'扫码失败'
      })
    })
  }
})