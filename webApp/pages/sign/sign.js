// pages/sign.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    select:false,
    selectdata:'车辆类型',
    phone:"",
    text:'获取验证码',
    disabled:false,
    currentTime:60,
    check:false,
  },
  //获取手机号
  getPhone:function (e){
    this.setData({
      phone:e.detail.value
    })
  },
  // 获取验证码
  getCode:function (){
    var that = this;
    that.setData({
      disabled:true,
      bgcolor:'#ccc',
    });
    var phone = that.data.phone;
    var currentTime = that.data.currentTime;
    var warn = null;
    if(phone == ''){
      warn = '手机号不能为空'
    }
    else if (phone.trim().length != 11 || ! /^(14[0-9]|13[0-9]|15[0-9]|17[0-9]|18[0-9])\d{8}$$/.test(phone)){
      warn = '手机号格式不正确'
    }
    else{
      // 提示验证码发送
      wx.showToast({
        title: '短信验证码已发送',
        icon:'none',
        duration:2000
      });
      // 一分钟倒计时
      var interval = setInterval(function(){
        currentTime--;
        that.setData({
          text:currentTime + 's后重新获取',
        });
        if(currentTime <= 0){
          clearInterval(interval);
          that.setData({
            text:'重新发送',
            currentTime:60,
            disabled:false,
            bgcolor:'#2c2e7e',
          })
        }
      },1000);
    };
    //提示完之后一定要让按钮为可用状态
    if (warn != null) {
      wx.showModal({
        title: '提示',
        content: warn
      })
      that.setData({
        disabled: false,
        bgcolor: '#2c2e7e',
      })
      return;
    };
  },
  // 下拉框
  showMsg:function () {
    this.setData({
      select:!this.data.select
    })
  },
  mySelect:function (e){
    var name = e.target.dataset.name;
    this.setData({
      selectdata:name,
      select:false,
    })
  },
  //同意授权
  check:function(){
    this.setData({
      check:!this.data.check
    })
  },
  // form提交数据
  formSubmit: function (e) {
    var that = this;
    let {phone} = e.detail.value;
    let {code} = e.detail.value;
    var carclass = that.data.selectdata;
    let {carNumber} = e.detail.value;
    var checked = that.data.check;
    this.setData({
      isSubmit: true,
      phone,
      code,
      carclass,
      carNumber,
    });
    var phoneReg= /^1(3|4|5|7|8)\d{9}$/;
    var carnumReg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/;
    if ( phone.length == "0" ) {
      this.setData({
        isSubmit: true
      });
      wx.showToast({
        title: '手机号为空',
        icon: 'none',
        duration: 2000
      });
      return;
    }
    if (!phoneReg.test(phone)){
      this.setData({
        isSubmit: true
      });
      wx.showToast({
        title: '手机号格式错误',
        icon: 'none',
        duration: 2000
      });
      return;
    }
    if( code.length == '0'){
      this.setData({
        isSubmit:true
      });
      wx.showToast({
        title: '验证码为空',
        icon: 'none',
        duration: 2000
      });
      return;
    }
    if (carclass == '车辆类型') {
      this.setData({
        isSubmit: true
      })
      wx.showToast({
        title: '请选择车辆类型',
        icon: 'none',
        duration: 2000
      });
      return;
    }
    if (carNumber.length == '0') {
      this.setData({
        isSubmit: true
      });
      wx.showToast({
        title: '车牌号为空',
        icon: 'none',
        duration: 2000
      });
      return;
    }
    if(!carnumReg.test(carNumber)){
      this.setData({
        isSubmit: true
      });
      wx.showToast({
        title: '车牌号格式错误',
        icon: 'none',
        duration: 2000
      });
      return;
    }
    if (checked == false){
      this.setData({
        isSubmit: true
      });
      wx.showToast({
        title: '请同意授权',
        icon: 'none',
        duration: 2000
      });
      return;
    }
    console.log(e.detail.value);
    var datas = e.detail.value;
    wx.request({
      url: '',
      method:'POST',
      header: { 'Content-Type': 'application/json' },
      data: 'datas',
      success:function(res){
        if(res.data.status == 0){
          wx.showToast({
            title: res.data.info,
            icon: 'loading',
            duration: 1500
          })
        }
        else{
          wx.navigateTo({
            url: '../index/index',
          })
          // wx.showToast({
          //   title: res.data.info,//这里打印出登录成功
          //   icon: 'success',
          //   duration: 1000
          // })
        }
      },
      fail:function(){
        wx.showToast({
          title: '服务器出错!',
          icon: 'loading',
          duration: 1500
        })
      }
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})