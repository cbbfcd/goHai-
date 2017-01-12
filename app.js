/**
 * @description 注册程序 App()函数
 * @author 黄腾
 * @time 2017-1-10
 */

//在全局APP中导入工具类类
const wechat = require("./utils/wechat.js")
const douban = require("./utils/douban.js")
App({
  onLaunch: function () {
    wx.redirectTo({
      url: 'pages/board/board'
    })
    console.log("APP初始化完成")
  },
  globalData: {
    developer:'黄腾',
    appName:'goHai',
    description:'寻找成都周边的活动',
    city:'成都',
    cityID:'118318',
    version:'v1.0.0'
  },
  wechat: wechat,
  douban: douban
})