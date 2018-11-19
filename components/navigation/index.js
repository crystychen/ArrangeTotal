Component({
    externalClasses: ['i-class'],
    properties: {
        current: {
            type: String,
            value: '',
            observer: 'changeCurrent'
        },
        color: {
            type: String,
            value: ''
        },
        fixed: {
            type: Boolean,
            value: false
        },
        hasback: {
            type: Boolean,
            value: false
        },
        title: {
            type: String,
            value: ''
        }
    },

    data: {

    },

    methods: {
        // 返回上一级
        NavigateBack() {
            wx.navigateBack()
        }
    }
});