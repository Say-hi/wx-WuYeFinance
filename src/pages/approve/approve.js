// 获取全局应用程序实例对象
// const app = getApp()
let url = 'https://chaye.j8j0.com'
// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
  data: {
    title: 'approve',
    image: [],
    btnType: 'warn',
    canUp: true,
    hidden: true
  },
  /**
   * idCard上传
   * @param e
   */
  idcardUp (e) {
    let id = e.currentTarget.dataset.id
    let num = Number(id.slice(-1))
    const that = this
    const obj = {
      'count': 1,
      success (res) {
        that.data.image[num] = res.tempFilePaths[0]
        that.setData({
          image: that.data.image
        })
        // 按钮样式切换
        if (that.data.image.length === 3) {
          that.setData({
            canUp: false,
            btnType: 'primary'
          })
        }
      }
    }
    wx.chooseImage(obj)
  },
  // 提交进行下一步
  upfile (i, filePath, that) {
    const obj = {
      'url': url,
      'name': 'idcard' + i,
      'filePath': filePath[i],
      success (res) {
        // todo 上传结果反馈用户
        setTimeout(() => {
          that.setData({
            hidden: true,
            canUp: true,
            btnType: 'warn'
          })
          // 弹窗提示
          wx.showToast({
            title: '成功',
            icon: 'success',
            mask: true,
            duration: 2000
          })
        }, 5000)
      }
    }
    wx.uploadFile(obj)
  },
  nextsubmit () {
    this.setData({
      hidden: false
    })
    const that = this
    const filePath = this.data.image
    for (var i = 0; i <= 2; i++) {
      this.upfile(i, filePath, that)
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad () {
    // TODO: onLoad
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
