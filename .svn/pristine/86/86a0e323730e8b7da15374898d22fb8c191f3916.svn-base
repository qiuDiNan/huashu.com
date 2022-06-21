const baseUrl = "http://huashu.gzsent.com/app/index.php?i=2&t=2&v=4.1&from=wxapp&c=entry&a=wxapp&sign=ca5052c718bbe1949e081c33a7925483&m=miao_lalms";
/**request 基础函数 */
/**
 * @url：api地址
 * @data：api参数
 * @that：当前页环境变量
 * @loading：是否展示naviBar加载
 * @method：request方法
 * @errorHint：当请求返回异常结果时，是否抛出提示
 * @skeleton: 是否显示骨架屏
 */
function getResult(url, data, that, loading = false, method = "GET") {
  var user = wx.getStorageSync('userInfo');
  if(user){
    url = url+"&account="+user.account;
  }
  return new Promise((resolve, reject) => {
    if (loading) {
      wx.showNavigationBarLoading()
    }
    wx.request({
      url: url,
      data: data,
      method: method,
      success(res) {
        requestSuccess(that, url, res, loading).then(res => {
          resolve(res)
        }).catch(res => {
          reject(res)
        })
      },
      fail(e) {
        console.log("+++");
        that.setData({
          pending: false,

        })
        //网络请求失败
        requestFail(that, e.errMsg, loading)
      }
    })
  })
}

/**request请求成功 */
function requestSuccess(that, url, res, loading = true) {
  return new Promise((resolve, reject) => {
    let code = res.data.errno //状态字
    let errMsg = res.errMsg //错误信息
    let result = res.data.data //结果对象
    if (code == 0) { //成功返回
      if (loading) {
        wx.hideNavigationBarLoading()
      }
      resolve(result)
    } else if (code == -1) {
      errMsg = res.data.msg //错误信息
      wx.showToast({
        title: errMsg,
      });
      reject(errMsg)
    } else { //返回失败  //if(code == 500)
      if (loading) {
        wx.hideNavigationBarLoading()
      }
      if (res.statusCode == 404) {
        errMsg = `无法访问`
        wx.showToast({
          title: errMsg,
          icon:"error"
        });
      } else if (res.statusCode == 403) {
        wx.showToast({
          title: "请先登录!",
          icon:"error",
          duration:1000,
        });
        setTimeout(() => {
          wx.navigateTo({
            url: '/pages/login/login',
          })
        }, 1000);
      }
    }
  })
}
/**request请求失败 */
function requestFail(that, errMsg, loading = true) {
  //网络请求失败
  let pages = getCurrentPages()
  let currPage = pages[pages.length - 1]
  if (currPage.route != "pages/scene/scene") {
    if (loading) {
      wx.hideNavigationBarLoading()
    }
    wx.showToast({
      title: "网络请求失败",
    });
  }
}
/**
 * 登录
 */
function login(that,account,password) {
  return new Promise(resolve => {
    const url = baseUrl+"&do=login&account="+account+"&password="+password;
    getResult(url, {}, that).then(res => {
      resolve(res)
    })
  })
}
/**
 * 首页
 */
function index(that) {
  return new Promise(resolve => {
    const url = baseUrl+"&do=index";
    getResult(url, {}, that).then(res => {
      resolve(res)
    })
  })
}
/**
 * 热搜
 */
function hotSearch(that) {
  return new Promise(resolve => {
    const url = baseUrl+"&do=hotSearch";
    getResult(url, {}, that).then(res => {
      resolve(res)
    })
  })
}
/**
 * 反馈
 */
function storeFeedback(that,phone,reason) {
  return new Promise(resolve => {
    var user = wx.getStorageSync('userInfo');
    const url = baseUrl+"&do=storeFeedback&phone="+phone+"&reason="+reason+"&account="+user.account;
    getResult(url, {}, that).then(res => {
      resolve(res)
    })
  })
}

module.exports = {
  login: login, //登录
  index: index, //首页
  hotSearch: hotSearch, //热搜
  storeFeedback: storeFeedback, //热搜
}