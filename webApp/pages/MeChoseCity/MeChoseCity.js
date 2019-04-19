// pages/MeChoseCity/MeChoseCity.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    images: {
      imgsrc1: "../image/foot-nav1.png",
      imgsrc2: "../image/foot-nav2.png",
      imgsrc3: "../image/foot-nav3.png",
      imgsrc4: "../image/foot-nav4-2.png",
    },
    location: "北京",
    num:'0',
    hotcity: ['北京', '四川', '成都', '云南', '重庆', '广州', '杭州', '南京', '上海', '深圳', '苏州', '天津'],
    citylist: [
      { "letter": "A", "data": [{ "id": "v7", "cityName": "安庆" }, { "cityName": "鞍山" }, { "cityName": "安阳" }] }, 
      { "letter": "B", "data": [{ "id": "v10", "cityName": "保定" }, { "id": "v4", "cityName": "宝鸡" }, { "id": "v1", "cityName": "包头" }, { "cityName": "北京" }, { "cityName": "蚌埠" }, { "cityName": "毕节" }, { "cityName": "滨州" }] }, 
      { "letter": "C", "data": [{ "id": "v15", "cityName": "沧州" }, { "cityName": "长春" }, { "cityName": "常德" }, { "cityName": "长沙" }, { "cityName": "长治" }, { "cityName": "常州" }, { "cityName": "承德" }, { "cityName": "成都" }, { "cityName": "郴州" }, { "cityName": "重庆" }, { "cityName": "滁州" }] }, 
      { "letter": "D", "data": [{ "id": "v21", "cityName": "大连" }, { "cityName": "丹东" }, { "cityName": "大庆" }, { "cityName": "大同" }, { "cityName": "达州" }, { "cityName": "德阳" }, { "cityName": "德州" }, { "cityName": "东莞" }, { "cityName": "东营" }] }, 
      { "letter": "E", "data": [{ "id": "v17", "cityName": "鄂尔多斯" }, { "id": "v29", "cityName": "恩施" }] }, 
      { "letter": "F", "data": [{ "id": "v9", "cityName": "佛山" }, { "id": "v3", "cityName": "抚顺" }, { "cityName": "阜阳" }, { "cityName": "福州" }] },
      { "letter": "G", "data": [{ "id": "v9", "cityName": "赣州" }, { "id": "v3", "cityName": "广安" }, { "cityName": "广州" }, { "cityName": "桂林" }, { "cityName": "贵阳" }] },
      { "letter": "H", "data": [{ "id": "v9", "cityName": "哈尔滨" }, { "id": "v3", "cityName": "邯郸" }, { "cityName": "杭州" }, { "cityName": "合肥" }, { "cityName": "衡水" }, { "cityName": "衡阳" }, { "cityName": "菏泽" }, { "cityName": "淮安" }, { "cityName": "淮北" }, { "cityName": "黄石" }, { "cityName": "呼和浩特" }, { "cityName": "惠州" }, { "cityName": "湖州" }] },
      { "letter": "J", "data": [{ "id": "v9", "cityName": "佳木斯" }, { "id": "v3", "cityName": "吉安" }, { "cityName": "江门" }, { "cityName": "焦作" }, { "cityName": "嘉兴" }, { "cityName": "吉林" }, { "cityName": "济南" }, { "cityName": "荆门" }, { "cityName": "荆州" }, { "cityName": "金华" }, { "cityName": "济宁" }, { "cityName": "晋中" }, { "cityName": "锦州" }, { "cityName": "九江" }] },
      { "letter": "K", "data": [{ "id": "v13", "cityName": "开封" }, { "cityName": "昆明" }] }, 
      { "letter": "L", "data": [{ "id": "v24", "cityName": "廊坊" }, { "id": "v20", "cityName": "兰州" }, { "id": "v14", "cityName": "乐山" }, { "cityName": "连云港" }, { "cityName": "聊城" }, { "cityName": "辽阳" }, { "cityName": "临汾" }, { "cityName": "临沂" }, { "cityName": "丽水" }, { "cityName": "六盘水" }, { "cityName": "柳州" }, { "cityName": "龙岩" }, { "cityName": "娄底" }, { "cityName": "六安" }, { "cityName": "洛阳" }, { "cityName": "泸州" }] }, 
      { "letter": "M", "data": [{ "id": "v13", "cityName": "马鞍山" }, { "cityName": "眉山" }, { "cityName": "绵阳" }, { "cityName": "牡丹江" }] }, 
      { "letter": "N", "data": [{ "id": "v27", "cityName": "南昌" }, { "cityName": "南充" }, { "cityName": "南京" }, { "cityName": "南宁" }, { "cityName": "南通" }, { "cityName": "南阳" }, { "cityName": "内江" }, { "cityName": "宁波" }, { "cityName": "宁德" }] }, 
      { "letter": "P", "data": [{ "id": "v18", "cityName": "平顶山" }, { "id": "v2", "cityName": "莆田" }, { "cityName": "濮阳" }] }, 
      { "letter": "Q", "data": [{ "id": "v18", "cityName": "青岛" }, { "id": "v2", "cityName": "清远" }, { "cityName": "秦皇岛" }, { "cityName": "齐齐哈尔" }, { "cityName": "泉州" }, { "cityName": "曲靖" }, { "cityName": "衢州" }] }, 
      { "letter": "R", "data": [{ "id": "v5", "cityName": "日照" }] }, 
      { "letter": "S", "data": [{ "id": "v18", "cityName": "上海" }, { "id": "v2", "cityName": "商丘" }, { "cityName": "汕头" }, { "cityName": "绍兴" }, { "cityName": "邵阳" }, { "cityName": "沈阳" }, { "cityName": "深圳" }, { "cityName": "石家庄" }, { "cityName": "十堰" }, { "cityName": "遂宁" }, { "cityName": "宿迁" }, { "cityName": "苏州" }, { "cityName": "宿州" }] }, 
      { "letter": "T", "data": [{ "id": "v5", "cityName": "泰安" }, { "cityName": "太原" }, { "cityName": "台州" }, { "cityName": "泰州" }, { "cityName": "唐山" }, { "cityName": "天津" }, { "cityName": "铜陵" }] }, 
      { "letter": "W", "data": [{ "id": "v12", "cityName": "潍坊" }, { "id": "v25", "cityName": "威海" }, { "cityName": "渭南" }, { "cityName": "温州" }, { "cityName": "武汉" }, { "cityName": "芜湖" }, { "cityName": "乌鲁木齐" }, { "cityName": "无锡" }] }, 
      { "letter": "X", "data": [{ "id": "v23", "cityName": "厦门" }, { "id": "v28", "cityName": "西安" }, { "id": "v19", "cityName": "湘潭" }, { "cityName": "襄阳" }, { "cityName": "咸宁" }, { "cityName": "孝感" }, { "cityName": "邢台" }, { "cityName": "新乡" }, { "cityName": "信阳" }, { "cityName": "宣城" }, { "cityName": "许昌" }, { "cityName": "徐州" }] }, 
      { "letter": "Y", "data": [{ "id": "v23", "cityName": "盐城" }, { "id": "v28", "cityName": "扬州" }, { "id": "v19", "cityName": "烟台" }, { "cityName": "宜宾" }, { "cityName": "宜昌" }, { "cityName": "宜春" }, { "cityName": "银川" }, { "cityName": "营口" }, { "cityName": "益阳" }, { "cityName": "岳阳" }, { "cityName": "运城" }] }, 
      { "letter": "Z", "data": [{ "id": "v8", "cityName": "枣庄" }, { "cityName": "漳州" }, { "cityName": "湛江" }, { "cityName": "肇庆" }, { "cityName": "郑州" }, { "cityName": "镇江" }, { "cityName": "中山" }, { "cityName": "珠海" }, { "cityName": "驻马店" }, { "cityName": "株洲" }, { "cityName": "淄博" }, { "cityName": "自贡" }, { "cityName": "资阳" }, { "cityName": "遵义" }] }
      ],
    letter: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"], 
    LetterNum:'0',
    scrollTop:'0',
    cityListId:'',
    windowHeight:0,
    cityval:'',
  },
  //热门城市选择
  cityTap: function(e){
    var hotcity = e.currentTarget.dataset.val;
    var index = e.currentTarget.dataset.id;
    // console.log(hotcity, index);
    this.setData({
      location:hotcity,
      num:index,
    })
  },
  //所有城市选择
  city:function(e){
    var hotcity = e.currentTarget.dataset.val;
    // console.log(hotcity, index);
    this.setData({
      location: hotcity,
      num:0
    })
  },
  letterTap:function(e){
    var index = e.currentTarget.dataset.item;
    var item = e.currentTarget.dataset.id;
    console.log(index,item);
    this.setData({
      LetterNum: index,
      cityListId:item,
    })
  },
  onPageScroll:function(ev){
    var top = ev.scrollTop;
    // console.log(top);
    this.setData({
      scrollTop:top
    })
  },
  //搜索
  //输入时搜索、点击搜索
  search:function(e){
    this.setData({
      cityval:e.detial.value
    })
  },
  //软键盘搜索
  confirm:function(e){
    this.search(e.detial.val)
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
