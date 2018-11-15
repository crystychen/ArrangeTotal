//index.js
// 引入npm包
// const package1 = require("miniprogram-datepicker")
// import { datepicker } from 'miniprogram-datepicker'
// const Base64 = require('js-base64').Base64
import { Base64 } from 'js-base64'
console.log(Base64)
const package1 = require('wux-weapp')
console.log(package1)
import {
    postAjax
} from '../../utils/ajax.js';
const utils = require('../../utils/util.js');
const app = getApp() //获取应用实例

Page({
    data: {
        current: "index"
    },
    onLoad: function() {
        let that = this
        console.log(Base64.encode('小铜弹'))
        app.loginGetUserInfo(function(uinfo) {

            that.setData({
                userInfo: uinfo
            })

        })
    },
    // 底部导航切换 
    onTabbarChange({ detail }) {
        console.log('onChange')
            // this.setData({
            //     current: detail.key,
            // })
        if (detail.key == 'index') {
            wx.reLaunch({
                url: '/pages/index/index',
            })
        }
        if (detail.key == 'UI') {
            wx.reLaunch({
                url: '/pages/UI/index',
            })
        }
        if (detail.key == 'news') {
            wx.reLaunch({
                url: '/pages/my/my',
            })
        }
    }
})