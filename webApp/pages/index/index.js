//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    images: {
      imgsrc1: "../image/foot-nav1-2.png",
      imgsrc2: "../image/foot-nav2.png",
      imgsrc3: "../image/foot-nav3.png",
      imgsrc4: "../image/foot-nav4.png",
    },
    location:"北京",
    locationTxt:"今日限行6和8",
    imgUrls:[
      "../image/img1.jpg",
      "../image/img2.jpg",
      "../image/img3.jpg",
    ],
    indicatorDots:true,
    autoplay:true,
    interval:5000,
    duration:1000,
    msgList:[
      { static: "兴隆加油站", price1: "7.86", price2: "6.86" },
      { static: "金耀加油站", price1: "7.86", price2: "6.86" },
      { static: "利安顺加油站", price1: "7.86", price2: "6.86" },
      { static: "天兴加油站", price1: "7.86", price2: "6.86" }
    ],
    selldata: [
      {
        src: "../image/sell1.png",
        title: "优惠套餐",
        des: "环境开发公司股份分隔封号对手",
        price: "200.00",
        inte: "50",
      },
      {
        src: "../image/sell1.png",
        title: "健康套餐",
        des: "环境开发公司股份分隔封号对手",
        price: "100.00",
        inte: "50",
      },
      {
        src: "../image/sell1.png",
        title: "麻辣小龙虾",
        des: "环境开发公司股份分隔封号对手",
        price: "20.00",
        inte: "50",
      },
      {
        src: "../image/sell1.png",
        title: "旅行洗漱5件套",
        des: "环境开发公司股份分隔封号对手",
        price: "19.9",
        inte: "50",
      }
    ],
  },

  //事件处理函数
  bindViewTap: function() {
   
  },
  onLoad: function () {

  },

  //跳转城市页面
  ChoseCity:function(){
    wx.navigateTo({
      url: '../MeChoseCity/MeChoseCity',
    })
  },
  // 扫一扫
  scan:function(){
    console.log("扫一扫");
    wx.scanCode({
      success:function(res){
        wx.navigateTo({
          url: '/pages/refuel/refuel',
        })
      },
      fail:function(res){
        wx.showToast({
          title: '服务器出错!',
          icon: 'loading',
          duration: 1500
        })
      }
    })
  }
})
