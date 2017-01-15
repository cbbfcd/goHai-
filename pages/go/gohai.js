/**
 * @description 同城活动
 * @author 黄腾
 * @time 2017-1-10
 */


const app = getApp()

Page({
  data:{
    start:0,
    count:200,
    loading:true,
    hasMore:true,
    text:'当前城市 ：成都',
    text1:'类型 时间 地点',
    text3:'更多',
    right:'../../imgs/9.png',
    gourl:'../select/select',
    title:'活动列表',
    types:[
      {id:'music',name:'音乐'},
      {id:'film',name:'电影'},
      {id:'drama',name:'戏剧'},
      {id:'commonweal',name:'公益'},
      {id:'salon',name:"讲座"},
      {id:'exhibition',name:'展览'},
      {id:'party',name:'聚会'},
      {id:'sports',name:'运动'},
      {id:'travel',name:'旅行'},
      {id:'course',name:'课程'}
    ]
  },
  onLoad:function(){
    //获取成都市同城活动的数据
    const params = {
      loc : app.globalData.cityID,
      date_type : 'futrue',
      type : "all",
      start:this.data.start,
      count:this.data.count
    }
    app.douban.getEventList("/event/list",params).then(res =>{
      this.setData({
        loading : false,
        eventList:res,
      })
    }).catch(err =>{
      console.error(err)
    })
  },
  onReady:function(){
    app.wechat.setNavigatorTitle(this.data.title).then(res=>res)
  },
  goCity:function(){
    wx.showToast({
        title: '么闹哈，只有成都',
        duration: 2000
    })
  },
  goSel:function(){
    app.wechat.navigatorTo(this.data.gourl).then(res => {
        res.data
      }).then(res =>{
        app.wechat.setNavigatorTitle(this.data.title).then(res=>{res.data})
      })
  },
  onShareAppMessage:function(){
    return {
      title: '分享功能',
      desc: '这儿没有分享功能哦',
      path: ''
    }

  }
})