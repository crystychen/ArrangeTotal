//index.js
import {
    postAjax
} from '../../utils/ajax.js';
import data from '../../utils/addrdata.js';
const utils = require('../../utils/util.js');
const app = getApp() //获取应用实例

Page({
    data: {
        current: "news",
        addressOptions: data   // 地址数据
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
    },
    // 选择我的地址
    onChooseAddress() {
        this.setData({ addrboardVisible: true })
    },
    onCloseAddrBoard() {
        this.setData({ addrboardVisible: false })
    },
    onChangeAddress(e) {
        this.setData({ myAddress: e.detail.options.map((n) => n.label).join(' ') })
        console.log('onChangeAddress', e.detail)
    },

})