export default function parseUrl (url: string) {
  const search = url.split('?')[1]

  if (!search) return {}

  const keyValue = search.split('&')

  let res = {}

  keyValue.forEach(item => {
    const [key, value] = item.split('=')
    res = { ...res, [key]: isNaN(Number(value)) ? decodeURIComponent(value) : Number(value) } // 解析字符串需要注意两点：1. 参数中转过码的字符需要解码；2. 数字类型的参数解析出来需要转换为数字
  })

  return res
}