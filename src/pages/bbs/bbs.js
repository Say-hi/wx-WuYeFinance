// 获取全局应用程序实例对象
const app = getApp()

// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
  data: {
    title: '贷款论坛',
    // carousel -s
    carousel: {},
    carouselCurrent: 0,
    current: 'one',
    nav: [{
      'src': '../../images/index-nav-1.png',
      'name': '贷款大全'
    },
    {
      'src': '../../images/index-nav-1.png',
      'name': '帮你推荐'
    },
    {
      'src': '../../images/index-nav-1.png',
      'name': '帮你推荐'
    },
    {
      'src': '../../images/index-nav-1.png',
      'name': '帮你推荐'
    }],
  },
  // carousel小图标跟随
  carouselChange (e) {
    let that = this
    app.carouselChange(e, that)
  },
  navChange (e) {
    this.setData({
      current: e.currentTarget.dataset.id
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad () {
    // TODO: onLoad
    // 获取app中的轮播图数据
    this.setData({
      carousel: app.data.carousel
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
