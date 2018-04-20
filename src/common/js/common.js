  import axios from 'axios'
  // let domain = 'http://test.api.cn/raffle/service/public' // 后台本地
  // let domain = 'http://test.dsp.raffle.api.cn' // 测试环境
  // let jumpUrl = 'http://test.dsp.admin.cn/login'//测试环境
  let domain = 'http://test.dsp.api.cn/v1' // 线上环境
  let jumpUrl = 'http://console.voiceads.cn/login'
  let requestUrl = {
    adminProductList: `${domain}/fortune/admin/product/adminProductList`,
    industryList:`${domain}/fortune/admin/industry/industryList`,
    adminSwitch:`${domain}/fortune/admin/product/adminSwitch`,
  }
  let utils = {
    request: function (url, params) {
      return new Promise((resolve, reject) => {
        axios.post(url, params)
        .then(res => {
          if (res.data.code == '100000008') {
            window.location.href = jumpUrl
          }
          resolve(res)
        })
        .catch(error => {
          console.log(error)
          reject(error)
        })
      })
    }
  }

  export {
    domain,
    jumpUrl,
    requestUrl,
    utils
  }