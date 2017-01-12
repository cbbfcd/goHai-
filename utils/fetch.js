/**
 * @description 工具函数 发送请求
 * @author 黄腾
 * @time 2017-1-10
 */

const Promise = require('bluebird.js')

module.exports = function(api,url,params){
    return new Promise((resolve,reject)=>{
        wx.request({
          url: `${api}/${url}`,
          data: Object.assign({}, params),
          method: 'GET',
          header: { 'Content-Type': 'json' },
          success: function(res){
            resolve(res)
          },
          fail: function(err) {
            reject(err)
          }
        })
    })
}