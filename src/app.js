/**
 * API module
 * @type {Object}
 * 用于将微信官方`API`封装为`Promise`方式
 * > 小程序支持以`CommonJS`规范组织代码结构
 */
const wechat = require('./utils/wechat')
const Promise = require('./utils/bluebird')

App({
  /**
   * Global shared
   * 可以定义任何成员，用于在整个应用中共享
   */
  data: {
    name: '五叶金融小程序',
    version: '0.1.0',
    userInfo: null,
    // carousel -s
    carousel: {
      circular: true,
      indicatorDots: false,
      atuoplay: true,
      current: 0,
      interval: 5000,
      duration: 500,
      imageModel: 'aspectFit',
      images: ['../../images/carousel-1.png', '../../images/carousel-2.png', '../../images/carousel-1.png']
    }
    // carousel -e
  },

  // 不是只能定义`data`，别的也可以
  other: 'other variables',

  carouselChange (e, that) {
    that.setData({
      carouselCurrent: e.detail.current
    })
  },
  /**
   * 获取用户信息
   * @return {Promise} 包含获取用户信息的`Promise`
   */
  getUserInfo () {
    return new Promise((resolve, reject) => {
      if (this.data.userInfo) return reject(this.data.userInfo)
      wechat.login()
        .then(() => wechat.getUserInfo())
        .then(res => res.userInfo)
        .then(info => (this.data.userInfo = info))
        .then(info => resolve(info))
        .catch(error => console.error('failed to get user info, error: ' + error))
    })
  },
  /**
   * 关注功能
   * @param e {Event} 事件参数
   */
  followfxs (e) {
    // 获取关注对象ID
    var id = e.currentTarget.dataset.id
    console.info('关注对象ID:' + id)
    console.info('关注了该对象')
  },
  /**
   * 关注后的弹窗
   */
  confirmfxs (that) {
    return that.setData({ followHidden: true })
  },
  /**
   * 生命周期函数--监听小程序初始化
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch () {
    console.log(' ========== Application is launched ========== ')
    this.getUserInfo()
  },
  /**
   * 生命周期函数--监听小程序显示
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow () {
    console.log(' ========== Application is showed ========== ')
  },
  /**
   * 生命周期函数--监听小程序隐藏
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide () {
    console.log(' ========== Application is hid ========== ')
  }
})
