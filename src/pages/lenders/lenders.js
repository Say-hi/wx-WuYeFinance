// 获取全局应用程序实例对象
const app = getApp()

// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
  data: {
    title: null,
    shopList: '123456',
    showInfo: {},
    followHidden: true,
    repayment: ['到时还款', '参考日利率', '最快放款时间'],
    lenderInfo: {
      'active': '推荐商家，通过率较高',
      'apply': '无论阿斯顿发阿斯顿发生大法师打发生大法师打发撒地方撒的发生的发生的发生大事都发的所发生的发的说法说大法师打发斯蒂芬',
      'material': '发阿斯顿发生大法师打发生大法师打发撒地方撒的发生的发生的发生',
      'notice': '信息务必真实'
    }
  },
  // 关注
  followfxs (e) {
    app.followfxs(e)
    // 展示弹窗
    this.setData({
      followHidden: false
    })
  },
  // 关注分析师点击确定后逻辑
  confirmfxs () {
    var that = this
    app.confirmfxs(that)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad (params) {
    // 获取跳转链接的信息
    console.log(params)
    this.setData({
      showInfo: params,
      title: params.title
    })
    // 设置导航栏标题
    console.log(this.data.title)
    wx.setNavigationBarTitle(this.data.showInfo)
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
