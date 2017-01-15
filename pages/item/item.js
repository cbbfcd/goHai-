/**
 * @description 活动详情页
 * @author 黄腾
 * @time 2017-1-10
 */

const app = getApp()

Page({
  data:{
    loading:true,
    title:'活动详情',
    time:'活动时间',
    location:'活动地点',
    text3:'活动详情'
  },
  onLoad:function(options){
    app.douban.getEvent(options.id).then(res =>{
      // let address = []
      // address.push((res.address+"").split(" ")[0])
      // address.push((res.address+"").split(" ")[1])
      // Array.prototype.join.call(address," ")
      this.setData({
        eventData:res
      })
    }).catch(err =>{
      wx.showToast({
        title:'获取失败'
      })
    })
  },
  onReady:function(){
    // 页面渲染完成
    app.wechat.setNavigatorTitle(this.data.title).then(res=>res)
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
  getLoc:function(){
    wx.showToast({
      title:'别点了，不告诉你'
    })
  },
  onShareAppMessage:function(){
    return {
      title:this.data.eventData.title,
      desc:'活动分享',
      path:'www.baidu.com'
    }
  }
})