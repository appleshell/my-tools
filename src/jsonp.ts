// jsonp，利用script标签src进行请求，可以解决跨域问题，但是只能发送get请求
// 参考：https://www.jianshu.com/p/e1e2920dac95

function jsonp({url, params, callbackName}) {
  // 拼接请求URL
  const generateUrl = () => {
    let paramsStr = ''
    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        const value = params[key];
        paramsStr += `${key}=${value}&`
      }
    }
    return `${url}?${paramsStr}`
  }
  
  return new Promise((resolve, reject) => {
    const scriptElement: any = document.createElement('script')
    scriptElement.src = generateUrl()
    document.body.appendChild(scriptElement)

    (window as any)[callbackName] = data => {
      resolve(data)
      document.removeChild(scriptElement)
    }
  })
}
