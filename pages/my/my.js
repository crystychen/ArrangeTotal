//index.js
import {
    postAjax
} from '../../utils/ajax.js';
const utils = require('../../utils/util.js');
const app = getApp() //获取应用实例

Page({
    data: {
        current: "news"
    },
    onLoad: function() {
        let that = this
        app.loginGetUserInfo(function(uinfo) {

            that.setData({
                userInfo: uinfo
            })
        })
    },
    // 提醒同步
    tomorrowMoneyRemind() {
        postAjax({
            url: 'interfaceAction',
            data: {
                interId: '20005',
                version: 1,
                authKey: wx.getStorageSync('authKey'),
                method: 'user-setting',
                params: {}
            }
        }).then((res) => {
            if (res.data.status == '00') {
                if (res.data.tomorrowMoneyRemind) {
                    this.setData({
                        checked: true
                    })
                } else {
                    this.setData({
                        checked: false
                    })
                }
            }
        })
    },
    // 导航切换
    handleChange({ detail }) {
        console.log(detail)
            // this.setData({
            //   current: detail.key
            // });
        if (detail.key == "orderlist") {
            wx.switchTab({
                url: '/pages/orderlist/orderlist',
            })
        }
        if (detail.key == "record") {
            wx.switchTab({
                url: '/pages/my/my',
            })
        }
        if (detail.key == "concact") {

        }
        if (detail.key == "focus") {
            // 弹窗
        }
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