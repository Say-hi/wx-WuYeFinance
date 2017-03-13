// 获取全局应用程序实例对象
// const app = getApp()
var tcity = require('../../utils/citys.js')
// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
  data: {
    title: '个人中心统一跳转显示页面',
    // 用户信息
    userInfo: {
      'userId': '123'
    },
    certificationList: ['实名认证', '手机号认证', '芝麻信用认证'],
    genderIndex: 0,
    genderArray: ['男', '女'],
    cardIndex: 0,
    cardArray: ['无', '有'],
    // 三级联动
    provinces: [],
    province: '北京',
    citys: [],
    city: '北京市',
    countys: [],
    county: '朝阳区',
    value: [0, 0, 0],
    values: [0, 0, 0],
    condition: false
  },
  // picker选择出发函数
  bindGenderChange (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      genderIndex: e.detail.value
    })
  },
  bindCardChange (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      cardIndex: e.detail.value
    })
  },
  // 表单提交触发函数
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },
  formReset: function () {
    console.log('form发生了reset事件')
  },
  // 地区三级联动显示 -s
  bindChange: function (e) {
    var val = e.detail.value
    var t = this.data.values
    var cityData = this.data.cityData
    if (val[0] !== t[0]) {
      const citys = []
      const countys = []
      for (let i = 0; i < cityData[val[0]].sub.length; i++) {
        citys.push(cityData[val[0]].sub[i].name)
      }
      for (let i = 0; i < cityData[val[0]].sub[0].sub.length; i++) {
        countys.push(cityData[val[0]].sub[0].sub[i].name)
      }
      this.setData({
        province: this.data.provinces[val[0]],
        city: cityData[val[0]].sub[0].name,
        citys: citys,
        county: cityData[val[0]].sub[0].sub[0].name,
        countys: countys,
        values: val,
        value: [val[0], 0, 0]
      })
      return
    }
    if (val[1] !== t[1]) {
      const countys = []
      for (let i = 0; i < cityData[val[0]].sub[val[1]].sub.length; i++) {
        countys.push(cityData[val[0]].sub[val[1]].sub[i].name)
      }
      this.setData({
        city: this.data.citys[val[1]],
        county: cityData[val[0]].sub[val[1]].sub[0].name,
        countys: countys,
        values: val,
        value: [val[0], val[1], 0]
      })
      return
    }
    if (val[2] !== t[2]) {
      this.setData({
        county: this.data.countys[val[2]],
        values: val
      })
      return
    }
  },
  open: function () {
    this.setData({
      condition: !this.data.condition
    })
  },
  // 三级联动 -e
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad (params) {
    // 获取跳转路劲参数
    this.setData({
      title: params.title
    })
    console.log(params)
    // 设置标题
    wx.setNavigationBarTitle({
      title: this.data.title
    })
    // 三级联动初始化
    var that = this
    // todo 后台返回数据
    tcity.init(that)
    var cityData = that.data.cityData
    const provinces = []
    const citys = []
    const countys = []
    for (let i = 0; i < cityData.length; i++) {
      provinces.push(cityData[i].name)
    }
    for (let i = 0; i < cityData[0].sub.length; i++) {
      citys.push(cityData[0].sub[i].name)
    }
    for (let i = 0; i < cityData[0].sub[0].sub.length; i++) {
      countys.push(cityData[0].sub[0].sub[i].name)
    }
    that.setData({
      'provinces': provinces,
      'citys': citys,
      'countys': countys,
      // 'province': cityData[0].name,
      // 'city': cityData[0].sub[0].name,
      // 'county': cityData[0].sub[0].sub[0].name
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady () {
    // TODO: onReady
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow () {
    // TODO: onShow
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide () {
    // TODO: onHide
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload () {
    // TODO: onUnload
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh () {
    // TODO: onPullDownRefresh
  }
})
