// 获取全局应用程序实例对象
const app = getApp()

// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
  data: {
    title: '借款机构',
    // carousel -s
    carousel: {},
    carouselCurrent: 0,
    rankCurrent: 0,
    // nav -s
    nav: [{
      'src': '../../images/index-nav-1.png',
      'name': '五叶金融A',
      'url': '../lenders/lenders?title=贷款大全',
      'type': 'navigate'
    },
    {
      'src': '../../images/index-nav-1.png',
      'name': '五叶金融B',
      'url': '../lenders/lenders?title=帮你推荐',
      'type': 'navigate'
    },
    {
      'src': '../../images/index-nav-1.png',
      'name': '五叶金融C',
      'url': '../bbs/bbs',
      'type': 'switchTab'
    },
    {
      'src': '../../images/index-nav-1.png',
      'name': '五叶金融D',
      'url': '../lenders/lenders?title=邀请有奖',
      'type': 'navigate'
    },
    {
      'src': '../../images/index-nav-1.png',
      'name': '五叶金融E',
      'url': '../lenders/lenders?title=邀请有奖',
      'type': 'navigate'
    }
    ],
    rankList: ['综合排序', '排序筛选', '贷款类型', '金额选择'],
    // shop模板数据
    shopList: [1, 2],
    secondShopList: [1, 2, 3]
  },
  // carousel小图标跟随
  carouselChange (e) {
    let that = this
    app.carouselChange(e, that)
  },
  rankChange (e) {
    this.setData({
      rankCurrent: e.currentTarget.dataset.id,
      shopList: [1, 2, 3, 4]
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad () {
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
