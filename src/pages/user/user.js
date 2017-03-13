// 获取全局应用程序实例对象
const app = getApp()

// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
  data: {
    title: '个人中心',
    // 用户信息
    userInfo: {},
    userImage: '../../images/user.png',
    userExtension: ['朋友圈推广', '二位码推广', '用户返佣'],
    userList: [
      '个人信息',
      '返佣明细',
      '体现记录',
      '借款历史',
      '关于我们'
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad () {
  // 获取用户信息
    this.data.userInfo = app.data.userInfo
    // 获取用户的余额
    this.data.userInfo.money = 0
    this.data.userInfo.userId = 123
    this.setData({
      userInfo: this.data.userInfo
    })
    console.log(this.data.userInfo)
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
