//index.js
// 引入npm包
// const package1 = require("miniprogram-datepicker")
// import { datepicker } from 'miniprogram-datepicker'
// const Base64 = require('js-base64').Base64
import { Base64 } from 'js-base64'
console.log(Base64)
const package1 = require('wux-weapp')
console.log(package1)
import { $wuxBackdrop } from 'wux-weapp'
import {
    postAjax
} from '../../utils/ajax.js';
const utils = require('../../utils/util.js');
const app = getApp() //获取应用实例

Page({
    data: {
        current: "index",
        spinning: true
    },
    onLoad: function() {
        let that = this
        that.$wuxBackdrop = $wuxBackdrop()
        that.$wuxBackdrop.retain()
            // console.log(Base64.encode('小铜弹'))
        wx.getSystemInfo({
            success: (res) => {
                this.setData({
                    pixelRatio: res.pixelRatio,
                    windowHeight: res.windowHeight,
                    windowWidth: res.windowWidth
                })
            }
        })
        app.loginGetUserInfo(function(uinfo) {

            that.setData({
                userInfo: uinfo
            })
            setTimeout(function() {
                that.setData({
                    spinning: false
                })
                that.$wuxBackdrop.release()
            }, 500)
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
    },
    // 拖动
    moveChange(e) {
        console.log(e.detail)
        if (e.detail.source == "touch-out-of-bounds") {

        }
        if (e.detail.source == "out-of-bounds") {
            this.setData({
                x: 0,
                y: 0
            })
        }
    }
})