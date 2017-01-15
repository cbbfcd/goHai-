/**
 * @description map
 * @author 黄腾
 * @time 2017-1-10
 */
const app = getApp()
Page({
  data:{
    title:'map'
  },
  onLoad:function(options){
    //获取你当前的位置
    app.wechat.getUserLocation().then(res=>{
      var loc_str = options.jwd+"";
      this.setData({
        jd:loc_str.split(" ")[1],
        wd:loc_str.split(" ")[0],
        markers:[{
            latitude:  parseFloat(loc_str.split(" ")[0]),
            longitude: parseFloat(loc_str.split(" ")[1]),
            iconPath:"/imgs/10.png",
            title:options.loc,
            name:options.loc,
            width:50,
            height:50
        }],
        circles:[{
            latitude:  parseFloat(loc_str.split(" ")[0]),
            longitude: parseFloat(loc_str.split(" ")[1]),
            radius:300,
            fillColor:"#F5F5F500",
            color:"#0000CDAA"
        }],
        polyline:[{
          points:[{
            latitude:res.latitude,
            longitude:res.longitude          
            },{
            latitude:  parseFloat(loc_str.split(" ")[0]),
            longitude: parseFloat(loc_str.split(" ")[1])
            }],
            color:"#F32756AA"
        }]
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
  }
})