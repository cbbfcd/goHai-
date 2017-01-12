/**
 * @description 包装类 获取同城活动数据
 * @author 黄腾
 * @time 2017-1-10
 */

//引入fetch
const fetch = require("fetch.js")

//api根路径
const API = "https://api.douban.com/v2"

//包装fetch方法
function fetchAPI(url,params){
    return fetch(API,url,params)
}

//获取同城活动的数据
function getEventList(url,params){
    return fetchAPI(url,params).then(res => res.data.events)
}

module.exports = {
    getEventList:getEventList,
    fetchAPI:fetchAPI
}

